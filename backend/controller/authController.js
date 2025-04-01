import User from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User Not Found !"
            });
        }

        // Compare password with hashed password
        const passwordIsMatch = await bcrypt.compare(password, user.password);
        if (!passwordIsMatch) {
            return res.status(400).json({
                success: false,
                error: "Invalid credentials, password does not match."
            });
        }

        // Generate JWT token if password matches
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_KEY, { expiresIn: "10d" });

        res.status(200).json({
            success: true,
            message: "Successfully logged in",
            token,
            user: {
                _id: user._id,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export { login };

import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { addDepartment ,getDepartments,editDepartment} from '../controller/departmentController.js';
const router=express.Router();
router.get('/',authMiddleware,getDepartments);
router.post('/add',authMiddleware,addDepartment);
router.get('/:id',authMiddleware,editDepartment);
export default router;
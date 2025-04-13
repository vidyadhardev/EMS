import { useNavigate } from "react-router-dom"

export const columns=[
    {
        name:"Sr No.",
        selector:(row)=>row.sno
    },
    {
        name:"Department Name",
        selector:(row)=>row.dep_name
    },
    {
        name:"Action",
        selector:(row)=>row.action
    },
]
export const DepartmentButtons=({_id})=>{
    const navigate=useNavigate();
    return(
        <div className="flex space-x-3 font-bold">
            <button className="px-3 py-1 bg-teal-500 rounded-sm"
            onClick={()=>navigate(`/admin-dashboard/department/${_id}`)}
            >Edit</button>
            <button  className="px-3 py-1 bg-red-500 rounded-sm">Detach</button>
        </div>
    )
}

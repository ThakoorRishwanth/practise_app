import React, { useState } from 'react'

export const EmployeRow = ({employee, onDelete, onEdit}) => {
    
    const [editing, setEditing] = useState(false)

    const [formData, setFormData] = useState(employee)

    const handleChange = (e)=>{

        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSave = () => {
        onEdit(formData);
        setEditing(false)
    }
  return (
    <>
    <tr>
        <td>
            {editing ? (
                <input name='first_name' value={formData.first_name} onChange={handleChange} type='text'/>
            ):(
                employee.first_name
            )}
        </td>

        <td>
            {editing ? (
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
            ):(
                employee.gender
            )}
        </td>
        <td>
            {editing ? (
                <input name='salary' value={formData.salary} onChange={handleChange} type='number' />
            ):(
                employee.salary
            )}
        </td>
        <td>
            {editing ? (
                <button onClick={handleSave}>Save</button>
            ):(
                <div>
                <button onClick={()=>setEditing(true)}>Edit</button>
                <button onClick={()=>onDelete(employee.id)}>Delete</button>
                </div>
            )}
        </td>
    </tr>
    </>
  )
}

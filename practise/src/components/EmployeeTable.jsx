import React, { useState } from 'react'
import { EmployeRow } from './EmployeRow'

export const EmployeeTable = ({employee, onDelete, onEdit}) => {

    const [sortOrder, setSortOrder] = useState(null)

    const handleSort = (order)=>{
        setSortOrder(order)
    }

    const sortedEmployees = [...employee].sort((a,b)=>{

        if(sortOrder === 'asc') return a.salary - b.salary;

        if(sortOrder === 'desc') return b.salary - a.salary;

        return 0;
    });
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>
                    Salary{" "}
                    <button onClick={()=>handleSort('asc')}>⬆️</button>
                    <button onClick={()=>handleSort('desc')}>⬆⬇️</button>
                </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {sortedEmployees.map((ele)=>(
                <EmployeRow
                key={ele.id}
                employee={ele}
                onEdit={onEdit}
                onDelete={onDelete} />
            ))}
        </tbody>
    </table>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar';
import { GenderFilter } from './GenderFilter';
import { EmployeeTable } from './EmployeeTable';

export const FetchData = () => {
    const [employee, setEmployee] = useState([]);
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState("")

    const fetchData = async()=>{
        try{

            let res = await fetch("https://file.notion.so/f/f/3849cbaa-5010-40df-a27a-f34a3a69c598/ce7879ce-8dee-462f-9a6f-52a31ea104e5/MOCK_DATA.json?table=block&id=5766873f-14ad-4eba-9e97-7c51337fa118&spaceId=3849cbaa-5010-40df-a27a-f34a3a69c598&expirationTimestamp=1724932800000&signature=-VTniNu0eTH9JIU1WLevXrWSF4ySECMxn-F2lBMOznE&downloadName=MOCK_DATA.json")

            let data = await res.json();

            setEmployee(data)
        }
        catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleDelete = (id)=> {
        setEmployee(employee.filter((ele)=> ele.id !== id))
    };

    const handleEdit = (updatedEmployee)=>{
        setEmployee(
            employee.map((ele)=>
                ele.id === updatedEmployee.id ? updatedEmployee : ele
            )
        )
    };

    const filteredEmployees = employee.filter(
        (emp) =>
          emp.first_name.toLowerCase().includes(search.toLowerCase()) &&
          (gender ? emp.gender === gender : true)
      );

  return (
   <div className="app-container">
      <SearchBar search={search} setSearch={setSearch} />
      <GenderFilter setGender={setGender} />
      <EmployeeTable
        employee={filteredEmployees}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  )
}

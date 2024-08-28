import React from 'react'

export const GenderFilter = ({setGender}) => {
  return (
    <>
    <select onChange={(e)=> setGender(e.target.value)}>
        <option value=''>All</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
    </select>
    </>
  )
}

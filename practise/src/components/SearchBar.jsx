import React from 'react'

export const SearchBar = ({search, setSearch}) => {
  return (
    <>
    <input type="text"
    placeholder='Search by name'
    value={search}
    onChange={(e)=>  setSearch(e.target.value)}/>
    </>
  )
}
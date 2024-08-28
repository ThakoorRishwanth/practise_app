import React, { useMemo } from 'react'

export const useSearch = (item, search) => {
    
  return useMemo(
    ()=> item.filter((ele)=> item.first_name.toLowerCase().include(search.toLowerCase())),
    [item, search]
  )
}

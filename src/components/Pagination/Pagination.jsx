import React from 'react'
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0,0)
    }

  return (
    <div
    style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    }}
    >
      <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} color="secondary"/>
      </div>
  )
}

export default CustomPagination
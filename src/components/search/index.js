import { Container } from '@mui/system'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const Search = () => {
  return (
    <Container>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search your network" />
      </div>
    </Container>
  )
}

export default Search
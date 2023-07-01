import { InputAdornment, TextField } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const Search = () => {
  return (
    <Container>
      <Stack sx={{ mx: 2 }}>
        <TextField
          disabled
          size='small'
          InputProps={{
            startAdornment: <FaSearch className="search-icon" />,
          }}
          placeholder="Search your network"
          type="text"
        />
      </Stack>
    </Container>
  )
}

export default Search
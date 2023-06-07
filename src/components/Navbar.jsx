import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constanst'
import { SearchBar } from './'

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h4" pr={2} color="#fc1503">
        V<span style={{ color: '#fff' }}>imeo</span>
      </Typography>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar

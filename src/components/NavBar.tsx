import { HouseRounded, Menu } from '@mui/icons-material'
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

function NavBar () {
  return <AppBar position='fixed'>
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <HouseRounded sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'times',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            The House
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Menu />
            </IconButton>
          </Box>
      </Toolbar>
    </Container>
  </AppBar>
}

export default NavBar

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bodega Cat Finder
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/search-cats"
          >
            Search Cats
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/search-bodegas"
          >
            Search Bodegas
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/saved-cats"
          >
            Saved Cats
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/more-info"
          >
            More Info
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
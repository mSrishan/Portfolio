import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' }
];
const primaryColor = "#0e9c87";

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (link) => {
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#FFFFFF' }}>
      <Typography variant="h6" sx={{ my: 2, color: primaryColor, fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
        Srishan
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.link)} sx={{ textAlign: 'center', color: primaryColor }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#FFFFFF', color: primaryColor }}>
        <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', sm: 'none' }, color: primaryColor }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: primaryColor,
                textAlign: 'center',
                fontFamily: 'Roboto, sans-serif',
                display: { xs: 'flex', sm: 'block' },
                ml: { xs: 'auto', sm: 0 },
                mr: { xs: 7, sm: 0 },
                fontWeight: 700,
                letterSpacing: 1
              }}
            >
              SRISHAN
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleNavigation(item.link)}
                  sx={{
                    color: primaryColor,
                    mx: 1,
                    '&:hover': { color: '#0e9c87', backgroundColor: '#f0f0f0', transform: 'scale(1.05)' }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/path/to/your/SE_Srishan_Mandawala.pdf';
                link.download = 'SE_Srishan_Mandawala.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              sx={{
                color: '#757575',
                backgroundColor: '#e0e0e0',
                display: { xs: 'none', sm: 'block' },
                '&:hover': { color: '#0e9c87', backgroundColor: '#f0f0f0' }
              }}
            >
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#FFFFFF' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

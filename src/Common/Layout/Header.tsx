import { DarkMode, LightMode, Logout, Menu as MenuIcon, Person, Search, } from '@mui/icons-material';
import { Avatar, IconButton, Toolbar, useTheme, useMediaQuery, TextField, Menu, MenuItem, Box, Switch } from '@mui/material'

import logo from "../../assets/full-logo.svg"

import type { HeaderProps } from '../../Types/Layout.types';
import { AppBar } from '../../Constants/Layout.constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ open, handleDrawerOpen }) => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */

    const nav = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [Theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const [MenuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);


    /* ------------------------------------------------- Forms ------------------------------------------------- */
    /* ------------------------------------------------- APIs ------------------------------------------------- */
    /* ------------------------------------------------- Functions ------------------------------------------------- */

    // Handle drawer open
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMenuAnchor(event.currentTarget);

    // Handle drawer close
    const handleMenuClose = () => setMenuAnchor(null);

    // Handle Profile menu click
    const handleProfile = () => {
        nav("/my-profile");
        setMenuAnchor(null);
    }

    // Handle Logout menu click
    const handleLogout = () => {
        setMenuAnchor(null);
    }

    // Handle Theme Toggle
    const handleThemeToggle = () => {
        setTheme(prev => !prev);
        document.documentElement.setAttribute('data-theme', Theme ? 'light' : 'dark');
    }

    /* ------------------------------------------------- useEffect ------------------------------------------------- */
    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        <AppBar
            position="fixed"
            open={open}
            className={(!open || isMobile) ? 'app-bar collapsed' : 'app-bar'}
            sx={{ padding: '0.25rem 1rem' }}
        >
            <Toolbar className='toolbar' sx={{ width: (isMobile) ? '100%' : '100%' }}>
                {!open && <Box className='menu_toggle'>
                    <IconButton onClick={handleDrawerOpen}>
                        <MenuIcon sx={{ fontSize: "1.5rem", color: "var(--text)" }} />
                    </IconButton>
                    <img src={logo} alt="PlayTube" className='logo' />
                </Box>}

                <TextField
                    placeholder='Search'
                    className='searchbar'
                    InputProps={{
                        endAdornment: (
                            <Search />
                        )
                    }} />

                <Box
                    component={"div"}
                    onClick={handleMenuOpen}
                    className='avatar'
                >
                    <Avatar
                        sx={{
                            aspectRatio: "1/1",
                            maxWidth: isMobile ? "35px" : "65px",
                            maxHeight: isMobile ? "35px" : "65px"
                        }}
                    />
                </Box>
            </Toolbar>

            <Menu
                anchorEl={MenuAnchor}
                open={Boolean(MenuAnchor)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                className='profile_menu_popup'
            >
                <MenuItem className='profile_menu' onClick={handleProfile}>
                    <Person sx={{ fill: "var(--text)" }} />
                    My Profile
                </MenuItem>

                <MenuItem className='profile_menu' onClick={handleLogout}>
                    <Logout sx={{ fill: "var(--text)" }} />
                    LogOut
                </MenuItem>

                <MenuItem className='profile_menu toggle' disableRipple>
                    <LightMode sx={{ fill: "var(--text)" }} />
                    <Switch
                        size='small'
                        onClick={handleThemeToggle}
                        checked={Theme}
                    />
                    <DarkMode sx={{ fill: "var(--text)" }} />
                </MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Header
import React, { Suspense, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Menu } from '@mui/icons-material';
import { Box, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, Grid, useTheme, IconButton, useMediaQuery, Avatar } from '@mui/material';

import Header from './Header';

import logo from "../../assets/full-logo.svg"

import { menuList } from '../Menus/MenuList';
import { FallbackLoader } from '../Loader/FallbackLoaders';
import ErrorBoundary from '../Error Boundary/ErrorBoundary';
import { DrawerHeader } from '../../Constants/Layout.constants';
import type { MenuItems, MenuItemBase } from '../../Types/Layout.types';

import { playlists, subscriptions } from "../../Constants/dummydata"
import { fullscreen_menus } from "../../Constants/Layout.constants"

import "./Layout.css"

const Layout = () => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */

    const nav = useNavigate();
    const location = useLocation();
    const isFullscreen = fullscreen_menus.includes(location.pathname.split("/")[1])

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const selected: MenuItems = (menuList.find((menu) => menu.id === location.pathname.split("/")[1])?.id as MenuItems) ?? "home";

    const [open, setOpen] = useState(!isMobile && !isFullscreen);

    const drawerOpen = isFullscreen ? false : open;

    /* ------------------------------------------------- APIs ------------------------------------------------- */
    /* ------------------------------------------------- Functions ------------------------------------------------- */

    const handleSelect = (menu: MenuItemBase, id?: string | number) => {
        let path = menu.path

        if (id) {
            path = path + "/" + id
        }

        nav(path)
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    /* ------------------------------------------------- useEffect ------------------------------------------------- */
    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        <Box component={"section"} className='layout'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Header
                    open={drawerOpen}
                    handleDrawerOpen={handleDrawerOpen}
                />

                <Drawer
                    className={`drawer${drawerOpen ? '_open' : '_close'}`}
                    variant={(isMobile || isFullscreen) ? "temporary" : "persistent"}
                    anchor="left"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <Box component={"div"} className='drawerlist'>
                        <Grid container height={"100%"}>

                            {/* logo & menu toggle button */}
                            <Grid size={{ xs: 12 }} height={"10%"}>
                                <DrawerHeader sx={{ display: "flex", justifyContent: "left", width: "100%", gap: 1 }}>
                                    <IconButton onClick={handleDrawerClose} className='close'>
                                        <Menu />
                                    </IconButton>
                                    <img src={logo} alt="PlayTube" className='logo' />
                                </DrawerHeader>
                            </Grid>

                            {/* home menu */}
                            <Grid size={{ xs: 12 }} height={"10%"}>
                                <List className='menulist open'>
                                    <ListItem key={menuList[0].id} disablePadding>
                                        <ListItemButton
                                            selected={selected === menuList[0].id}
                                            className="listbutton open"
                                            onClick={() => handleSelect(menuList[0])}
                                        >
                                            {menuList[0].icon && <ListItemIcon className="listicon open">
                                                {React.createElement(menuList[0].icon)}
                                            </ListItemIcon>}
                                            <ListItemText primary={menuList[0].menu_name} className='listtext open' />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid size={{ xs: 12 }}><Divider /></Grid>

                            {/* suscription menu */}
                            <Grid size={{ xs: 12 }} minHeight={"35%"} pb={2}>
                                <List className='menulist open'>
                                    <ListItem key={menuList[1].id} disablePadding>
                                        <ListItemButton
                                            selected={selected === menuList[1].id}
                                            className="listbutton open"
                                            onClick={() => handleSelect(menuList[1])}
                                        >
                                            {menuList[1].icon && <ListItemIcon className="listicon open">
                                                {React.createElement(menuList[1].icon)}
                                            </ListItemIcon>}
                                            <ListItemText primary={menuList[1].menu_name} className='listtext open' />
                                        </ListItemButton>
                                    </ListItem>
                                </List>

                                <List className='sub_list'>
                                    {subscriptions.map((sub) =>
                                        <ListItem key={sub.id} disablePadding>
                                            <ListItemButton
                                                className="listbutton"
                                                onClick={() => handleSelect(menuList[1], sub.id)}
                                            >
                                                <ListItemIcon className="listicon">
                                                    <Avatar className='avatar' src={sub.img} />
                                                </ListItemIcon>
                                                <ListItemText primary={sub.name} className='listtext' />
                                            </ListItemButton>
                                        </ListItem>
                                    )}
                                </List>
                            </Grid>
                            <Grid size={{ xs: 12 }}><Divider /></Grid>

                            {/* playlist menu */}
                            <Grid size={{ xs: 12 }} minHeight={"35%"} pb={2}>
                                <List className='menulist open'>
                                    <ListItem key={menuList[2].id} disablePadding>
                                        <ListItemButton
                                            selected={selected === menuList[2].id}
                                            className="listbutton open"
                                            onClick={() => handleSelect(menuList[2])}
                                        >
                                            {menuList[2].icon && <ListItemIcon className="listicon open">
                                                {React.createElement(menuList[2].icon)}
                                            </ListItemIcon>}
                                            <ListItemText primary={menuList[2].menu_name} className='listtext open' />
                                        </ListItemButton>
                                    </ListItem>
                                </List>

                                <List className='play_list'>
                                    {playlists.map((item) =>
                                        <ListItem key={item.id} disablePadding>
                                            <ListItemButton
                                                className="listbutton"
                                                onClick={() => handleSelect(menuList[2], item.id)}
                                            >
                                                <ListItemText primary={item.name} className='listtext' />
                                                <ListItemText primary={`${item.videos} Videos`} className='listtext2' />
                                            </ListItemButton>
                                        </ListItem>
                                    )}
                                </List>
                            </Grid>
                            <Grid size={{ xs: 12 }}><Divider /></Grid>

                            {/* settings menu */}
                            <Grid size={{ xs: 12 }} height={"10%"}>
                                <List className='menulist open'>
                                    <ListItem key={menuList[3].id} disablePadding>
                                        <ListItemButton
                                            selected={selected === menuList[3].id}
                                            className="listbutton open"
                                            onClick={() => handleSelect(menuList[3])}
                                        >
                                            {menuList[3].icon && <ListItemIcon className="listicon open">
                                                {React.createElement(menuList[3].icon)}
                                            </ListItemIcon>}
                                            <ListItemText primary={menuList[3].menu_name} className='listtext open' />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Box>
                </Drawer>

                <Box component={"main"} className='outlet'>
                    <Suspense fallback={<FallbackLoader />}>
                        <ErrorBoundary>
                            <Outlet />
                        </ErrorBoundary>
                    </Suspense>
                </Box>
            </Box>
        </Box>
    );
}

export default Layout
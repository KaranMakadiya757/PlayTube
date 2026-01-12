import { Menu as MenuIcon, Search, } from '@mui/icons-material';
import { Avatar, IconButton, Toolbar, useTheme, useMediaQuery, TextField } from '@mui/material'


import type { HeaderProps } from '../../Types/Layout.types';
import { AppBar } from '../../Constants/Layout.constants';

const Header: React.FC<HeaderProps> = ({ open, handleDrawerOpen }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar
            position="fixed"
            open={open}
            className={(!open || isMobile) ? 'app-bar collapsed' : 'app-bar'}
            sx={{ padding: '1rem' }}
        >
            <Toolbar className='toolbar' sx={{ width: (isMobile) ? '100%' : 'auto' }}>
                {isMobile && <IconButton
                    onClick={handleDrawerOpen}
                    sx={[{ mr: 2, }, open && { display: 'none' }]}
                >
                    <MenuIcon sx={{ fontSize: "1rem" }} />
                </IconButton>}

                <TextField
                    placeholder='Search'
                    className='searchbar'
                    InputProps={{
                        endAdornment: (
                            <Search />
                        )
                    }} />

                <Avatar
                    className='avatar'
                    sx={{
                        aspectRatio: "1/1",
                        maxWidth: isMobile ? "35px" : "65px",
                        maxHeight: isMobile ? "35px" : "65px"
                    }}
                />
            </Toolbar>
            {/* <PermitRegistrationPopup
                open={permitRegistrationPopup}
                setOpen={setPermitRegistrationPopup}
            /> */}
        </AppBar>
    )
}

export default Header
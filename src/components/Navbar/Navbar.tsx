import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import GoogleIcon from '@mui/icons-material/Google';
import '@fontsource/roboto/700.css';



function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static"
            sx={{
                backgroundColor: 'white'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 0,
                        '& .MuiToolbar-root': {
                            paddingLeft: 0,
                            paddingRight: 0
                        }
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            size='small'
                        >
                            <GoogleIcon
                                sx={{
                                    color: 'black'
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            KEEP
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='small'
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon
                                sx={{
                                    color: 'black'
                                }}
                            />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='/'
                                >
                                    <Button>
                                        HOME
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='/features'>
                                    <Button>
                                        FEATURES
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='/pricing'>
                                    <Button>
                                        PRICING
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='/contact'>
                                    <Button>
                                        CONTACT
                                    </Button>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <Link
                            href='/'
                        >
                            <Button>
                                HOME
                            </Button>
                        </Link>
                        <Link
                            href='/features'
                        >
                            <Button>
                                FEATURES
                            </Button>
                        </Link>
                        <Link
                            href='/pricing'
                        >
                            <Button>
                                PRICING
                            </Button>
                        </Link>
                        <Link
                            href='/contact'
                        >
                            <Button>
                                CONTACT
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
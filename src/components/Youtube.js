import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
// import Malumot from './Malumot.json'
import Youtube from './Youtube'
import { Malumot, MalumotlarCards } from './Malumotlar'
///////////////////////////////////////////////
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Container } from '@mui/material';
import { deepmerge } from '@mui/utils';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// list icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
//////////////////////////////////
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// Toogle Icons
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings'; // setting
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import HelpIcon from '@mui/icons-material/Help';
import MessageIcon from '@mui/icons-material/Message';
import KeyboardIcon from '@mui/icons-material/Keyboard';






export const Batafsil = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', top: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    // List
    const style = {
        width: '100%',
        height: '100vh',
        maxWidth: 236,
        bgcolor: '#212121',
    };
    const TextListBody = {
        gap: "18px",
        display: "flex",
        alignItems: "center"
    }
    const home = {
        color: "#fff",
    }
    const ListText = {
        color: "#fff"
    }
    // ToggleBtn
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open = Boolean(anchorEl2);
    const handleClick = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl2(null);
    };
    const style2 = {
        width: '100%',
        height: '100vh',
        maxWidth: 300,
        bgcolor: '#212121',
    };
    // MyAccount
    const MyAccount = {
        top: "25px",
        right: "40px"
    }
    const [navBarBody, setnavBarBody] = React.useState(false);
    // const [cards, setCards] = React.useState(false);
    const MenuFun = () => {
        setnavBarBody(!navBarBody)
        // setCards(!cards)
    }
    const drop = {
        zIndex: '999'
    }
  return (
    <>
        {/* NavBar */}
        <Box sx={{ flexGrow: 1 }} className="boxNavbar">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={MenuFun}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <ul className="navUl">
                            <li className="navLink"><img src="./img/logoY.svg" alt="" /></li>
                            <li className="navLink">YouTube</li>
                            <li className="navLink"><sup className='LogoYSpan'>IN</sup></li>
                        </ul>
                    </Typography>
                    <Search style={drop}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        {/* <StyledInputBase
                            
                        /> */}
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={Malumot}
                            sx={{ width: 300 }}
                            inputProps={{ 'aria-label': 'search' }}
                            renderInput={(params) => <TextField {...params} placeholder="Search..." />}
                        />
                    </Search>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge color="error">
                            {/* mikrafon icon */}
                            <img src="./img/mik.svg" alt="" />
                        </Badge>
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge color="error">
                                {/* kamera icon */}
                                <img src="./img/live.svg" alt="" />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge color="error">
                                {/* menu icon */}
                                <img src="./img/pro.svg" alt="" />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                {/* qo'ng'iroq icon */}
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="inherit"
                        >
                            {/* profil icon */}
                            {/* <AccountCircle /> */}
                            <img src="./img/profil.jpg" className='user' alt="" />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
        <div className="YoutubeBody">
            <div className="navBar">
                <div className={navBarBody ? "navBarBody activ" : "navBarBody"}>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <HomeIcon style={home} />
                                <ListItemText primary="Home" style={ListText} />
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <div className="TextListBody" style={TextListBody}>
                                <ExploreIcon style={home} />
                                <ListItemText primary="Explore" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <SubscriptionsIcon style={home} />
                                <ListItemText primary="Subscriptions" style={ListText} />
                            </div>
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <LibraryAddIcon style={home} />
                                <ListItemText primary="Library" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <HistoryIcon style={home} />
                                <ListItemText primary="History" style={ListText} />
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <div className="TextListBody" style={TextListBody}>
                                <OndemandVideoIcon style={home} />
                                <ListItemText primary="Your Videos" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <WatchLaterIcon style={home} />
                                <ListItemText primary="Watch Later" style={ListText} />
                            </div>
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <ThumbUpAltIcon style={home} />
                                <ListItemText primary="Liked Videos" style={ListText} />
                            </div>
                        </ListItem>
                    </List>
                </div>
            </div>
            <div className="ToogleBtn">
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                </Box>
                <Menu
                    style={MyAccount}
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <List sx={style2} component="nav" aria-label="mailbox folders">
                        <div className="ToogelHeader">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src="./img/profil.jpg" className='ToggleImg' alt="" />
                                    </Avatar>
                                </ListItemAvatar>
                                <div className="toggleText">
                                    <h5 className='ToggleH1'>Bahromjon</h5>
                                    <h5 className='Togglep'>Manage Your Google Account</h5>
                                </div>
                            </ListItem>
                        </div>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <PermContactCalendarIcon style={home} />
                                <ListItemText primary="Your channel" style={ListText} />
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <div className="TextListBody" style={TextListBody}>
                                <MonetizationOnIcon style={home} />
                                <ListItemText primary="Purchases and memberships" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <SettingsIcon style={home} />
                                <ListItemText primary="YouTube Studio" style={ListText} />
                            </div>
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <SwitchAccountIcon style={home} />
                                <ListItemText primary="Switch account" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <LogoutIcon style={home} />
                                <ListItemText primary="Sign out" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <Brightness4Icon style={home} />
                                <ListItemText primary="Appearance: Dark" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <TranslateIcon style={home} />
                                <ListItemText primary="Language: British English" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <LanguageIcon style={home} />
                                <ListItemText primary="Location: UZB" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <SettingsIcon style={home} />
                                <ListItemText primary="Settings" style={ListText} />
                            </div>
                        </ListItem>
                        <ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <PrivacyTipIcon style={home} />
                                <ListItemText primary="Your data in YouTube" style={ListText} />
                            </div>
                        </ListItem><ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <HelpIcon style={home} />
                                <ListItemText primary="Help" style={ListText} />
                            </div>
                        </ListItem><ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <MessageIcon style={home} />
                                <ListItemText primary="Send feedback" style={ListText} />
                            </div>
                        </ListItem><ListItem button>
                            <div className="TextListBody" style={TextListBody}>
                                <KeyboardIcon style={home} />
                                <ListItemText primary="Keyboard shortcuts" style={ListText} />
                            </div>
                        </ListItem>
                    </List>
                </Menu>
            </div>
            <div className="Haqida">
                <div className="Video">
                    <div className="VHeader">
                        <img src="./img/yt1.png" alt="" />
                    </div>
                </div>
                <div className="HaqidaCards">
                    {
                        Malumot.map((val) => (
                            <div className="HCard" key={val.id}>
                                <div className="HImages">
                                    <img src={val.headerImg} alt="" />
                                </div>
                                <div className="cardText">
                                    <h3>{val.label}</h3>
                                    <h4>{val.text}</h4>
                                    <h4>{val.text2}</h4>
                                </div>
                            </div>    
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

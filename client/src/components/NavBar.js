import React,{useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react"
import {useHistory} from "react-router-dom"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';
import LogoIcon from "../assets/icon.png"

const LoginButton = ()=>{
  const {loginWithRedirect,logout} = useAuth0();
  const {user, isAuthenticated} = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin=()=>{
    loginWithRedirect()
  }
  const handleLogout=()=>{
    logout()
    setAnchorEl(null);
  }
const handleSavedPage =()=>{
  history.push("/SavedPage")
  setAnchorEl(null);
}
  return(
    <>
      {!isAuthenticated?
        <Button onClick={handleLogin} color="inherit">Login</Button>:
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <MenuItem onClick={handleSavedPage}>Saved Page</MenuItem>
              </Menu>
            </div>
      }
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function NavBar() {
  const history = useHistory();
  const handleHome=()=>{
    history.push("/")
  }
  const classes = useStyles();
  return (
    <div>
      <div>
        <AppBar
          position="static"
          style={{
            background: "#0A0F39",
            fontFamily: "Roboto",
            fontSize: "1vw",
            fontWeight: "500",
          }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title} onClick={handleHome}>
              ONEWAY
            </Typography>
            <IconButton color="inherit" aria-label="search" onClick={handleHome}>
              <SearchIcon />
            </IconButton>
            <LoginButton />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

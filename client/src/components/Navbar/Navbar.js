import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import './Navbar.css'
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" />
        <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
      </Link>
      
      <Toolbar className={classes.toolbar}>
      <div className="nav-item">
      <Link to={`/`} style={{textDecoration: 'none', fontSize: 22}} className={`nav--link`}>home</Link>
      </div>
      <div className="nav-item">
      <Link to={`/about`} style={{textDecoration: 'none', fontSize: 22}} className={`nav--link`}>about</Link>
      </div>
      <div className="nav-item">
      <Link to={`/contact_us`} style={{textDecoration: 'none', fontSize: 22}} className={`nav--link mr`}>contact-us</Link>
      </div>
        {user?.result ? (
          <div className={classes.profile}>
            <Link to={`profile`}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl} >{user?.result.name.charAt(0)}</Avatar>
            </Link>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (<div className='btnNav'>
          <Button component={Link} to="/auth" variant="contained" color="primary" className='mr'>Sign In</Button> 
          <Button component={Link} to="/signup" variant="contained" color="primary" className=''>Sign up</Button></div>
        )}
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

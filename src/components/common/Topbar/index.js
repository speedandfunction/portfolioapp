import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  siteHeader: {
    'z-index': '9999',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    'min-height': '40px',
    padding: '14px 0 7px',
    background: '#000',
    '-webkit-transition': 'all 0.2s ease-in-out',
    transition: 'all 0.2s ease-in-out',
  },
  headerContainer: {
    padding: '0 40px',
  },
  logo: {
    float: 'left',
    width: '190px',
    height: '40px',
    background: 'url(https://speedandfunction.com/wp-content/themes/sf/images/logo.png) no-repeat scroll 0 0 transparent',
    'background-size': '100%',
    'max-width': '172px',
    'background-color': 'transparent',
    border: '0',
    overflow: 'hidden',
    'text-indent': '-9999px',
  },
  mainNav: {
    float: 'right',
    'line-height': '1',
    margin: '7px 25px 0 0',

    '@media screen and (max-width: 768px)': {
      display: 'none',
    },
  },
  mainNavItem: {
    display: 'inline-block',
    position: 'relative',
    'margin-left': '55px',
    color: '#fff',
    'font-family': 'Open Sans Condensed, Helvetica, sans-serif',
    'font-size': '18px',
    'font-weight': '700',
    'line-height': '20px',
    'text-transform': 'uppercase',
    'text-decoration': 'none',
    'padding-bottom': '3px',
    '&:first-child': {
      'margin-left': '0',
    },
    '&:hover': {
      color: '#85beee',
      'text-decoration': 'none',
    },
    '&:after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      bottom: '-3px',
      left: '0',
      width: '10px',
      height: '2px',
      background: '#85beee',
      '-webkit-transition': 'all 0.2s ease-in-out',
      transition: 'all 0.2s ease-in-out',
    },
    '&:hover:after': {
      width: '100%',
    },
  },
  mobileTrigger: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    'vertical-align': 'middle',
    'font-size': '12px',
    color: '#fff',
    'text-transform': 'uppercase',
    'text-decoration': 'none',
    opacity: '1',
    '-webkit-transition': 'opacity 0.2s ease-in-out',
    transition: 'opacity 0.2s ease-in-out',
    display: 'none',

    '@media screen and (max-width: 768px)': {
      display: 'inline-block',
    },
  },
  mobileTriggerIcon: {
    position: 'relative',
    display: 'inline-block',
    'vertical-align': 'middle',
    width: '22px',
    height: '3px',
    'margin-left': '8px',
    'border-radius': '1px',
    background: '#fff',

    '&:before': {
      content: "''",
      position: 'absolute',
      left: '0',
      width: '22px',
      height: '3px',
      'border-radius': '1px',
      background: '#fff',
      top: '-8px',
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      left: '0',
      width: '22px',
      height: '3px',
      'border-radius': '1px',
      background: '#fff',
      top: '8px',
    },
  },
  mobileMenu: {
    'font-size': '18px',
    'z-index': '100',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '245px',
    'min-height': '100%',
    '-webkit-transform': 'translate3d(100%, 0, 0)',
    transform: 'translate3d(100%, 0, 0)',
    '-webkit-transition': 'all .1s ease',
    transition: 'all .1s ease',
    'background-color': '#000',
    display: 'none',

    '@media screen and (max-width: 768px)': {
      display: 'inline-block',
    },
  },
  mobileMenuHead: {
    'text-align': 'right',
    width: '100%',
  },
  mobileMenuClose: {
    display: 'inline-block',
    'padding-right': '15px',
    'vertical-align': 'middle',
    'box-sizing': 'content-box',
    width: '25px',
    'padding-bottom': '9px',
    'font-size': '42px',
    'line-height': '50%',
    'text-decoration': 'none',
    color: '#fff',
    opacity: '1',
    '-webkit-transition': 'opacity 0.2s ease-in-out',
    transition: 'opacity 0.2s ease-in-out',
  },
  mobileMenuItem: {
    padding: '12px 13px 12px 23px',
    'margin-left': '0',
    display: 'block',
    'line-height': '1',
    'text-decoration': 'none',
    'text-align': 'right',
    color: '#fff',
    '-webkit-transition': 'color 0.2s ease-in-out',
    transition: 'color 0.2s ease-in-out',
    'border-bottom': '1px solid rgba(226, 226, 226, 0.25)',
    'text-transform': 'uppercase',
  },
}));

const Topbar = () => {
  const classNames = useStyles();

  return (
    <div className={classNames.root}>
      <AppBar position="static">
        <header className={classNames.siteHeader}>
          <div className={classNames.headerContainer}>
            <a href="/" className={classNames.logo}>Speed &amp; Function</a>
            <nav className={classNames.mainNav}>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/#home">home</a>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/#about">about</a>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/#services">services</a>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/#clients">clients</a>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/#testimonials">testimonials</a>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/careers/">jobs</a>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/#contact">contact</a>
              <a className={classNames.mainNavItem} href="https://speedandfunction.com/blog/">Blog</a>
            </nav>
            <a href="#" title="Open menu" className={classNames.mobileTrigger}>
              <i className={classNames.mobileTriggerIcon} />
            </a>
            <div className={classNames.mobileMenu}>
              <h2 className={classNames.mobileMenuHead}>
                <a href="#" title="Close menu" className={classNames.mobileMenuClose}>×</a>
              </h2>
              <nav className="mp-items">
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/#home">home</a>
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/#about">about</a>
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/#services">services</a>
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/#clients">clients</a>
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/#testimonials">testimonials</a>
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/careers/">jobs</a>
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/#contact">contact</a>
                <a className={classNames.mobileMenuItem} href="https://speedandfunction.com/blog/">Blog</a>
              </nav>
            </div>
          </div>
        </header>
      </AppBar>
    </div>
  );
};

export default Topbar;

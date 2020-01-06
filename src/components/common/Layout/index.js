import React from 'react';
import PropTypes from 'prop-types';
import {Topbar} from 'components/common';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    // '*, *::before, *::after': {
    //   boxSizing: 'content-box',
    // },
    a: {
      '&:focus, &:hover': {
        textDecoration: 'underline',
      },
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },

    body: {
      fontFamily: theme.typography.fontFamily,
      background: '#ffffff',
    },
  },
  root: {
    height: '100%',
  },
  content: {
    height: '100%',
  },
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const Index = (props) => {
  const {children} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Topbar/> */}
      <main className={classes.content}>
        <div className={classes.container}>
          {children}
        </div>
      </main>
    </div>
  );
};

Index.propTypes = {
  children: PropTypes.node,
};

export default Index;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import {Layout} from 'components/common';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

const ThemeTopLayout = ({children, theme}) => (
  <>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
  </>
);

ThemeTopLayout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default ThemeTopLayout;

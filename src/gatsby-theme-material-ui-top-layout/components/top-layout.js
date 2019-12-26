import React from 'react';
import {ThemeTopLayout} from 'components/common';
import PropTypes from 'prop-types';

export default function TopLayout({children, theme}) {
  return (
    <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

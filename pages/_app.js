import React from 'react';
import '../styles/globals.css';
import {
  func, oneOfType, shape,
} from 'prop-types';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.defaultProps = {
  pageProps: {},
};

App.propTypes = {
  Component: func.isRequired,
  pageProps: oneOfType([shape({})]),
};

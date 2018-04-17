import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export const Footer = ({ author, company }) => (
  <footer className="footer">
    <div className="footer__author">{ author }</div>
    <div className="footer__company">{ company }</div>
  </footer>
);

Footer.propTypes = {
  author: PropTypes.string,
  company: PropTypes.string,
};

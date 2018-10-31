import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  const { phone, address } = props;
  return (
    <div>
      <div>
        <a href="#">Why we do what we do?</a>
        <a href="#">Where we meet</a>
        <a href="#">Join Us</a>
      </div>
      <div>
        <a href="#">{phone}</a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  phone: PropTypes.string.isRequired
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ msgError }) => (
  <div className="alert alert-danger" role="alert">
    { msgError }
  </div>
);

Error.propTypes = {
  msgError: PropTypes.string.isRequired,
}

export default Error;

import React from 'react'
import PropTypes from 'prop-types';
import { Label, Input } from '../../../imports/import';

const FormFields = ({ dataFields: { attribute, text }, inputChange }) => {
  return (
    <div className="col-md-6">
      <Label className="form-label">{text}</Label>
      <Input className="form-control" type="text" name={attribute} onChange={inputChange} />
    </div>
  )
};

FormFields.propTypes = {
  dataFields: PropTypes.object.isRequired,
  inputChange: PropTypes.func.isRequired,
}


export default FormFields;

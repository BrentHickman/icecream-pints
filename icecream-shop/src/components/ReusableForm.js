import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <p>Flavor:  
        <input
          type='text'
          name='name'
          placeholder='Name of Flavor' /><br></br></p>
        <input
          type='number'
          min='0.01'
          step='0.01'
          name='price'
          placeholder='Price' /><br></br>
        <input
          type='text'
          name='type'
          placeholder='Type' /><br></br>
        <textarea
          name='description'
          placeholder='Description' /><br></br>
        <input
          type='number'
          name='quantity'
          min='0'
          placeholder='Quantity' /><br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  flavor: PropTypes.object,
  buttonText: PropTypes.string
};

export default ReusableForm;
import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewFlavorForm(props) {

  function handleNewFlavorFormSubmission(event) {
    event.preventDefault();
    props.onNewFlavorCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      type: event.target.type.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
        <ReusableForm 
        formSubmissionHandler={handleNewFlavorFormSubmission}
        buttonText="Add to Menu" />
    </React.Fragment>
  );
}

NewFlavorForm.propTypes = {
  onNewFlavorCreation: PropTypes.func
};

export default NewFlavorForm;
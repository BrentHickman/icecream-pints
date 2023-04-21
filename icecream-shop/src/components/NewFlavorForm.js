import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
      <form onSubmit={handleNewFlavorFormSubmission}>
        <p>Flavor:  
        <input
          type='text'
          name='name'
          placeholder='Name of Flavor' /><br></br></p>
        <input
          type='number'
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
          placeholder='Quantity' /><br></br>
        <button type='submit'>Submit Flavor!</button>
      </form>
    </React.Fragment>
  );
}

NewFlavorForm.propTypes = {
  onNewFlavorCreation: PropTypes.func
};

export default NewFlavorForm;
import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditFlavorForm (props) {
  const { flavor } = props;

  function handleEditFlavorFormSubmission(event) {
    event.preventDefault();
    props.onEditFlavor({
      name: event.target.name.value, 
      price: parseFloat(event.target.price.value), 
      description: event.target.description.value, 
      type: event.target.type.value, 
      quantity: parseInt(event.target.quantity.value), 
      id: flavor.id});
  }
  return (
    <React.Fragment>
<ReusableForm 
        formSubmissionHandler={handleEditFlavorFormSubmission}
        buttonText="Update Flavor" />
    </React.Fragment>
  );
}
EditFlavorForm.propTypes = {
  flavor: PropTypes.object,
  onEditFlavor: PropTypes.func
};

export default EditFlavorForm;
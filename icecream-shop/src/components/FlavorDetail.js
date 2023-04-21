import React from "react";
import PropTypes from "prop-types";

function FlavorDetail(props){
  const { flavor } = props;
  return (
    <React.Fragment>
      <h1>Flavor Detail</h1>
      <h3>- {flavor.name} -</h3>
      <p>Price: ${flavor.price} per pint</p>
      <p>About: <em>{flavor.description}</em></p>
      <p>Type: <em>{flavor.type}</em></p>
      <p><em>Available in stock: {flavor.quantity}</em></p>
      <hr/>
    </React.Fragment>
  );
}

FlavorDetail.propTypes = {
  flavor: PropTypes.object
};

export default FlavorDetail;
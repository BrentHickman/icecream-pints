import React from "react";
import PropTypes from "prop-types";


function Flavor(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenFlavorClicked(props.id)}>
        <h3><em>{props.name} - ${props.price}</em></h3>
        <p>Left in stock: {props.quantity} pints</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Flavor.propTypes = { //name, price, desc, type, quantity
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
};


export default Flavor;
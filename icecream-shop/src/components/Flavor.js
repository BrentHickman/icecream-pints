import React from "react";
import PropTypes from "prop-types";


function Flavor(props) {
  if (props.quantity > 0) {
    return (
      <React.Fragment>
        <div onClick={() => props.whenFlavorClicked(props.id, props.type)}>
          <h3><em>{props.name} - ${props.price}</em></h3>
          <p>Left in stock: {props.quantity} pints</p>
          <hr />
        </div>
        <button onClick={() => props.whenSellClicked(props.id)} type="submit">Sell one Pint</button><span>   </span>

      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div onClick={() => props.whenFlavorClicked(props.id, props.type)}>
          <h3><em>{props.name} - ${props.price}</em></h3>
          <p>Out of Stock</p>
          <hr />
        </div>
        <span>   </span>

      </React.Fragment>
    );
  }
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
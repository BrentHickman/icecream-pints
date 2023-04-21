import React from "react";
import Flavor from "./Flavor";
import PropTypes from "prop-types";

function FlavorList(props) {
  return (
    <React.Fragment>
    <hr/>
    {props.flavorList.map((flavor) =>
      <Flavor 
        whenFlavorClicked = { props.onFlavorSelection }
        name={flavor.name}
        price={flavor.price}
        description={flavor.description}
        type={flavor.type}
        quantity={flavor.quantity}
        id={flavor.id}
        key={flavor.id}/>
    )}
  </React.Fragment>
  );
}

FlavorList.propTypes = {
  flavorList: PropTypes.array,
  onFlavorSelection: PropTypes.func,
};

export default FlavorList;
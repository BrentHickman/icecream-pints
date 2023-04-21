import React from "react";
import PintsImage from "./../img/icecream_pints.jpeg";

function Header() {
  const headerStyles = {
    width: '65%',    
  }
  return (
    <React.Fragment>
      <div style={headerStyles} className='header'>
        <h1>ICE CREAM BY THE PINT</h1>
        <img src={PintsImage} style={headerStyles} alt="open pints of ice cream" />
        </div>

    </React.Fragment>
  );
}

export default Header;
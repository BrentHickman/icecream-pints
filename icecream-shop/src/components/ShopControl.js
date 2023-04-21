import React from 'react';
import NewFlavorForm from './NewFlavorForm';
import FlavorList from './FlavorList';
import FlavorDetail from './FlavorDetail';

class ShopControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainFlavorList: [],
      selectedFlavor: null
    };
  }
  
  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedFlavor: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewFlavorToList = (newFlavor) => {
    const newMainFlavorList = this.state.mainFlavorList.concat(newFlavor);
    this.setState({mainFlavorList: newMainFlavorList,
                  formVisibleOnPage: false });
  }


  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.state.mainFlavorList.filter(flavor => flavor.id === id)[0];
    this.setState({selectedFlavor: selectedFlavor});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedFlavor != null) {
      currentlyVisibleState = <FlavorDetail flavor = {this.state.selectedFlavor} />
      buttonText = "Return to Flavor List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewFlavorForm onNewFlavorCreation={this.handleAddingNewFlavorToList} /> ;
      buttonText = "Return to Flavor List";
    } else {
      currentlyVisibleState = <FlavorList flavorList={this.state.mainFlavorList} onFlavorSelection={this.handleChangingSelectedFlavor} onRestock={this.restock} />;
      buttonText = "Add Flavor";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br></br><br></br><br></br><button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ShopControl;
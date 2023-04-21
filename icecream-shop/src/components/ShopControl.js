import React from 'react';
import NewFlavorForm from './NewFlavorForm';
import FlavorList from './FlavorList';
import FlavorDetail from './FlavorDetail';
import EditFlavorForm from './EditFlavorForm';

class ShopControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainFlavorList: [],
      selectedFlavor: null,
      editing: false
    };
  }
  
  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedFlavor: null,
        editing: false
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

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingFlavorInList = (flavorToEdit) => {
    const editedMainFlavorList = this.state.mainFlavorList
      .filter(flavor => flavor.id !== this.state.selectedFlavor.id)
      .concat(flavorToEdit);
    this.setState({
        mainFlavorList: editedMainFlavorList,
        editing: false,
        selectedFlavor: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditFlavorForm flavor = {this.state.selectedFlavor} onEditFlavor = {this.handleEditingFlavorInList} />
      buttonText = "Return to Flavor List";
    }
    else if (this.state.selectedFlavor != null) {
      currentlyVisibleState = <FlavorDetail flavor = {this.state.selectedFlavor} onClickingEdit={this.handleEditClick}/>
      buttonText = "Return to Flavor List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewFlavorForm onNewFlavorCreation={this.handleAddingNewFlavorToList} /> ;
      buttonText = "Return to Flavor List";
    } else {
      currentlyVisibleState = <FlavorList flavorList={this.state.mainFlavorList} 
      onFlavorSelection={this.handleChangingSelectedFlavor} 
      // onRestock={this.restock}
      onClickingEdit = {this.handleEditClick}  />;
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
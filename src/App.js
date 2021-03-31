import React from 'react'
import SideDrawer from "./Components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";

class App extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    console.log('Yeah i Called')
    this.setState({ showSideDrawer : false, });
  };

  sideDrawerTogglerHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer : !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <div>
        <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
        <Toolbar togglerClicked={this.sideDrawerTogglerHandler} />
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;

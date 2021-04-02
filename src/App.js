import React from 'react'
import SideDrawer from "./Components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import {BrowserRouter as Router} from 'react-router-dom'

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
      <Router>
        <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
        <Toolbar togglerClicked={this.sideDrawerTogglerHandler} />
        <BurgerBuilder />
      </Router>
    );
  }
}

export default App;

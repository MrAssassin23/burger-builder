import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer , classes.Close]

  if(props.open) {
    sideDrawerClasses = [classes.SideDrawer , classes.Open]
  }
  console.log( props.open , props.close)
  return (
    <>
      <Backdrop show={props.open} onCancel={props.close}  />
      <div className={sideDrawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;

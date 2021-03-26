import React from 'react';
import Burger from '../../Components/Burger/Burger';

// import classes from './BurgerBuilder.module.css';

class BurgerBuilder extends React.Component {

      state = {
            ingredients : {
                  salad : 1,
                  cheese : 2,
                  meat : 1,
                  bacon : 1
            }
      }

      render() {
            return (
                  <>
                        <Burger ingredients={this.state.ingredients} />
                  </>
            )
      }
}

export default BurgerBuilder
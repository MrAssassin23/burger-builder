import React from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/BuildControls/BuildControls";

// import classes from './BurgerBuilder.module.css';

const INGREDIENT_PRICES = {
      salad: 0.5,
      cheese: 0.4,
      meat: 1.3,
      bacon: 0.7
}

class BurgerBuilder extends React.Component {

      state = {
            ingredients: {
                  salad: 0,
                  cheese: 0,
                  meat: 0,
                  bacon: 0
            },
            totalPrice: 4
      }

      countIngredients = (type) => {
            return this.state.ingredients[type]
      }

      addIngredient = (type) => {
            console.log(type)

            const oldCount = this.state.ingredients[type]
            const newCount = oldCount + 1
            const updatedIngredients = {...this.state.ingredients}
            updatedIngredients[type] = newCount
            console.log(updatedIngredients)
            const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
            
            this.setState({ ingredients : updatedIngredients, totalPrice : newPrice })
      }

      removeIngredient = (type) => {
            const oldCount = this.state.ingredients[type]

            if(oldCount === 0 ){
                  return null
            }

            const newCount = oldCount - 1
            const updatedIngredients = {...this.state.ingredients}
            updatedIngredients[type] = newCount

            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
            
            this.setState({ ingredients : updatedIngredients, totalPrice : newPrice })
      }


      render() {
            const disabled = {...this.state.ingredients}
            for(let key in disabled) {
                  disabled[key] = disabled[key] <= 0
            }

            return (
                  <>
                        <Burger ingredients={this.state.ingredients} />
                        <BuildControls
                              itemAdd = {this.addIngredient}
                              itemRemove = {this.removeIngredient}
                              itemCount = {this.countIngredients}
                              disabled = {disabled}
                              total = {this.state.totalPrice}
                        />
                  </>
            )
      }
}

export default BurgerBuilder
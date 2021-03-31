import React from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

import classes from './BurgerBuilder.module.css';

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
            totalPrice: 4.,
            purchasable : false,
            purchasing: false
      }

      updatePurchasable(ingredient) {
            const sum = Object.keys(ingredient)
                  .map( (ing) => ingredient[ing] )
                  .reduce( (sum , el) => sum + el , 0)
            this.setState({purchasable : sum > 0})
      }

      countIngredients = (type) => {
            return this.state.ingredients[type]
      }

      updatePurchasing = () => {
            this.setState({purchasing : true})
      }

      cancelPurchasing = () => {
            this.setState({purchasing : false})
      }

      continueHandler = () => {
            alert('Continued....!')
      }

      addIngredient = (type) => {

            const oldCount = this.state.ingredients[type]
            const newCount = oldCount + 1
            const updatedIngredients = {...this.state.ingredients}
            updatedIngredients[type] = newCount
            const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
            
            this.setState({ ingredients : updatedIngredients, totalPrice : newPrice })
            this.updatePurchasable(updatedIngredients)
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
            this.updatePurchasable(updatedIngredients)
      }


      render() {
            const disabled = {...this.state.ingredients}
            for(let key in disabled) {
                  disabled[key] = disabled[key] <= 0
            }

            return (
                  <div className={classes.BurgerBuilder}>
                        <Modal show={this.state.purchasing}  onCancel={this.cancelPurchasing} >
                              <OrderSummary 
                                    ingredients={this.state.ingredients}
                                    onContinue = {this.continueHandler}
                                    onCancel={this.cancelPurchasing} 
                                    total = {this.state.totalPrice}
                              />
                        </Modal>
                        <Burger ingredients={this.state.ingredients} />
                        <BuildControls
                              itemAdd = {this.addIngredient}
                              itemRemove = {this.removeIngredient}
                              itemCount = {this.countIngredients}
                              disabled = {disabled}
                              purchasable = {this.state.purchasable}
                              purchasing = {this.updatePurchasing}
                              total = {this.state.totalPrice}
                        />
                  </div>
            )
      }
}

export default BurgerBuilder
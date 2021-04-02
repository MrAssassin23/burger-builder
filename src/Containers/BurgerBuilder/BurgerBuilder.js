import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import { Route,  Switch, withRouter } from 'react-router-dom'

import classes from './BurgerBuilder.module.css';
import Checkout from '../Checkout/Checkout';

const INGREDIENT_PRICES = {
      salad: 0.5,
      cheese: 0.4,
      meat: 1.3,
      bacon: 0.7
}

const BurgerBuilderComponent = (props) => {
      const disabled = { ...props.propState.ingredients }
      for (let key in disabled) {
            disabled[key] = disabled[key] <= 0
      }

      return (<div className={classes.BurgerBuilder}>
            <Modal show={props.propState.purchasing} onCancel={props.cancelPurchasing} >
                  <OrderSummary
                        ingredients={props.propState.ingredients}
                        onContinue={props.continueHandler}
                        onCancel={props.cancelPurchasing}
                        total={props.propState.totalPrice}
                  />
            </Modal>
            <Burger ingredients={props.propState.ingredients} />
            <BuildControls
                  itemAdd={props.addIngredient}
                  itemRemove={props.removeIngredient}
                  itemCount={props.countIngredients}
                  disabled={disabled}
                  purchasable={props.propState.purchasable}
                  purchasing={props.updatePurchasing}
                  total={props.propState.totalPrice}
            />
      </div>
      )
}

class BurgerBuilder extends Component {

      state = {
            ingredients: {
                  salad: 0,
                  cheese: 0,
                  meat: 0,
                  bacon: 0
            },
            totalPrice: 4.,
            purchasable: false,
            purchasing: false
      }
 
      
      updatePurchasable(ingredient) {
            const sum = Object.keys(ingredient)
                  .map((ing) => ingredient[ing])
                  .reduce((sum, el) => sum + el, 0)
            this.setState({ purchasable: sum > 0 })
      }

      countIngredients = (type) => {
            return this.state.ingredients[type]
      }

      updatePurchasing = () => {
            this.setState({ purchasing: true })
      }

      cancelPurchasing = () => {
            this.setState({ purchasing: false })
      }

      continueHandler = () => {
            this.cancelPurchasing()
            this.props.history.push('/Checkout')
            // console.log(this.props)
      }

      addIngredient = (type) => {

            const oldCount = this.state.ingredients[type]
            const newCount = oldCount + 1
            const updatedIngredients = { ...this.state.ingredients }
            updatedIngredients[type] = newCount
            const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
            this.updatePurchasable(updatedIngredients)
      }

      removeIngredient = (type) => {
            const oldCount = this.state.ingredients[type]

            if (oldCount === 0) {
                  return null
            }

            const newCount = oldCount - 1
            const updatedIngredients = { ...this.state.ingredients }
            updatedIngredients[type] = newCount

            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
            this.updatePurchasable(updatedIngredients)
      }
      
      render() {

            return (
                  <>
                        <Switch>
                              <Route path='/Burger-Builder' >
                                    <BurgerBuilderComponent
                                          propState={this.state}
                                          cancelPurchasing={this.cancelPurchasing}
                                          continueHandler={this.continueHandler}
                                          addIngredient={this.addIngredient}
                                          removeIngredient={this.removeIngredient}
                                          countIngredients={this.countIngredients}
                                          updatePurchasing={this.updatePurchasing}
                                    />
                              </Route>
                              <Route path='/' exact>
                                    <BurgerBuilderComponent
                                          propState={this.state}
                                          cancelPurchasing={this.cancelPurchasing}
                                          continueHandler={this.continueHandler}
                                          addIngredient={this.addIngredient}
                                          removeIngredient={this.removeIngredient}
                                          countIngredients={this.countIngredients}
                                          updatePurchasing={this.updatePurchasing}
                                    />
                              </Route>
                              <Route path='/Checkout' >
                                    <Checkout 
                                          ingredients = {this.state.ingredients}
                                          total={this.state.totalPrice}
                                    />
                              </Route>
                        </Switch>
                  </>
            )
      }
}

export default withRouter(BurgerBuilder)
import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from "../../Components/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import classes from './BurgerBuilder.module.css';
import Checkout from '../Checkout/Checkout';
import * as actionTypes from '../../redux/actions'

const BurgerBuilderComponent = (props) => {
      const disabled = { ...props.ingredients }
      for (let key in disabled) {
            disabled[key] = disabled[key] <= 0
      }

      return (<div className={classes.BurgerBuilder}>
            <Modal show={props.propState.purchasing} onCancel={props.cancelPurchasing} >
                  <OrderSummary
                        ingredients={props.ingredients}
                        onContinue={props.continueHandler}
                        onCancel={props.cancelPurchasing}
                        total={props.totalPrice}
                  />
            </Modal>
            <Burger ingredients={props.ingredients} />
            <BuildControls
                  itemAdd={props.addIngredient}
                  itemRemove={props.removeIngredient}
                  itemCount={props.countIngredients}
                  disabled={disabled}
                  purchasable={props.purchasable(props.ingredients)}
                  purchasing={props.updatePurchasing}
                  total={props.totalPrice}
            />
      </div>
      )
}

class BurgerBuilder extends Component {

      state = {
            purchasing: false
      }


      updatePurchasable(ingredient) {
            const sum = Object.keys(ingredient)
                  .map((ing) => ingredient[ing])
                  .reduce((sum, el) => sum + el, 0)
            return sum > 0 
      }

      countIngredients = (type) => {
            return this.props.ingredients[type]
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


      render() {

            return (
                  <>
                        <Switch>
                              <Route path='/Burger-Builder' >
                                    <BurgerBuilderComponent
                                          propState={this.state}
                                          ingredients={this.props.ingredients}
                                          totalPrice = {this.props.totalPrice}
                                          cancelPurchasing={this.cancelPurchasing}
                                          continueHandler={this.continueHandler}
                                          addIngredient={this.props.addIngredient}
                                          removeIngredient={this.props.removeIngredient}
                                          countIngredients={this.countIngredients}
                                          updatePurchasing={this.updatePurchasing}
                                          purchasable = {this.updatePurchasable}
                                    />
                              </Route>
                              <Route path='/' exact>
                                    <BurgerBuilderComponent
                                          propState={this.state}
                                          ingredients={this.props.ingredients}
                                          totalPrice = {this.props.totalPrice}
                                          cancelPurchasing={this.cancelPurchasing}
                                          continueHandler={this.continueHandler}
                                          addIngredient={this.props.addIngredient}
                                          removeIngredient={this.props.removeIngredient}
                                          countIngredients={this.countIngredients}
                                          updatePurchasing={this.updatePurchasing}
                                          purchasable = {this.updatePurchasable}
                                    />
                              </Route>
                              <Route path='/Checkout' >
                                    <Checkout
                                          ingredients={this.props.ingredients}
                                          total={this.props.totalPrice}
                                    />
                              </Route>
                        </Switch>
                  </>
            )
      }
}

const mapPropToState = state => {
      return {
            ingredients: state.ingredients,
            totalPrice: state.totalPrice
      }
}

const mapDispatchToProps = dispatch => {
      return {
            addIngredient: (ingType) => dispatch({ type: actionTypes.ADD_INGREDIENTS, ingType: ingType }),
            removeIngredient: (ingType) => dispatch({ type: actionTypes.REMOVE_INGREDIENTS, ingType: ingType })
      }
}

export default connect(mapPropToState, mapDispatchToProps)(withRouter(BurgerBuilder))
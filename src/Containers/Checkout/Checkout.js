import React from 'react'
import Burger from '../../Components/Burger/Burger'

import classes from './Checkout.module.css'

class Checkout extends React.Component {

      render() {
            return (
                  <div style={{ marginTop: '6rem' }}>
                        <Burger ingredients={this.props.ingredients} />
                        <div className={classes.ContactContainer}>
                              <p className={classes.TotalLabel}>Your Total is :  <strong>{this.props.total.toFixed(2)}</strong> $ </p>
                              <h3 className={classes.TotalLabel}>Enter Your Delivery Details</h3>
                              <form>
                                    <fieldset>
                                          <legend> Name : </legend>
                                          <input type='text' />
                                    </fieldset>
                              </form>
                        </div>
                  </div>
            )
      }
}

export default Checkout
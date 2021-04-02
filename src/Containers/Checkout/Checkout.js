import React from 'react'
import Burger from '../../Components/Burger/Burger'

import classes from './Checkout.module.css'

class Checkout extends React.Component {
      state = {
            contactForm: {
                  name: {
                        value: '',
                        isTouched: false,
                        isValid: false
                  },
                  street: {
                        value: '',
                        isTouched: false,
                        isValid: false
                  },
                  zipcode: {
                        value: '',
                        isTouched: false,
                        isValid: false
                  },
                  country: {
                        value: '',
                        isTouched: false,
                        isValid: false
                  },
                  email: {
                        value: '',
                        isTouched: false,
                        isValid: false
                  },
                  deliveryMethod: {
                        value : 'fastest',
                        isValid: true
                  }
            },
            isFormValid: false
      }

      selectChangeHandler = (e) => {
 
            const updatedForm = { ...this.state.contactForm }
            updatedForm['deliveryMethod'].value = e.target.value
            this.setState({ contactForm : updatedForm})
      }

      inputHandler = (event, key) => {
            const updatedForm = { ...this.state.contactForm }

            const updatedElement = updatedForm[key]

            updatedElement['value'] = event.target.value
            updatedElement['isTouched'] = true
            updatedElement['isValid'] = this.inputIsValid(updatedElement.value, key)
            
            let isFormValid = true
            for ( let ele in updatedForm){
                  isFormValid = updatedForm[ele].isValid && isFormValid
            }

            this.setState({ contactForm: updatedForm, isFormValid : isFormValid })
      }

      inputIsValid = (value, key) => {
            let isValid = true

            isValid = value.trim() !== '' && isValid

            if (key === 'zipcode') {
                  const pattern = /^\d+$/;
                  isValid = pattern.test(value) && value.length === 6 && isValid
            }

            if (key === 'email') {
                  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                  isValid = pattern.test(value) && isValid
            }

            return isValid
      }

      showData = (e) => {
            e.preventDefault()
            const data = { }

            for (let key in this.state.contactForm) {
                  data[key] = this.state.contactForm[key].value
            }
            alert('Your Order will be there soon... \n' + JSON.stringify(data))

      }

      render() {
            return (
                  <div style={{ marginTop: '6rem' }}>
                        <Burger ingredients={this.props.ingredients} />
                        <div className={classes.ContactContainer}>
                              <h2 className={classes.TotalLabel}>Your Total is :  <strong>{this.props.total.toFixed(2)}</strong> $ </h2>
                              <h3 className={classes.TotalLabel}>Enter Your Delivery Details</h3>
                              <form>
                                    <input
                                          type='text'
                                          onChange={(event) => this.inputHandler(event, 'name')}
                                          placeholder={'Enter Name...'}
                                          className={ !this.state.contactForm.name.isValid && this.state.contactForm.name.isTouched ? classes.Invalid : null}
                                          value={this.state.contactForm.name.value} />
                                    <input
                                          type='text'
                                          onChange={(event) => this.inputHandler(event, 'street')}
                                          placeholder={'Enter Street...'}
                                          className={ !this.state.contactForm.street.isValid && this.state.contactForm.street.isTouched ? classes.Invalid : null}
                                          value={this.state.contactForm.street.value} />
                                    <input
                                          type='text'
                                          onChange={(event) => this.inputHandler(event, 'zipcode')}
                                          placeholder={'Enter Zipcode...'}
                                          className={ !this.state.contactForm.zipcode.isValid && this.state.contactForm.zipcode.isTouched ? classes.Invalid : null}
                                          value={this.state.contactForm.zipcode.value} />
                                    <input
                                          type='text'
                                          onChange={(event) => this.inputHandler(event, 'country')}
                                          placeholder={'Enter Country...'}
                                          className={ !this.state.contactForm.country.isValid && this.state.contactForm.country.isTouched ? classes.Invalid : null}
                                          value={this.state.contactForm.country.value} />
                                    <input
                                          type='text'
                                          onChange={(event) => this.inputHandler(event, 'email')}
                                          placeholder={'Enter Email...'}
                                          className={ !this.state.contactForm.email.isValid && this.state.contactForm.email.isTouched ? classes.Invalid : null}
                                          value={this.state.contactForm.email.value} />
                                    <select onChange={(e) => this.selectChangeHandler(e)} value={this.state.contactForm.deliveryMethod.value}>
                                          <option value='fastest' >  Fastest </option>
                                          <option value='normal' >   Normal </option>
                                          <option value='cheapest' > Cheapest </option>
                                    </select>
                                    <button 
                                          className={classes.OrderButton} 
                                          disabled={!this.state.isFormValid} 
                                          onClick={this.showData}>
                                          Order 
                                    </button>
                              </form>
                        </div>
                  </div>
            )
      }
}

export default Checkout
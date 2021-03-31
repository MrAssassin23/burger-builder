import React from 'react';
import classes from './OrderSummary.module.css';

const OrderSummary = (props) => {
    
    const ingredientSummary = Object.keys(props.ingredients)
        .map((ing => {
            return(
                <li key={ing}>
                    <span style={{ textTransform : 'Capitalize' }} > {ing} </span> : {props.ingredients[ing]}
                </li>
            )
        })) 

    return(
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Your Total is :  <strong>{props.total.toFixed(2)}</strong> $ </p>
            <p>Continue to checkout ?</p>
            <button className={[classes.ContinueBtn , classes.Btn].join(' ')} onClick={props.onContinue}>Continue</button>
            <button className={[classes.CancelBtn , classes.Btn].join(' ')} onClick={props.onCancel} >Cancel</button> 
        </>
    )
}

export default OrderSummary
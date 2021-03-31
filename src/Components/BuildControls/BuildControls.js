import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const BuildControls = (props) => {
      const controls = ['salad' , 'meat' , 'cheese' , 'bacon' ]

      return (
            <div className={classes.BuildControls}>
                  {controls.map((cntrl) => {
                        return (
                              <BuildControl 
                                    key={cntrl}
                                    label = {cntrl}
                                    add = {props.itemAdd}
                                    remove = {props.itemRemove}
                                    count={props.itemCount(cntrl)}
                                    disabled={props.disabled[cntrl]}
                              />
                        )
                  }) }    
                  <p className={classes.Total}> Total :  <strong> {props.total.toFixed(2)} $ </strong> </p>  
                  <button 
                        className={classes.OrderButton} 
                        disabled={!props.purchasable} 
                        onClick={props.purchasing}
                  >Order Now</button>
            </div>
      )
}

export default BuildControls
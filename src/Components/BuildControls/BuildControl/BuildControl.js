import React from 'react'

import classes from './BuildControl.module.css'

const BuildControl = (props) => {
      return (
            <div className={classes.BuildControl}>
                  <p className={classes.Label} > {props.label} </p>
                  <span>
                        <button className={classes.Less} onClick={ () => props.remove(props.label) } disabled={props.disabled} > - </button>
                        <p className={classes.Count} > {props.count} </p>
                        <button className={classes.More} onClick={ () => props.add(props.label) } > + </button>
                  </span>     
            </div>
      )
}

export default BuildControl
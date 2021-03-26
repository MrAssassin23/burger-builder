import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

import classes from './Burger.module.css'

const Burger = (props) => {
      const ingredient = Object.keys(props.ingredients).map( (ing) => {
                  return [...Array(props.ingredients[ing])].map( (_,i) => {
                        return <BurgerIngredients key={ing + i} type={ing} />
                  } )
      })

      console.log(ingredient)

      return (
            <div className={classes.Burger}>
                  <BurgerIngredients type='bread-top'/>
                  {ingredient}
                  <BurgerIngredients type='bread-bottom'/>
            </div>
      )
}

export default Burger
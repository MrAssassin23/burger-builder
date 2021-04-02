import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

import classes from './Burger.module.css'

const Burger = (props) => {
      let ingredient = Object.keys(props.ingredients)
            .map((ing) => {
                  return [...Array(props.ingredients[ing])].map((_, i) => {
                        return <BurgerIngredients key={ing + i} type={ing} />
                  })
            })
            .reduce((arr , el) => {
                  return arr.concat(el)
            }, [])

      if(ingredient.length === 0){
            ingredient = <p> Hey..!! Start Creating Your Yummmmyy Burger </p>
      }

      return (
            <div className={classes.Burger}>
                  <BurgerIngredients type='bread-top' />
                  {ingredient}
                  <BurgerIngredients type='bread-bottom' />
            </div>
      )
}

export default Burger
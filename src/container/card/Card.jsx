import React, { useState } from 'react'
import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { submitCart } from '../../store/cart-slice';
import FullRecipe from '../FullRecipe/FullRecipe';


const Card = ({id, title, image, cuisine, type, maxCarbs, maxProtein, maxCalories}) => {

  const cart = useDispatch();
  const cartCheck = useSelector(state => state.cart.dishes);
  //open and close modul for recipe ingredients
  const [modul, setModul] = useState(false);

  const handleCart = () =>{

    //check if there is room to add another recipe to cart, max 3
    if(cartCheck.length >= 3){
      alert("There are already 3 dishes for the day, delete one if you wish to add this recipe!");
    } 
    else {
      //check if the recipe is already in the cart 
      let clear = true;
      for(let i = 0; i < cartCheck.length; i++){
        if(cartCheck[i].id == id){
          clear = false;
        }
      }

      //if recipe is in cart throw alert, else add recipe
      if(!clear){
        alert("This recipe is already added within the cart, choose another");
      }
      else{
        cart(submitCart({id, title, maxCarbs, maxProtein, maxCalories}));
      }
    }
  }

  const handleRecipe = () =>{
    setModul(true);
  }

  return (
    <div className='card'>
        <img src={image} alt='bruh'/>
        <div className='card__info'>
            <div className='card__info-titles'>
                <h5>{title}</h5>
                <h5>Cuisine: {cuisine}</h5>
                <h5>Type: {type}</h5>
                <h5>Max Carbs: {maxCarbs}g</h5>
                <h5>Max Protein: {maxProtein}g</h5>
                <h5>Max Calories: {maxCalories}kcal</h5>
            </div>
            <div className='card__info-buttons'>
                <button onClick={handleRecipe}>Check full recipe</button>
                <button onClick={handleCart}>Add to Dishes</button>
            </div>
        </div>
      
        <FullRecipe modul={modul} setModul={setModul} id={id}/>
    </div>
  )
}

export default Card
import React from 'react'
import { useState } from 'react'
import './Dishes.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartItem } from '../../store/cart-slice'
import { useEffect } from 'react'

const Dishes = () => {

  const dishes = useSelector(state => state.cart.dishes);
  const deleteDish = useDispatch();
  
  const [dish1, setDish1] = useState({name: "", id: -1});
  const [dish2, setDish2] = useState({name: "", id: -1});
  const [dish3, setDish3] = useState({name: "", id: -1});
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  //A bit ugly, but since the array is small I went ahead 
  //and coded it this way. Shows dish 1,2 and 3 on the
  //cart.
  const updateCart = () =>{
    console.log(dishes); 
    if(dishes.length === 1){
      setDish1({name: dishes[0].title, id: dishes[0].id});
      setDish2({name: "", id: -1});
      setDish3({name: "", id: -1});
    } else if (dishes.length === 2){
      setDish1({name: dishes[0].title, id: dishes[0].id});
      setDish2({name: dishes[1].title, id: dishes[1].id});
      setDish3({name: "", id: -1});
    } else if(dishes.length === 3){
      setDish1({name: dishes[0].title, id: dishes[0].id});
      setDish2({name: dishes[1].title, id: dishes[1].id});
      setDish3({name: dishes[2].title, id: dishes[2].id});
    } else if(dishes.length === 0){
      setDish1({name: "", id: -1});
      setDish2({name: "", id: -1});
      setDish3({name: "", id: -1});
    }

    //Adds up totals for carbs, protein and calories 
    //from dishes
    let carbs = 0, protein = 0, calories = 0;
    for(let i = 0; i < dishes.length; i++){
      carbs += dishes[i].maxCarbs;
      protein += dishes[i].maxProtein;
      calories += dishes[i].maxCalories;
    }
    setTotalCarbs(Math.round((carbs + Number.EPSILON) * 100) / 100);
    setTotalProtein(Math.round((protein + Number.EPSILON) * 100) / 100);
    setTotalCalories(Math.round((calories + Number.EPSILON) * 100) / 100);
  }

  const handleDelete = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
    deleteDish(deleteCartItem(e.target.value));
  }

  useEffect(()=>{
    updateCart();
  },[dishes]);

  return (
    <div className='dishes'>
      <div className='dishes__cart'>
          <div className='dishes__cart-recipe'>
            <h4>Dish 1</h4>
            <div>
              <h5>{dish1.name}</h5>
              <button onClick={handleDelete} value={dish1.id}>-</button>
            </div>
          </div>
          <div className='dishes__cart-recipe'>
            <h4>Dish 2</h4>
            <div>
              <h5>{dish2.name}</h5>
              <button onClick={handleDelete} value={dish2.id}>-</button>
            </div>
          </div>
          <div className='dishes__cart-recipe'>
            <h4>Dish 3</h4>
            <div>
              <h5>{dish3.name}</h5>
              <button onClick={handleDelete} value={dish3.id}>-</button>
            </div>
          </div>
      </div>
      <div className='dishes__totalNut'>
        <div className='dishes__totalNut-info'>
            <h3>Total Max Carbs:</h3>
            <h2>{totalCarbs}</h2>
        </div>
        <div className='dishes__totalNut-info'>
            <h3>Total Max Protein:</h3>
            <h2>{totalProtein}</h2>
        </div>
        <div className='dishes__totalNut-info'>
            <h3>Total Max Calories:</h3>
            <h2>{totalCalories}</h2>
        </div>

      </div>
    </div>
  )
}

export default Dishes
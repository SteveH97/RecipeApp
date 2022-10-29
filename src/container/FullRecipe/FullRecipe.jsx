import React from 'react'
import { useState, useEffect } from 'react'
import './FullRecipe.css'
import axios from 'axios'

const FullRecipe = ({modul, setModul, id}) => {

  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = async() =>{
        const response = await axios
        .get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&includeNutrition=false`)
        .catch((err)=>{
            console.log("Error: ", err);
        })
        console.log(response.data);
        setRecipe(response.data);
        
    }

    useEffect(()=>{
        fetchRecipe();
    },[modul]); 

    const handleClick = () =>{
      setModul(false);
    }

  return (
    <div className={modul ? 'fr' : 'fr__off'}>
        <img src={recipe.image} alt='food pic'/>
        <div className='fr__info'>
          <div className='fr__serveTime'>
            <h3>Servings: {recipe.servings}</h3>
            <h3>Ready in {recipe.readyInMinutes} min</h3>
            <button onClick={handleClick}>Close</button>
          </div>
          <div className='fr__Ingredients'>
              {recipe.extendedIngredients?.map(item =>(
                  <h5>{item.original}</h5>
              ))}
          </div>
          <h2>Link to recipe instructions <a href={recipe.sourceUrl} target='_blank' rel='noreferrer'>HERE</a></h2>
          <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default FullRecipe
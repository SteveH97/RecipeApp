import React, { useState } from 'react'
import {useDispatch } from 'react-redux';
import { submitFilter } from '../../store/filter-slice.js';
import './Filter.css'

const Filter = () => {

  const subFilter = useDispatch();

  const [cuisine, setCuisine] = useState("american");
  const [type, setType] = useState("main course");
  const [carbs, setCarbs] = useState('50');
  const [protein, setProtein] = useState('50');
  const [calories, setCalories] = useState('50');

  const handleChange = (e) =>{
    e.preventDefault();
    switch(e.target.id){
      case 'cuisine': 
        setCuisine(e.target.value);
        break;

      case 'type': 
        setType(e.target.value);
        break;

      case 'carbs':
        setCarbs(e.target.value);
        break;

      case 'protein':
        setProtein(e.target.value);
        break;

      case 'calories':
        setCalories(e.target.value);
        break;
    }
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    subFilter(submitFilter({cuisine, type, carbs, protein, calories}));
  }

  return (
    <div className='filter' onSubmit={handleSubmit}>
      <form>
        <div>
        <label htmlFor="cuisine">Cuisine:</label>
        <select id='cuisine' name='cuisine' onChange={handleChange}>
          <option value="american">American</option>
          <option value="cajun">Cajun</option>
          <option value="caribbean">Caribbean</option>
          <option value="chinese">Chinese</option>
          <option value="european">European</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="japanese">Japanese</option>
          <option value="latin american">Latin american</option>
          <option value="mexican">Mexican</option>
          <option value="thai">Thai</option>
        </select>

        <label htmlFor="type">Type:</label>
        <select id="type" name="type" onChange={handleChange}>
          <option value="main course">Main Course</option>
          <option value="side dish">Side Dish</option>
          <option value="breakfast">Breakfast</option>
          <option value="appetizer">Appetizer</option>
        </select>

        <label htmlFor="carbs">Max Carbs:</label>
        <select id="carbs" name="carbs" onChange={handleChange}>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
          <option value="400">400</option>
        </select>

        <label htmlFor="protein">Max Protein:</label>
        <select id="protein" name="protein" onChange={handleChange}>
        <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
          <option value="400">400</option>
        </select>

        <label htmlFor="calories">Max Calories:</label>
        <select id="calories" name="calories" onChange={handleChange}>
        <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
          <option value="400">400</option>
        </select>
        </div>
        
        <input type="submit" value="Find Recipes! :D"/>
      </form>
      
    </div>
  )
}

export default Filter
import React, { useState, useEffect} from 'react'
import './Home.css';
import axios from 'axios';
import Card from '../card/Card'
import { useSelector } from 'react-redux';



const Home = () => {

    const search = useSelector(state => state.search);
    const filter = useSelector(state => state.filter);
    const [recipes, setRecipes] = useState([]);
    

    const fetchProductsFilter = async() =>{
        const response = await axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${filter.cuisine}&type=${filter.type}&maxCarbs=${filter.maxCarbs}&maxProtein=${filter.maxProtein}&maxCalories=${filter.maxCalories}&number=5`)
        .catch((err)=>{
            console.log("Error: ", err);
        })
        setRecipes(response.data.results);
    }


    const fetchProductsSearch = async()=>{
        console.log("search HERE: " + search.searchText);
        const res = await axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?query=${search.searchText}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&maxCarbs=400&maxProtein=400&maxCalories=400&number=2`)
        .catch((err)=>{
            console.log("Error: ", err)
        })
        console.log(res.data);
        setRecipes(res.data.results);
    }

    useEffect(()=>{
        fetchProductsSearch();
    },[search]);


    useEffect(()=>{
        fetchProductsFilter();
    },[filter]);



  return (
    <div className='home'>
        {recipes.map(recipe=>(
            <Card
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                cuisine={filter.cuisine}
                type={filter.type}
                maxCarbs={recipe.nutrition.nutrients[2].amount}
                maxProtein={recipe.nutrition.nutrients[1].amount}
                maxCalories={recipe.nutrition.nutrients[0].amount}
            />
        ))}
    </div>
  )
}

export default Home
import React from 'react'
import './Navbar.css'
import Filter from '../filter/Filter'
import Dishes from '../dishes/Dishes'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitSearch, clearSearch } from '../../store/search-slice'


const Navbar = () => {

  const subSearch = useDispatch();
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) =>{
    e.preventDefault();
    setInputText(e.target.value);
  }

  const submitText = () =>{
    //clear whatever query there was first
    subSearch(clearSearch());
    //give new query
    subSearch(submitSearch(inputText));
    //clear inputText
    setInputText("");
  }

  return (
    <div className='navbar'>
        <div className='navbar__search'>
          <h1>Recipe app</h1>
          <input type="text" placeholder='Pizza...' onChange={inputTextHandler} />
          <button onClick={submitText}>Search</button>
        </div>

        <Filter/>
        <Dishes/>
    </div>
  )
}

export default Navbar
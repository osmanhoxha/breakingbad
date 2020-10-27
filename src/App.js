import React, {useState,useEffect} from 'react';
import './App.css';
import Character from './Character'
import Navbar from './Navbar'
import Person from './Person'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

const URL = 'https://breakingbadapi.com/api/characters'

const SEARCH_URL = 'https://breakingbadapi.com/api/characters?name='

function App() {
  const [characters,setCharacters] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(()=>{
    fetch(URL)
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    setCharacters(data)
  })
  },[])
  
  useEffect(()=>{
    fetch(SEARCH_URL + search)
    .then(resp => resp.json())
    .then(data => {
      setCharacters(data)
    })
  },[search])

  const handleChange = (e) => {
    setSearch(e.target.value);
    
  }
return ( 
    
    <Router>
    <Route exact path='/'>

    <div className="App">
      <Navbar val={search} handleChange={handleChange} />
      {characters.map((character) => 
        <Character key={character.char_id} {...character} />  
        )}
    </div>
    </Route>
    <Route exact path='/person/:id' children={<Person />}></Route>
    </Router>
  )
}

export default App;
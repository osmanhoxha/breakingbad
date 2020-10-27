import React , { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Person.css';
import logo from './brba_logo.png'

const SEARCH_URL = 'https://breakingbadapi.com/api/characters?name='

function Person() {
    const {id} = useParams();
    const [character,setCharacter] = useState([]);
    
    useEffect(()=>{
        fetch(SEARCH_URL + id)
        .then(resp => resp.json())
        .then((data) => {
            setCharacter(data)
        })

    },[id])
    
    
    return (
        <>
            {character.map((char)=>
            <div>
                <Link to={'/'}>
                    <img className='logo' src={logo} alt='breaking bad'/>
                </Link>
                <div className='flexbox'>

                <div className='person-img'>
                    <img src={char.img} alt={char.name}/>
                </div>
                <div className='person-info'>
                    <h1>{char.name}</h1>
                    <p>Actor : {char.portrayed}</p>
                    <p>Nickname : {char.nickname}</p>
                    <p>Status : {char.status}</p>
                    <p>Series : {char.category}</p>
                    <p>
                        Occupation :
                        {char.occupation.map((prof)=> <li>{prof}</li>)}
                    </p>
                </div>
                </div>
            </div>
            )}
        </>
    )
}

export default Person

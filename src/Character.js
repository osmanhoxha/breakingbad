import React from 'react'
import './Character.css'
import { Link } from 'react-router-dom'

function Character({name,img,nickname,char_id}) {
    return (
        <Link to={`/person/${name}`} className='char-text'>

            <div className='character'>
                <img src={img} alt={name} /> 
                <div className='char-info'>
                    <h3>{name}</h3>
                    <p>{nickname}</p>
                    
                </div>    
            </div>
        </Link>
        
        
    )
}

export default Character

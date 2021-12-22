import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Chack from '../storte/chack'
import Action from '../storte/action'
export default function header() {

    // axios.get("http://127.0.0.1:8000/api/login/getcookie")
    // .then ((res)=>{
    //     console.log(res)
    // })

    return (
        <>
        
        <div className="Header">
            <div className="logo">
                Tanzil
                
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                {
                localStorage.getItem('user')?
                <>
                <li><Link to="/profile">Profile</Link>
                 
                <ul>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
                </li>
                <li><Link to="/postadd">Add Post</Link></li>
                </>
                
                
                :
                <li><Link to="/login">Login</Link></li>
                
            }
                
                
            </ul>
        </div>
            {/* <Chack/> */}
            
        </>
      
    )
}

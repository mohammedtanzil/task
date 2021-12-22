import axios from 'axios';

import React, { useState,useEffect, useDebugValue } from 'react';

export default function Profile() {

    const [name, setname] = useState();
    const [email,setemail] = useState();

   const user =localStorage.getItem('user');
   const infouser={
       email:user
   }
   axios.post("http://127.0.0.1:8000/api/user",infouser)
        .then ((res)=>{
            setname(res.data[0].name);
            setemail(res.data[0].email);
            console.log(res)
            
        })

    return (
        <div>
            <h1>Hello {name}</h1>
            <h1>{email}</h1>
        </div>
    )
}

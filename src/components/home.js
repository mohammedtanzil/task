import axios from 'axios';
import React, { useState,useEffect, useDebugValue } from 'react';

export default function Home() {
    const [post, setpost] = useState([]);
    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/data/get")
        .then ((res)=>{
            setpost(res.data)
            //console.log(res.data);
    })
       
    }, [])

    const styless ={}
    const styless2 ={
        width:'500px',
        height:'500px',
        objectFit:'cover',
        
        background: '#f6f5f5'}
    const styless3 ={
        width:'256px',
        height:'256px',
        objectFit:'cover',
        
        background: '#f6f5f5'

    }
    const styless4 ={

        width:'256px',
        height:'256px',
        objectFit:'cover',
        
        background: '#f6f5f5'

    }
    return (

        <div>
            
            <h1>Post</h1>
            <hr/>
                {post.map(items=>{
                    return (
                        <>
                        <div className="post" key={items.id}>
                        {items.id}
                        <div className='images' >                        
                        <img src={'http://127.0.0.1:8000/images/'+items.post_titile} style={items.post_dis =='1' ? styless : items.post_dis =='2' ? styless2 : items.post_dis =='3' ? styless3 : items.post_dis =='3' ? styless4 : null } />
                        </div>

                        <p>{items.post_dis =='1' ? <p>Original</p> : items.post_dis =='2' ? <p>Square of original size</p>  : items.post_dis =='3' ? <p>Small</p>  : items.post_dis =='3' ? <p>All three</p>  : null }</p>
                        </div>
                        </>
                    )
                })}
        </div>
    )
}

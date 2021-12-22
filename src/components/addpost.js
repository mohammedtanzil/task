import axios from 'axios';
import React, { useState,useEffect, useDebugValue } from 'react';
import { useHistory } from 'react-router';


export default function Addpost() {
    const history =useHistory();
    const [postTitle, setpostTitle] = useState('');
    const [postDis, setpostDis] = useState('')

const post_title =(e)=>{
    console.log(e.target.files[0].type);
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'image/png')
    {setpostTitle(e.target.files[0]);}else{ alert('not validated');}
   
}
const post_dis =(e)=>{
    if(e.target.value =='' || e.target.value =='0'){
        alert('select output');
    }else{
        setpostDis(e.target.value);
    }
}
    const fromsubmit =(e)=>{
    
        if(postTitle == '' || postDis==''){

            alert('Fill all inputs');

        }else{
document.querySelector('form').innerHTML='loading...';
                const submitData = new FormData();
                submitData.append("title", postTitle);
                submitData.append("dis", postDis);

                axios.post("http://127.0.0.1:8000/api/data/add",submitData)
                .then ((res)=>{
                    console.log(res.data);
                    if(res.data ='Done'){
                        history.replace("/");
                    }

                })
        }
        e.preventDefault();
    }

    return (
        <div>
            <h1>Hello IM add POst</h1>
            <form onSubmit={fromsubmit} method="post" encType="multipart/form-data">
                <input type="file" name="Post_title" onChange ={post_title} />
            
                <select name="Post_dis" onChange={post_dis}>
                    <option value='0'>output</option>
                    <option value='1'>Original</option>
                    <option value='2'>Square of original size</option>
                    <option value='3'>Small </option>
                    <option value='4'>All three </option>
                </select>

                
                <input type="submit" value="Upload" />
            </form>
        </div>
    )
}

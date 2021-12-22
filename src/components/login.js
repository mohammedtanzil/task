import axios from 'axios';
import React, { useState,useEffect, useDebugValue } from 'react';
import { useHistory } from 'react-router';
import {createStore} from 'redux'
import Action from'../storte/action'

export default function Login() {
 
    const [Login_email, setlogin_email] = useState([]);
    const [Login_pass, setlogin_pass] = useState();
    const [inputemail,setinputemail]=useState();
    const [inputpass,setinputpass]=useState();
    const [msg,setmsg]=useState("");
    const [borders,setborders]=useState(false);
    const history =useHistory();

const loginname =(e)=>{

    const currentname={name:e.target.value}

    if(e.target.value ==="admin@tanzil.com"){
        history.replace("/admintanziladmin094");
    }

    setinputemail(currentname);
   axios.post("http://127.0.0.1:8000/api/login",currentname)
   
   .then((res)=>{
   
       if(res.data <1){
        setlogin_email(" ");
       }else{
        setlogin_email(res.data);
       
       }
       
       
   })
   
   
}
const loginpass =(e)=>{
    setinputpass(e.target.value);
    const currentpass={
        email:inputemail,
        pass:e.target.value,
    }
    
   axios.post("http://127.0.0.1:8000/api/login/chackpass",currentpass)
   .then((res)=>{
       if(res.data ===0){
        setmsg("Entered password is wrong !");setborders(false);
       }else{
        setmsg("Entered password is currect please login !") ;setborders(true)
       }
     

       
  
   })
   
}
const login =(e)=>{
    const inputinfo= {
        email:inputemail,
        pass:inputpass
    }
    

        axios.post("http://127.0.0.1:8000/api/login/chackinfo",inputinfo)
   .then((res)=>{
      if(res.data === 1){
        axios.post("http://127.0.0.1:8000/api/login/setcookie",inputinfo)
        .then ((res)=>{
            console.log(res.data)
            localStorage.setItem("user",res.data.name);
            
            history.push("/");

             
            // const reduce=(state={},action)=>{
            //     if(action.type = "something"){
            //         return {
            //             a:"I am something"
            //         }
            //     }
            //     return state;
            // }
            // const store =createStore(reduce)

            // console.log(store.getState())
            // store.dispatch({type:'something'})
            // store.dispatch({type:'something'})
            // store.dispatch({type:'something'})
            // store.dispatch({type:'something'})

        })
       
      }else{
        setmsg("Please Enter email & pass Again");
      }
   })

    


    e.preventDefault();
 
 }
const regfromshow =(e)=>{
 
    document.querySelector(".login-froms").scrollLeft=900;

}
const showloginfrom =(e)=>{

    document.querySelector(".login-froms").scrollLeft=0;
}

const border={
border:"2px solid green"
}
const bordernone={
border:"2px solid red"
}
const [reg_name, setreg_name] = useState();
const [reg_email, setreg_email] = useState();
const [reg_pass, setreg_pass] = useState();
const [passmsg, setpassmsg] = useState();
const [emailmsg, setemaillmsg] = useState();
const [btnstatus, setbtnstatus] = useState();

const reg =(e)=>{
    const reginfo ={
        name:reg_name,
        email:reg_email,
        pass:reg_pass
    }
   
        axios.post("http://127.0.0.1:8000/api/reg",reginfo)
        .then ((res)=>{
            console.log(res.data);
            if(res.data === 1 ){
                setemaillmsg("This Mail Already Have a Account Please Login Or Try Another Mail")
            }else{
                setmsg("Please Login");
                setlogin_email(res.data);
                showloginfrom();
            }
        })

    e.preventDefault();
}
const regname =(e)=>{
    if(e.target.value.length < 25){
    setreg_name(e.target.value);
    }
   
}
const regemail =(e)=>{
    setreg_email(e.target.value);
}

const regpass =(e)=>{
    if(e.target.value.length < 8){
        setpassmsg("Enter Password Getterthen 8 caretors");
        setbtnstatus(true);
        
        }else {
            setbtnstatus(false);
            setpassmsg("");
            setreg_pass(e.target.value);
        }
}



    return (
        
        <div className="login-froms">


            <div className="Login_from">
                <h1>Hello {Login_email}</h1>
                <h1>{msg}</h1>
                <form onSubmit={login}>
                <input onChange={loginname}  type="email" name="email" placeholder="Enter Your Email"/>
                <input style={borders?border:bordernone} onChange={loginpass}  type="password" name="pass" placeholder="Enter Your Password"/>

                <button type="submit">Login</button>
                <button onClick={regfromshow}>Need A Account ! </button>
                </form>
            </div>
            
            <div className="Reg_from">
                <h1>Hello {reg_name}</h1>
                <form onSubmit={reg}>
                <input onChange={regname} type="text" name="name" placeholder="Enter Your Full Name"/>
                <input onChange={regemail}  type="email" name="email" placeholder="Enter Your Email"/>
                <p>{emailmsg}</p>
                <input onChange={regpass}  type="password" name="pass" placeholder="Enter Your Password"/>
                <p>{passmsg}</p>
                <button disabled={btnstatus?true:false} type="submit">Submit</button>
                {btnstatus}
                <button onClick={showloginfrom} >Allready Member ! </button>
                </form>
            </div>
        </div>
    )
}

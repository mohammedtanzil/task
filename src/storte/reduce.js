import React from 'react'
const init ={
    a:0
}
export default function reduce(state=init,action) {
    
    switch(action.type){
        case 'Add':{
            return{
                a:state.a +1
            }
        }
    }
    return init
}

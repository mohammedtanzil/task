import React from 'react'
import { connect } from 'react-redux'

function action(props) {
    return (
        <div>
           { props.add()}
        </div>
    )
}

function myadd(dispatch){
    return {
        add:()=>{
            dispatch({type:'Add'})
        }
    }
}
export default connect(null,myadd)(action);
import React from 'react'
import { connect } from 'react-redux'

function chack(props) {
    return (
        <div>
           <h1>Hello im chacked {props.count}</h1>
        </div>
    )
}
function mymap(state){
    return{
        count:state.a
    }
}
export default connect(mymap)(chack);
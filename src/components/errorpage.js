import React from 'react'
import {Link}from 'react-router-dom'

export default function errorpage() {
    return (
        <div>
            <h1>PAGE NOT FOUND PLEASE BACK TO HOME</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

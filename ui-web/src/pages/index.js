import React from 'react'
import connecter from '../state/connector'


const Index = (props) => {
    console.log(props)
    return <h1>Hello world, from index page</h1>
}

export default connecter(Index)


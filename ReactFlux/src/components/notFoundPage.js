//Stateless Component
import React from 'react';
import Router,{Link} from 'react-router'
const notFoundPage = (props) => {
    return (
     <div className ="jumbotron">
         <h1> page not found</h1>
         <Link to="app">Back to Home</Link>
      </div>
       )
}

export default  notFoundPage;
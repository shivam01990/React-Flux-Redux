import React from 'react';
import {Component} from 'react';
import SecondComponent from './secondcomponent.js'

export default class FirstComponent
    extends Component{
        
        constructor(props){
            super(props);
        }
        
        render()
        {
            return( 
            <div>
                <div>
                My First React component
                <SecondComponent/>
                </div>
                </div>
            )
        }
        
        /*
        getInitialState()
        {
            console.log("Initial State");
            return {};
        }*/
        
        componentWillUpdate(){
            
            console.log("Component will mount.");
        }
        
        componentDidMount()
        {
              console.log("Component did mount.");
        }
        
        shouldComponentUpdate(){           
             console.log("Should Component update.");
        }
        
        componentWillUpdate(){            
             console.log("Component will update.");
        }
        
         componentWillReceiveProps(){
             
             console.log("Component will Receive Props.");
        }
    }

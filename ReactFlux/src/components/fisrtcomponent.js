import React, {Component} from 'react';

import SecondComponent from './secondComponent';

export default class FirstComponent extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        debugger;
        return (<div><div>My First React Component </div><SecondComponent/></div > )
    };
                
//                getInitialState(){
//            console.log("intial state")
//            return{};
//        }
                
        ComponentWillMount(){
            debugger;
            console.log("Component Will Mount")
        }
        ComponentDidMount(){
            debugger;
            console.log("Component Did Mount")
        }
          ShouldComponentUpdate(){
            console.log("Should Component Update")
        }
         ComponentWillReceiveProps(){
            console.log("Component Will Receive Props")
        } 
};
    
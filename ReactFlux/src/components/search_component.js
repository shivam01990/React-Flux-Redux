import React from 'react';
import {Component} from 'react';
/*
const SearchComponent=()=>{
    return <input/>;
}

export default SearchComponent;*/


export default class SearchComponent
    extends React.Component{
        
        constructor(props){
            super(props);
            this.state = {term:''};
        }
        
      
        
        render()
        {
//            return( 
//            <input onChange={this.onInputChange} />
//                
//            )
            
            
            return( 
                <div>
                 <div className="col-sm-3">
                    <label className="form-label" htmlFor="search">YouTube Search:</label>
                 </div>
                <div className="col-sm-9">
                    <input  placeholder="Search" className="form-control" id="search" ref="search"/>
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-primary" onClick={(event)=>this.props.onSearchTermChange(this.refs.search.value)}>Search</button>
                    </span> 
                </div>               
                 
              </div>  
            )
        }
        
         onInputChange(term){            
            //console.log(event); 
             this.setState({term:term})
            this.props.onSearchTermChange(term);
        }
        
    }
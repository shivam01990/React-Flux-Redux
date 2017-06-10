import React from 'react';
import {Component} from 'react';
import youtube from 'youtube-api-search';
import SearchComponent from './search_component';
import SearchResults from './search_results';
//import SearchHistory from './search_history';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import searchActions from '../actions/index';

 class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo:null
        }
    }

    searchYoutube(searchText){
      this.props.searchActions(searchText);
        
    };
    
    componentDidMount()
    {
       this.searchYoutube('amirkhan')
    }
    
    onVideoSelect(selectedVideo){
        this.setState({selectedVideo});
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({selectedVideo:nextProps.selectedVideo})
    }
    
    render(){
        return (
            <div className="col-sm-12">
                <div className="col-sm-7">                
                    <SearchComponent onSearchTermChange={this.searchYoutube.bind(this)}/>
                    <SearchResults results={this.props.results} onVideoSelect={(selectedVideo)=>this.onVideoSelect(selectedVideo)}/>
                </div>
           </div>
        );      
       
    }
}
//Map the state as props to flux
const mapStateToProps=(state)=>{
    return {
        results:state.results,
        selectedVideo:state.results[0]
    }
}

//Bind the action from Reactview

 const mapDispatchToprops=(dispatcher)=>{
   return bindActionCreators({searchActions}, dispatcher);
}


//connect React With Flux
export default connect(mapStateToProps,mapDispatchToprops)(SearchApp);

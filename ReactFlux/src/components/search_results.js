//Stateless Component
import React from 'react';
import SearchResultItem from './search_result_item';

const SearchResults = (props)=>{    
    
            
    return (
        <ul className="col-md-4 list-group">
        {
          props.results.map((result) => {
            return(<SearchResultItem item={result} key={result.etag}/>)
                   
            })
         }
        </ul>
    );
};

export default SearchResults;
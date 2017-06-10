import React from 'react';


const SearchHistory=(props)=>
{
 
        const resultItems=props.historyitems.map((result)=>{
        return (
            <li className="list-group-item">{result}</li>
        )} );
    
       return ( <ul className="col-sm-12 list-group">
                <li className="list-group-item active">Search History</li>
           {resultItems}
           </ul>
 )
}
export default SearchHistory;

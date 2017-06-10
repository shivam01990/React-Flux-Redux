import React from 'react';
import {Component} from 'react';

const SearchResultItem=({item:item})=>
{
    
return(
    <div className="video-list media">
        <div className="media-left">
         <img className="media-object" src={item.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">
           <div className="media-heading">
                {item.snippet.title}    
           </div>
        </div>
     </div>
)
}

export default SearchResultItem;
//Make rest calls or ajax calls
//Axios users Promise api
import axios from 'axios';

const URL = "https://www.googleapis.com/youtube/v3/search"
const API_KEY = 'AIzaSyCpzd-Fb8gSgdnduWtxTs2fezZNvYiBESU';

const searchYoutube=(searchText)=>{
    
    const params={
        part:'snippet',
        key:API_KEY,
        q:searchText,
        type:'video'
    }
    
    //request is an object of type promise
    const request = axios.get(URL,{params});
    return{
        type:'result',
        payload:request
    }
}

export default searchYoutube;
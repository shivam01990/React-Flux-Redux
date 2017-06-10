import {combineReducers} from 'redux';

const results=(state=[],action)=>{
    
    if(action.type === 'result'){
        //resolve the promise and extract the data
        return action.payload.data.items
    }
    return state;
}

const stores=combineReducers({results:results});

export default stores;
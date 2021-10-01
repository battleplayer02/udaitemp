import * as authActions  from '../actions/actions';
import initialState from './initialState.json';

const authReducer = (state=initialState.auth,action)=>{
    switch(action.type){
        case authActions.SIGN_UP_REQUEST : 
            return{...state,loading:true}
        case authActions.SIGN_UP_SUCCESSS : 
            return{...state,loading:false}
        case authActions.SIGN_UP_FAILED : 
            return {...state,loading:false,error:action.payload}
        case authActions.SIGN_IN_REQUEST :
            return {...state,loading:true}
        case authActions.SIGN_IN_SUCCESSS : 
            return {...state,loading:false}
        case authActions.SIGN_IN_FAILED :
            return {...state,loading:false,error:action.payload}
        case authActions.REMOVE_ERROR :
            return {...state,error:''}
        default : return state
    }
}

export default authReducer


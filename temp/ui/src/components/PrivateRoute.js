import React from 'react'
import { connect } from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import {isEmpty,isLoaded} from 'react-redux-firebase';

function PrivateRoute({auth,component:Component,...restProps}) {
    return (
        <Route
            {...restProps} render={(props)=>(
                isLoaded(auth) && !isEmpty(auth)?
                <Component {...props}/>:
                <Redirect to="/"/>
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)

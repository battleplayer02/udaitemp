import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDwhtM6Kx3nysylMa-WOzVfDBSOcvUlmzE",
  authDomain: "resume-yt-final.firebaseapp.com",
  projectId: "resume-yt-final",
  storageBucket: "resume-yt-final.appspot.com",
  messagingSenderId: "818740667275",
  appId: "1:818740667275:web:86a97e97451cd9346fc58e"
}; 
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));

ReactDOM.render(
    <BrowserRouter>
    <Provider store={reduxStore}>/
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App/>
    </ReactReduxFirebaseProvider>
    </Provider>
    </BrowserRouter>
,
  document.getElementById('root')
);
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import RootReducer from "../reducer";
import thunk from 'redux-thunk';

const store = createStore(RootReducer, {}, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

  export default store;
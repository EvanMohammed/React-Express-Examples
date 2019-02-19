import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers";

export default function configureStore(preloadedState) {
  return createStore(
    appReducer,
    preloadedState,
    compose(applyMiddleware(thunkMiddleware))
  );
}

import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  
  //import modules
  import units from "./modules/units"
  import hero from "./modules/hero"
  import shop from "./modules/shop"
  
  const middlewares = [thunk];
  const enhancer = applyMiddleware(...middlewares);
  const rootReducer = combineReducers({ units, hero, shop });
  
  const store = createStore(rootReducer, enhancer);
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  
  export default store;
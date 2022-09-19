import {
    legacy_createStore as createStore, 
    compose,
  applyMiddleware,   
  } from "redux";

  import thunk from "redux-thunk";

  import reducers from "./reducer.js";

  export const store = createStore(
    reducers,
    compose(applyMiddleware(thunk))
  );

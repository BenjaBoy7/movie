
// import { createStore, applyMiddleware } from 'redux'
// import {moviesReducer} from './moviesReducer'
// import thunk from 'redux-thunk'

// export const store = createStore(moviesReducer, applyMiddleware(thunk))
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import thunk from "redux-thunk";
import {moviesReducer} from './moviesReducer';
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk, logger];
const persistConfig = {
  key: 'root',
  storage: storageSession,
}
const persistedReducer = persistReducer(persistConfig, moviesReducer)
let store;
// if(process.env.NODE_ENV === "development"){
// }
// else {
//    store = createStore( persistedReducer, compose(applyMiddleware(...middleware)))
// }
store = createStore( persistedReducer, compose(composeWithDevTools(applyMiddleware(...middleware))))

const persistor = persistStore(store)
export { store, persistor };
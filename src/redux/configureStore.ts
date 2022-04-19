import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootsaga";
import carReducer from "./carReducer/carReducer";

const reducer = combineReducers({
  carsState: carReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type reducerType = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = [sagaMiddleware];
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const store = createStore(reducer, enhancers);

sagaMiddleware.run(watcherSaga);
export default reducer;

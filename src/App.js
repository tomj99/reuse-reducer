import React from "react";
import "./App.css";
import history from "./history";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import { Urls } from "./urls";
import HomePage from "./HomePage";
import CounterPage from "./CounterPage";
import Counter from "./Counter";

const initialState = {
  count: 0,
};

function createCounterWithNamedType(counterName = "") {
  return function counterReducer(state = initialState, action) {
    switch (action.type) {
      case `INCREMENT_${counterName}`:
        // console.log("count: ", state.count + 1);
        return {
          count: state.count + 1,
        };
      case `DECREMENT_${counterName}`:
        // console.log("count: ", state.count - 1);
        return {
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
}

const rootReducer = combineReducers({
  counter1: createCounterWithNamedType("Counter1"),
  counter2: createCounterWithNamedType("Counter2"),
  counter3: createCounterWithNamedType("Counter3"),
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {console.log("route")}
          <Route exact path={Urls.Home} component={HomePage} />
          <Route exact path={Urls.CounterPage} component={CounterPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

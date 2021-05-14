import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const initialState = {
  count: 0,
};

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// }

function createCounterWithNamedType(counterName = "") {
  return function counterReducer(state = initialState, action) {
    switch (action.type) {
      case `INCREMENT_${counterName}`:
        console.log("increment: ", counterName);
        console.log("count: ", state.count + 1);
        return {
          count: state.count + 1,
        };
      case `DECREMENT_${counterName}`:
        console.log("decrement: ", counterName);
        console.log("count: ", state.count - 1);
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

const App = () => (
  <Provider store={store}>
    <Counter title="Counter1" />
    <Counter title="Counter2" />
    <Counter title="Counter3" />
  </Provider>
);

render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const initialState = {
//   count: 0,
// };

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

// function createCounterWithNamedType(counterName = "") {
//   return function counterReducer(state = initialState, action) {
//     switch (action.type) {
//       case `INCREMENT_${counterName}`:
//         console.log("increment: ", counterName);
//         console.log("count: ", state.count + 1);
//         return {
//           count: state.count + 1,
//         };
//       case `DECREMENT_${counterName}`:
//         console.log("decrement: ", counterName);
//         console.log("count: ", state.count - 1);
//         return {
//           count: state.count - 1,
//         };
//       default:
//         return state;
//     }
//   };
// }

// const rootReducer = combineReducers({
//   counter1: createCounterWithNamedType("Counter1"),
//   counter2: createCounterWithNamedType("Counter2"),
//   counter3: createCounterWithNamedType("Counter3"),
// });

// const store = createStore(rootReducer);

// const App = () => (
//   <Provider store={store}>
//     <Router history={history}>
//       <Switch>
//         <Route exact path={Urls.Home} component={CounterPage} />
//       </Switch>
//     </Router>
//   </Provider>
// );

// render(<App />, document.getElementById("root"));

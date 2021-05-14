import React from 'react';
import { connect } from 'react-redux';
const Counter = (props) => {  
    
    const incrementString = 'INCREMENT_' + String(props.title)
    const decrementString = 'DECREMENT_' + String(props.title)
    
    const increment = () => {
        // console.log('inc: ', incrementString)
        props.dispatch({ type: incrementString });
    }
    
    const decrement = () => {
        // console.log('dec: ', decrementString)
        props.dispatch({ type: decrementString});
    }

    return (
      <div>
        <h2>{props.title}</h2>
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    )
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }
  
  // Then replace this:
  // export default Counter;
  
  // With this:
  export default connect(mapStateToProps)(Counter);
  
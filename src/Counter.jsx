import React, { useState } from 'react'
import { connect } from 'react-redux';
import history from './history'
import { Urls } from "./urls";

const Counter = (props) => {  
  
    const countMe = JSON.stringify(props.count1)
    console.log('Count1: ',countMe)
    // console.log('Count1: ', props.count1)
    console.log('Count2: ', props.count2)
    console.log('Count3: ', props.count3)
    const incrementString = 'INCREMENT_' + String(props.title)
    const decrementString = 'DECREMENT_' + String(props.title)
    
    const increment = () => {
        //console.log('inc: ', incrementString)
        props.dispatch({ type: incrementString });
    }
    
    const decrement = () => {
        //console.log('dec: ', decrementString)
        props.dispatch({ type: decrementString});
    }

    function backButtonClick() {  
      //console.log('backbutton')
      history.push({
        pathname: `${Urls.Home}`,
      })
      
    }

    return (
      <div>
        <h2>{props.title}</h2>
        <div>
          <button onClick={decrement}>-</button>
          <span>{countMe}</span>
          <button onClick={increment}>+</button>
        </div>
        <br/>
        <button onClick={backButtonClick} >Back</button>
      </div>
    )
}

function mapStateToProps(state) {
    return {
      count1: state.counter1,
      count2: state.counter2,
      count3: state.counter3
    };
  }
  
  // Then replace this:
  // export default Counter;
  
  // With this:
  export default connect(mapStateToProps)(Counter);
  
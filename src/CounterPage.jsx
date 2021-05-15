import React, { useState } from 'react'
import Counter from './Counter'


const CounterPage = (props) => {
  const name = props.match.params.counterName
  return (
    <div>
      <Counter title={name}></Counter>
    </div>
  )
}

export default CounterPage


import React from 'react'
import history from './history'
import { Urls } from "./urls";

const HomePage = (props) => {

var counterName = ''

function buttonClick1() {  
  console.log('button1')
  counterName = 'Counter1'
  history.push({
    pathname: `${Urls.Home}/${counterName}`,
  })
  
}
    
function buttonClick2() {
  console.log('button2')
  counterName = 'Counter2'
  history.push({ 
    pathname: `${Urls.Home}/${counterName}`,
  })
}
    
function buttonClick3() {
  console.log('button3')
  counterName = 'Counter3'
  history.push({ 
    pathname: `${Urls.Home}/${counterName}`,
  })
}

  return (
    <div>
      <div><button id='button1' onClick={buttonClick1}>Counter1Page</button></div>
      <div><button id='button2' onClick={buttonClick2}>Counter2Page</button></div>
      <div><button id='button3' onClick={buttonClick3}>Counter3Page</button></div>  
    </div>
  )

  // return (
  //   <div>
  //     <div><button><Link to={{ pathname: `${Urls.Home}/counter1` }}>Counter1Page</Link></button></div>
  //     <div><button><Link to={{ pathname: `${Urls.Home}/counter2` }}>Counter2Page</Link></button></div>
  //     <div><button><Link to={{ pathname: `${Urls.Home}/counter3` }}>Counter3Page</Link></button></div>  
  //   </div>
  // )
}

export default HomePage

import React from 'react'
import Card from './component/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Manowar' age={21}/>
      <Card user='Hamza' age={22}/>
      
      
    </div>
  )
}

export default App
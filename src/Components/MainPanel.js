import React from 'react'
import MyButton  from './MyButton'
import DivPanel  from './DivPanel'

const MainPanel = () => {
  return (
    <div className='article'>
      <h1 className='header'>This is main panel</h1>
      <MyButton/>
      <DivPanel/>
    </div>
  )
}
export default MainPanel
import React from 'react'
import {useDispatch} from 'react-redux'
import increment from '../action/increment'
import descrement from '../action/descrement'

const MyButton = () => {
  let dispatch = useDispatch();
  return (
    <div>
      <button className='button' onClick={() => dispatch(increment(1))}>Increase Counter</button>
      <button className='button' onClick={() => dispatch(descrement(-1))}>Descrement Counter</button>
    </div>
    )
}
export default MyButton

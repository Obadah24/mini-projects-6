import React from 'react'
import {useDispatch} from 'react-redux'
import increment from '../action/increment'

const MyButton = () => {
  let dispatch = useDispatch();
  return (
    <button className='button' onClick={() => dispatch(increment(1))}>Increase Counter</button>
  )
}
export default MyButton

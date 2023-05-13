import React from 'react'
import {useSelector} from 'react-redux'

const DivPanel = () => {
    let counterval = useSelector(state => state.counter)
    return (
      <div className='span'>
        The present value of counter is<span className='span-color'> {counterval}</span>
      </div>
    )
}

export default DivPanel
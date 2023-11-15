import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'
import {useSelector} from'react-redux'

function Counter() {
  //state to hold value from input box
const [range,setRange]=useState("")
  // hook to access the redux dispatch function.
  const dispatch= useDispatch()
  //component can acces  the state by using useselector hook
  const count =useSelector ((state)=>state.counter.value)

  //range
  console.log(range);
  return (
    <><div className='d-flex justify-content-center align-items-center w-100 flex-column '>
          <h1 style={{fontSize:"90px"}}  className=' text-dark' >{count}</h1>
          <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)) )} className='btn btn-warning p-3'>Decrement</button>
              {/* Number method is used to convert string input to number  */}
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
          </div>
          {/* input box */}
          <input onChange={(e)=>setRange(e.target.value)} type="text" className=' border-secondary form-control w-50 mt-3' placeholder='enter the range'/>
          </div></>
  )
}

export default Counter
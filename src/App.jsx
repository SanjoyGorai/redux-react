import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'


const App = () => {


  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  function handleClick(e) {
    switch (e.target.id) {
      case 'increment':
        console.log(e.target.id);
        dispatch(increment());
        break;
      case 'decrement':
        dispatch(decrement())
        console.log(e.target.id);
        break;
    }
  }

  return (
    <div className='gap-3'>
      <h1>Redux React App</h1>
      <h2 className='font-bold m-3 text-xl'> Value : {value} </h2>
      <button className='bg-green-500 m-2' id='increment' onClick={handleClick}>Increment</button>
      <button className='bg-red-700' id='decrement' onClick={handleClick}>Decrement</button>
    </div>
  )
}

export default App
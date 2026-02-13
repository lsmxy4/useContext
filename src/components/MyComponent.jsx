import React ,{useContext}from 'react'
import { MyContext } from '../context/Mycontext'

const MyComponent = () => {
    const {value,setValue} = useContext(MyContext)
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={() => setValue('UPDATE!')}>
            Update Value
        </button>
    </div>
  )
}

export default MyComponent
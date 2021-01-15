import {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {incrementData, decrementData, prevCountData} from '../redux/actions/action';


const Change = () => {

const [count, setCount] = useState(0)

const curnetCount = useRef()

useEffect(()=> {
    curnetCount.current = count 
})

const prevCount = curnetCount.current
console.log(prevCount)

const dispatch = useDispatch()
const ValuesInRedux = useSelector(state => state.count)
const prevValueInRedux = useSelector(state => state.prev)


const incrementCount = () => {
    setCount(prev=> prev+1)
   dispatch(incrementData(count+1))
}

const decrementCount = () => {
    setCount(prev=> prev-1)
    dispatch(decrementData(count-1))
}


    dispatch(prevCountData(prevCount))


return (
   <div>
     <p>count is: {ValuesInRedux}</p>
     <p>Prevcount is: {prevValueInRedux}</p>
     <button onClick={incrementCount}>Add</button>
     <button onClick={decrementCount}>Remove</button>
    </div>
)
   
}


export default Change;
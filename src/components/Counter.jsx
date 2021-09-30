import { useState } from 'react';
import '../styles/counter.scss';

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }
    function decrement() {
        setCounter(counter - 1);
    }
    return (
        <div className="counter" >
            <h2>{counter}</h2>
            <button type="button" onClick={increment} > 
                Increment 
            </button>
            <button type="button" onClick={decrement} > 
                Decrement
            </button>
        </div>
    )
}
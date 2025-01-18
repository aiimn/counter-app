import './App.css'
import { useState } from 'react';

function App() {

    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function decrementCounter() {
        setCounter(counter - 1);
    }

    const setCustomCounter = (event) => {
        setCounter(event.target.value);
    }

    return (
        <>
            <div className='counter-container'>
                <button onClick={incrementCounter}>Increment</button>
                <h1>{counter}</h1>
                <button onClick={decrementCounter}>Decrement</button>
            </div>

            <br/>
            <input type="text" value={counter} onChange={setCustomCounter} />

        </>
      )

}

export default App;
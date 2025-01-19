import './App.css'
import { useState } from 'react';
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";

function App() {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <p>{counter}</p>
            <DecrementButton setCounter={setCounter} />
            <IncrementButton setCounter={setCounter} />

        </>
      )

}

export default App;


const IncrementButton = ({ setCounter }) => {

    function incrementCounter() {
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <>
            <button onClick={incrementCounter}>Increment</button>
        </>
    );
}

export default IncrementButton;
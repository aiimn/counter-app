

const DecrementButton = ({ setCounter }) => {

    function decrementCounter() {
        setCounter(prevCounter => prevCounter - 1);
    }

    return (
        <>
            <button onClick={decrementCounter}>Decrement</button>
        </>
    );

};

export default DecrementButton;
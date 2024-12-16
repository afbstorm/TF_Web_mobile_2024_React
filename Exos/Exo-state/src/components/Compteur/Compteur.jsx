import {useState} from "react";

const Compteur = ({incr = 1}) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + incr)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment by {incr}</button>
            {
                count > 0 ? (
                    <button onClick={handleReset}>Reset</button>
                ) : null
            }

            {/*<Button handleClick={handleIncrement} text={incr} />*/}
            {/*{*/}
            {/*    count > 0 ? (*/}
            {/*        <Button handleClick={handleReset} text={'Reset'} />*/}
            {/*    ) : null*/}
            {/*}*/}
        </div>
    );
};

export default Compteur;

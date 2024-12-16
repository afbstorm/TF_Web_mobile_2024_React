import {useState} from "react";

const Calculatrice = () => {
    const operations = ['+','-','*','/'];

    const [calculation, setCalculation] = useState({
        num1: 0,
        num2: 0,
        ope: '',
        result: 0
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        let parsedVal;

        if (name !== 'ope') {
            parsedVal = parseInt(value)
        }

        setCalculation((prevState) => ({...prevState, [name]: parsedVal ?? value}))
    }

    const handleCalculation = (e) => {
        e.preventDefault();
        let result = 0;

        console.log(typeof result)
        switch (calculation.ope) {
            case '+':
                 result = calculation.num1 + calculation.num2;
                 break;
            case '-':
                 result = calculation.num1 - calculation.num2;
                 break;
            case '*':
                 result = calculation.num1 * calculation.num2;
                 break;
            case '/':
                if (calculation.num2 === 0) {
                    result = 0;
                    throw new Error('Division par zéro interdite')
                }
                 result = calculation.num1 / calculation.num2;
                break;
            default:
                console.log('Erreur')
        }
        setCalculation((prevState) => ({...prevState, result}));
    }

    return (
        <>
            <input type='number' value={calculation.num1} name='num1' onChange={handleChange}/>
            <select name="ope" value={calculation.ope} onChange={handleChange}>
                <option value="" disabled>Sélectionner une opération</option>
                {
                    operations.map((operation, index) => (
                        <option key={index} value={operation}>{operation}</option>
                    ))
                }
            </select>
            <input type="number" value={calculation.num2} name='num2' onChange={handleChange}/>
            <button onClick={handleCalculation}>Calculer !</button>
            <input type="number" readOnly  value={calculation.result} name='result'/>
        </>
    );
};

export default Calculatrice;

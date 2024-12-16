import './App.css'
import {useState} from "react";

function App() {

    const [firstname, setFirstname] = useState('');
    const [formValues, setFormValues] = useState({
        job: '',
        email: ''
    })

    const handleChange = (e) => {
        setFirstname(e.target.value)
    }

    const handleMultiValues = (e) => {
        const { value, name } = e.target;

        /**
         * @param (prevState) state actuel de formValues
         * ({...}, []: ) -> On crée un nouvel object en effectuant un spread sur prevState
         * On indique ensuite la clé sur laquelle on veut travailler entre [] suivi de l'affection de la valeur
         */
        setFormValues((prevState) => ({...
            prevState, [name]: value
        }))
    }

  return (
    <>
        <input type="text" onChange={handleChange} value={firstname} name={firstname} />
        <p>{firstname}</p>

        -------

        <input type="text" onChange={handleMultiValues} value={formValues.job} name='job' />
        <input type="text" onChange={handleMultiValues} value={formValues.email} name='email' />
        <h2>{formValues.job} {formValues.email}</h2>
    </>
  )
}

export default App

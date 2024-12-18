import './App.css'
import DateDuJour from "./components/DateDuJour/DateDuJour.jsx";
import Horloge from "./components/Horloge/Horloge.jsx";
import {useState} from "react";

function App() {

    const [isDate, setIsDate] = useState(false);

  return (
    <>
        {isDate ? <DateDuJour /> : <Horloge />}
        <button onClick={() => setIsDate(prevState => !prevState)}>
            Change d'affichage
        </button>
    </>
  )
}

export default App

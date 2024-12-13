import './App.css'
import {useState} from "react";

function App() {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        console.log('Hello')
    }

    const handleShowText = () => {
        setIsVisible((prevState) => !prevState);
    }

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event)
    }

  return (
      <>
          <input type="text" name='toto' onChange={handleChange}/>

          <button onClick={() => handleClick()}>
              Check the console !
          </button>

          <button onClick={handleShowText}>
              Display the thingy
          </button>
          {isVisible ? (
              <p>Je suis vivant</p>
          ) : null}
      </>
  )
}

export default App

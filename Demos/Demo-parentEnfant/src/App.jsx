import './App.css'
import Child from "./components/Child/Child.jsx";
import {useState} from "react";

function App() {

    const [bgColor, setBgColor] = useState('blue')

  return (
    <div style={{backgroundColor: bgColor}}>
        <Child text='Coucou hibou.' modifyBgColor={setBgColor} />
    </div>
  )
}

export default App;


import './App.css'
import List from "./components/List/List.jsx";

function App() {

    const cars = [
        {id: 1, brand: 'VW', model: 'Golf'},
        {id: 2, brand: 'Skoda', model: 'Octavia'},
        {id: 3, brand: 'Hyundai', model: 'i30'},
        {id: 4, brand: 'Peugeot', model: '308'},
        {id: 5, brand: 'Audi', model: 'A3'},
    ]

  return (
    <>
        <List liste={cars} />
    </>
  )
}

export default App

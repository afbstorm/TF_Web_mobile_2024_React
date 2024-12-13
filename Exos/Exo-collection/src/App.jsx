import './App.css'
import List from "./components/List/List.jsx";

function App() {
    const products = [
        {id: 1, name: 'Paysan', price: 5.50, description: 'Le gourmet paysan, le pain de viande qui réchauffe le coeur', isPromo: false},
        {id: 2, name: 'Fromage raclette', price: 4.50, description: 'Le fromage qui fond', isPromo: true},
        {id: 3, name: 'Mousseur électrique', price: 18.90, description: 'Ca fait de la super mousse.. Blanche.. Humhum', isPromo: false},
        {id: 4, name: 'Chipito', price: 1.50, description: 'Chips au fromage', isPromo: true},
        {id: 5, name: 'Café en grain', price: 20.99, description: '5kg de pure amertume', isPromo: false},
    ]

  return (
    <List products={products} />
  )
}

export default App

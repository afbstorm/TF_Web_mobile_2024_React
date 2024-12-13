import './App.css'
import Welcome from "./components/Welcome/Welcome.jsx";

function App() {

  const pseudonyme = "Nane"

  return (
    <>
      {/* pseudo = props -- pseudonyme = valeur injectée */}
      <Welcome pseudo={pseudonyme} />
    </>
  )
}

export default App

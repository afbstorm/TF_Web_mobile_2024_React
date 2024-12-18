import { useState, useEffect } from "react";
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [isEven, setIsEven] = useState(true);

    useEffect(() => {
        console.log('useEffect (tableau de dépendance vide) : il s\'exécute UNE SEULE FOIS au début du cycle de vie du composant')
    }, []);

    useEffect(() => {
        console.log('useEffect 2 (sans tableau de dépendance) : il s\'exécute au moindre changement dns le composant')
    });

    useEffect(() => {
        console.log('useEffect 3 (tableau de dépendant peuplé) : il s\'exécute à chaque fois que la valeur de ou des élément(s) du tableau de dépendance change(nt)')
        setIsEven(count % 2 === 0);
    }, [count]);

    useEffect(() => {
        console.log('useEffect 4 (avec nettoyage) : il va activer un " abonnement " ensuite, va le nettoyer (le supprimer)');
        const timer = setTimeout(() => {
            console.log('Abonnement crée avec succès ✅');
        }, 2000)

        return (() => {
            console.log('Désabonné ☠️');
            clearTimeout(timer)
        })
    }, [name]);

  return (
    <div>
        <p>
            Compteur : {count} est {isEven ? 'pair' : 'impair'}
        </p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
            Incrémenter
        </button>

        <br/>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <p>Nom : {name}</p>
    </div>
  )
}

export default App

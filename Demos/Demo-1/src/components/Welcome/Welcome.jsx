// Première façon d'importer des props, simplement écrire props dans les param du composant
// Dans ce cas-ci, on récupère l'objet comprenant nos props => props.key
// const Welcome = (props) => {
//    // On peut éventuellement, destructurer avant l'injection dans le JSX
//    const { pseudo } = props; --> <h1>Salut hello coucou, comment vas-tu {pseudo} ?</h1>
//     return (
//         <h1>Salut hello coucou, comment vas-tu {props.pseudo} ?</h1>
//     )
// }


import './Welcome.css';
import style from './Welcome.module.css';
import {useEffect} from "react";
// Deuxième façon d'importer des props, on destructure directement dans les params du composant
// Ce qui permet d'éviter de manipuler l'objet props dans le composant
// On peut également, de cette façon, facilement donner une valeur par défaut à un props
const Welcome = ({pseudo = 'Norbert'}) => {

    return (
        <>
            <h1 className='title'>Salut hello coucou, comment vas-tu {pseudo} ?</h1>
            <h4 className={style.subtitle}>C'est le changement de couleur</h4>
        </>
    )
}

export default Welcome;


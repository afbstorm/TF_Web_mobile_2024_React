import style from './Welcome.module.css';

const Welcome = ({name, age = 18}) => {
    return (
        <>
            <p className={style.title}>Bienvenue {name} sur l'application React !</p>
            <p className={style.subtitle}>Vous avez {age} ans.</p>
        </>
    );
};

export default Welcome;

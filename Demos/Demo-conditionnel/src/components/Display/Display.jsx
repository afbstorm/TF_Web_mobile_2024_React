const Display = ({error = false, message}) => {
    // if
    if (error) {
        return (
            <p>L'application a rencontrée une erreur...</p>
        )
    }

    return (
        <>
            <p>{message ? message : 'Aucun message reçu'}</p>
        </>
    );
};

export default Display;

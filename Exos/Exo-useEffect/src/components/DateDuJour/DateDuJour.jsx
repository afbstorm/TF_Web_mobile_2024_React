const DateDuJour = () => {

    const day = new Date();
    // toLocaleDateString prend de 0 à 2 paramètres
    // Le premier est la locale (la localisation linguistique) --> 'fr-BE'
    // Le deuxième est un object d'options de formattage
    const formattedDate = day.toLocaleDateString('fr-BE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    })

    // Version demandée par le slide d'exercice ⚠️
    // const formattedDate = day.toLocaleDateString('fr-BE', {
    //     day: 'numeric',
    //     month: 'long',
    //     year: 'numeric'
    // })

    return (
        <>
            <p>{formattedDate}</p>
        </>
    );
};

export default DateDuJour;

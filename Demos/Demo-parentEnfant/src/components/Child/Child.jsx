const Child = ({text = 'Hello World !', modifyBgColor = () => {}}) => {

    const handleClick = (e) => {
        e.preventDefault();
        modifyBgColor('chartreuse');
    };

    return (
        <>
            <h2>
                {text}
            </h2>

            <button onClick={handleClick}>
                Pour changer le background, cliques ici !
            </button>
        </>
    );
};

export default Child;

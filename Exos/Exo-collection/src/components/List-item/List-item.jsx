const ListItem = ({name, description, isPromo, price}) => {
    const formattedPrice = price.toLocaleString("fr-BE", {
        style: 'currency',
        currency: 'EUR'
    })

    return (
        <li>
            <h3>{name}</h3>
            <p>{description}</p>
            <p style={isPromo ? {color: 'red'} : null}>{formattedPrice}</p>
        </li>
    );
};

export default ListItem;

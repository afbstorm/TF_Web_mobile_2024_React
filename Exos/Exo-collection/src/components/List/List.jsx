import ListItem from "../List-item/List-item.jsx";

const List = ({products = []}) => {

    const productList = products.map(product => (
        <ListItem
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            isPromo={product.isPromo} />
    ))

    return (
        <ul>
            {productList}
        </ul>
    );
};

export default List;

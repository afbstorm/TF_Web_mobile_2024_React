import ListItem from "../List-item/List-item.jsx";

const List = ({liste = []}) => {

    const listItems = liste.map(item => (
        <ListItem key={item.id} brand={item.brand} model={item.model} />
    ))

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

export default List;

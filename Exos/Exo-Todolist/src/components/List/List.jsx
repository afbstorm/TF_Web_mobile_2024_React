import ListItem from "./ListItem.jsx";
import {styles} from "../Todo/Todo.jsx";

const List = ({todos = [], onComplete, onDelete}) => {

    if (todos.length === 0) {
        return (
            <div style={styles.emptyList}>
                Pas encore de tâche enregistrée.
            </div>
        )
    }

    return (
        <div>
            {todos.map(todo => (
                <ListItem
                    key={todo.id}
                    onDelete={onDelete}
                    onComplete={onComplete}
                    todo={todo} />
            ))}
        </div>
    );
};

export default List;

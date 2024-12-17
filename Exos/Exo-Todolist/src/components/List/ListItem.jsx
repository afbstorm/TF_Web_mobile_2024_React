import {styles} from "../Todo/Todo.jsx";

const ListItem = ({todo, onComplete, onDelete}) => {
    const itemStyle = {
        ...styles.todoItem,
        ...(todo.priority === 'urgent' && styles.urgentTodo),
        ...(todo.completed && styles.completedTodo)
    };

    return (
        <div style={itemStyle}>
            <div style={styles.todoContent}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onComplete(todo.id)}
                    style={styles.checkbox}
                />
                <div style={styles.todoText}>
                    <h3 style={styles.todoTitle}>
                        {todo.title}
                    </h3>
                    {todo.description && (
                        <p style={styles.todoDescription}>{todo.description}</p>
                    )}
                </div>
            </div>
            <button onClick={() => onDelete(todo.id)} style={styles.deleteButton}>
                x
            </button>
        </div>
    );
};

export default ListItem;

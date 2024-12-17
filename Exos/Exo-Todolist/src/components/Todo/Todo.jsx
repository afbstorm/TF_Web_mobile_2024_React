import Filters from "../Filters/Filters.jsx";
import List from "../List/List.jsx";
import Form from "../Form/Form.jsx";
import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (todo) => {
        // Au lieu de modifier le tableau exisant, je crée un nouveau tableau en effectuant un spread du tableau existant
        // dans lequel, je spread sur l'object reçu en paramètre en y ajoutant les clés id et completed
        setTodos([...todos, { ...todo, id: Date.now(), completed: false}])
    }

    const completeTodo = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        )
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const filteredTodos = todos.filter(todo => {
        switch (filter) {
            case 'active':
                return !todo.completed;
            case 'completed':
                return todo.completed;
            case 'urgent':
                return todo.priority === 'urgent';
            default:
                return true;
        }
    })

    return (
        <div style={styles.container}>
            <h1 style={{...styles.title}}>Exercice Todolist</h1>
            <Form onSubmitTodo={addTodo}/>
            <Filters currentFilter={filter} onFilterChange={setFilter}/>
            <List todos={filteredTodos} onComplete={completeTodo} onDelete={deleteTodo}/>
        </div>
    );
};


export const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px'
    },
    input: {
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #DDD',
        borderRadius: '4px',
        width: '100%'
    },
    inputError: {
        borderColor: '#ff0000'
    },
    errorText: {
        color: '#ff0000',
        fontSize: '14px',
        margin: '4px 0'
    },
    textarea: {
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #DDD',
        borderRadius: '4px',
        width: '100%',
        minHeight: '100px'
    },
    select: {
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #DDD',
        borderRadius: '4px',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#FFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    filters: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
    },
    filterButton: {
        padding: '8px 16px',
        border: '1px solid #DDD',
        borderRadius: '4px',
        backgroundColor: '#FFF',
        cursor: 'pointer'
    },
    activeFilter: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        color: '#FFF'
    },
    todoList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#FFF',
        border: '1px solid #DDD',
        borderRadius: '4px',
    },
    urgentTodo: {
        backgroundColor: '#fff3f3',
        borderColor: '#fff3f3'
    },
    completedTodo: {
        opacity: '0.5',
        textDecoration: 'line-through'
    },
    todoContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flex: 1
    },
    checkbox: {
        width: '20px',
        height: '20px'
    },
    todoText: {
        flex: 1
    },
    todoTitle: {
        fontSize: '16px'
    },
    todoDescription: {
        fontSize: '14px',
        margin: '4px 0',
        color: '#666'
    },
    deleteButton: {
        padding: '4px 8px',
        fontSize: '20px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#ff0000'
    },
    emptyList: {
        textAlign: 'center',
        color: '#666',
        padding: '20px'
    }
}

export default Todo;

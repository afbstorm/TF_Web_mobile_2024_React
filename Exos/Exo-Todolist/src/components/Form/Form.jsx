import {useState} from "react";
import {styles} from "../Todo/Todo.jsx";

const Form = ({onSubmitTodo = () => {}}) => {

    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        priority: 'normal'
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formValues.title.trim()) {
            newErrors.title = 'Le titre de la tâche est obligatoire';
        }

        if (Object.keys(newErrors).length === 0) {
            onSubmitTodo(formValues);
            setFormValues({
                title: '',
                description: '',
                priority: 'normal'
            });
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({...prevValues, [name]: value}))
        if (errors[name]) {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div>
                <input
                    type="text"
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                    placeholder='Titre de la tâche'
                    style={{
                        ...styles.input,
                        ...(errors.title && styles.inputError)
                    }}/>
                {errors.title && (
                    <p style={styles.errorText}>{errors.title}</p>
                )}
            </div>

            <textarea
                name="description"
                value={formValues.description}
                onChange={handleChange}
                placeholder='Description de la tâche (optionnel)'
                style={styles.textarea}
            />

            <select
                name="priority"
                value={formValues.priority}
                onChange={handleChange}
                style={styles.select}
            >
                <option value="low">Basse</option>
                <option value="normal">Normale</option>
                <option value="urgent">Urgente</option>
            </select>

            <button type='submit' style={styles.button}>
                Ajouter la tâche
            </button>
        </form>
    );
};

export default Form;

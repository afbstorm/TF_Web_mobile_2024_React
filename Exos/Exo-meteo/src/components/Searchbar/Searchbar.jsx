import {useState} from "react";

const Searchbar = ({label = '', placeholder = '', onSearch = () => {}}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) {
            return;
        }
        onSearch(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            {label && <label htmlFor={label}>{label}</label>}
            <input
                type="text"
                value={query}
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type='submit'>Rechercher</button>
        </form>
    );
};

export default Searchbar;

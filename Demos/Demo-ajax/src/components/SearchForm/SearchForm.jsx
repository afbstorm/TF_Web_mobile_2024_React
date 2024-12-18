import { useState, useEffect, useId, useRef } from 'react';

const SearchForm = ({label = undefined, btnSubmitText = 'Rechercher', onSearch = () => {}}) => {
    // State qui va contenir l'information a rechercher
    const [query, setQuery] = useState('');

    // Utilisation du hook useId pour générer un ID unique servant UNIQUEMENT a relier des label avec leur input
    const formId = useId();

    // Utilisation du hook useRef pour stocker la référence courante d'un élément spécifique
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);

        setQuery("");
        inputRef.current.focus();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query)
        }, 3000)

        return () => {
            clearTimeout(timer);
        }
    }, [query])


    return (
        <form onSubmit={handleSubmit}>
            {label && (
                <label htmlFor={formId}>{label}</label>
            )}
            <input
                type="text"
                id={formId}
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">{btnSubmitText}</button>
        </form>
    );
};

export default SearchForm;

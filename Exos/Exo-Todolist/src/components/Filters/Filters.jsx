import {styles} from "../Todo/Todo.jsx";

const Filters = ({currentFilter, onFilterChange}) => {
    return (
        <div style={styles.filters}>
            <button
                style={{
                    ...styles.filterButton,
                    ...(currentFilter === 'all' && styles.activeFilter)
                }}
                onClick={() => onFilterChange('all')}
            >
                Toutes
            </button>
            <button
                style={{
                    ...styles.filterButton,
                    ...(currentFilter === 'active' && styles.activeFilter)
                }}
                onClick={() => onFilterChange('active')}
            >
                En cours
            </button>
            <button
                style={{
                    ...styles.filterButton,
                    ...(currentFilter === 'urgent' && styles.activeFilter)
                }}
                onClick={() => onFilterChange('urgent')}
            >
                Urgentes
            </button>
            <button
                style={{
                    ...styles.filterButton,
                    ...(currentFilter === 'completed' && styles.activeFilter)
                }}
                onClick={() => onFilterChange('completed')}
            >
                Terminées
            </button>
        </div>
    );
};

export default Filters;

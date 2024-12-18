import SearchForm from "../SearchForm/SearchForm.jsx";
import PersonRequest from "../PersonRequest/PersonRequest.jsx";
import {useState} from "react";

const PersonInfo = () => {
    const [target, setTarget] = useState(null);


    const handleSearch = (query) => {
        setTarget(query)
    }

    return (
        <>
            <SearchForm
                label="Prénom"
                btnSubmitText="🔍"
                onSearch={handleSearch}
            />
            {target ? (
                <PersonRequest firstname={target}/>
            ) : (
                <p>Pas de requête en cours...</p>
            )
            }

        </>
    );
};

export default PersonInfo;

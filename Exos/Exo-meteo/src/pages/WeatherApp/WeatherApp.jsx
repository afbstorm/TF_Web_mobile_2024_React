import {useState, useCallback, useRef} from "react";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import CitiesList from "../../components/CitiesList/CitiesList.jsx";
import WeatherRequest from "../../components/WeatherRequest/WeatherRequest.jsx";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [cities, setCities] = useState([]);

    const handleCitySearch = (cityName) => {
        setCity(cityName)
    }

    const handleNewCities = (data) => {
        setCities(prevCities => [...prevCities, data])
    }

    console.log(cities)
    return (
        <div>
            <h2>
                Moteur de recherche de météo MONDIALE
            </h2>
            <Searchbar label='Nom de la ville' placeholder='Ex: Charleroi' onSearch={handleCitySearch} />
            <h2>
                Résultat de la recherche :
            </h2>
            {city ? (
                <WeatherRequest city={city} onNewCity={handleNewCities} />
            ) : (
                <p>Pas de recherche en cours...</p>
            )}

            {cities.length > 2 && (
                <CitiesList cities={cities} />
            )}

        </div>
    );
};

export default WeatherApp;



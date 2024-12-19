import axios from 'axios';
import { useEffect, useState } from "react";

const URL = `https://api.openweathermap.org/data/2.5/weather/?q=__query__&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=fr`;

const WeatherRequest = ({city, onNewCity = () => {}}) => {

    const [fetching, setFetching] = useState({
        loading: false,
        error: null,
        data: {
            city: '',
            temp: null,
            weather: {
                description: '',
                icon: ''
            }
        }
    });

    useEffect(() => {
        setFetching({
            loading: true,
            error: null,
            data: {
                city: '',
                temp: null,
                weather: {
                    description: '',
                    icon: ''
                }
            }
        })

        axios.get(URL.replace('__query__', city))
            .then((data) => {
                console.log(data)
                setFetching({
                    loading: false,
                    error: null,
                    data: {
                        city: data.name,
                        temp: data.main.temp,
                        weather: {
                            description: data.weather[0].description,
                            icon: data.weather[0].icon
                        }
                    }
                })
            })
            .catch(error => {
                setFetching({
                    loading: false,
                    error: error.message,
                    data: null
                })
            })
    }, [city]);

    useEffect(() => {
        if (fetching.data.temp !== null) {
            onNewCity(fetching.data)
        }
    }, [fetching.data])

    return (
        <div>
            {fetching.loading ? (
                <p>Chargement des données en cours...</p>
            ) : fetching.error ? (
                <p>Erreur lors de la requête : {fetching.error}</p>
            ) : !fetching.data.temp ? (
                <p>Pas d'informations trouvées</p>
            ) : (
                <div>
                    <p>
                        La température de {fetching.data.city} est de {fetching.data.temp.toLocaleString('fr-FR', {
                            style: 'unit',
                            unit: 'celsius'
                    })}
                    </p>

                    <p>
                        Conditions météorologiques : {fetching.data.weather.description}
                    </p>
                    <img src={`https://openweathermap.org/img/w/${fetching.data.weather.icon}.png`}
                         alt={fetching.data.weather.description}/>
                </div>
            )}
        </div>
    );
};

export default WeatherRequest;

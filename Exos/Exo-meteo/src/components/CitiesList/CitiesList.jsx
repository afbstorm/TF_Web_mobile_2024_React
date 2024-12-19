import {nanoid} from "nanoid";

const CitiesList = ({cities = []}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>City name</th>
                    <th>Temperature</th>
                    <th>Weather</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                {cities.map(city => (
                    <tr key={nanoid()}>
                        <td>{city.city}</td>
                        <td>{city.temp.toLocaleString('fr-FR', {
                            style: 'unit',
                            unit: 'celsius'
                        })}</td>
                        <td>{city.weather.description}</td>
                        <td>
                            <img src={`https://openweathermap.org/img/w/${city.weather.icon}.png`}
                                 alt={`${city.weather.description}`}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CitiesList;

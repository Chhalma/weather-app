import { useState } from "react"
import {AsyncPaginate} from "react-select-async-paginate"
import { GEO_API_URL } from "../../api";
import { geoApiOptions } from "../../api";
const Search = ({onSearchChange}) =>{
    const [search, setSearch] = useState(null);
    const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => {
            // Remove duplicates
            const seen = new Set();
            const uniqueCities = response.data.filter(city => {
                const key = `${city.name}-${city.countryCode}`;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

            // Optionally prioritize UK
            uniqueCities.sort((a, b) => {
                if (a.countryCode === "GB" && b.countryCode !== "GB") return -1;
                if (a.countryCode !== "GB" && b.countryCode === "GB") return 1;
                return 0;
            });

            return {
                options: uniqueCities.map(city => ({
                    value: `${city.latitude},${city.longitude},${city.countryCode}`,
                    label: `${city.name}, ${city.countryCode}`
                }))
            };
        })
        .catch(err => console.error(err));
};

    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData)
    }
    return (
    <AsyncPaginate 
        placeholder="Search for city" debounceTimeout={600} 
        value ={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
    />
    )
}

export default Search
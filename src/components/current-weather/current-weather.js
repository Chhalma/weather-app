import "./current-weather.css"


const CurrentWeather = () =>{
    return (
        <div className="weather">
            <div className="top">
                <p className="city">London</p>
                <p className="weather-description">Sunny</p>
                <img alt="weather" className="weather-icon" src={`${process.env.PUBLIC_URL}/icons/01d.png`}></img>
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">15°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Winds</span>
                        <span className="parameter-value">5 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Huminidity</span>
                        <span className="parameter-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">14 hPa</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CurrentWeather;
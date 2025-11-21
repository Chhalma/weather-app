# Weather App

A responsive React-based weather application that allows users to search for cities and view the current weather, including temperature, weather condition, wind speed, humidity, and pressure. The app uses a geolocation API for city search and a weather API for real-time weather data.

---

## Features

* **City Search:** Users can search for cities worldwide using an autocomplete search bar powered by `react-select-async-paginate`.
* **Current Weather Display:** Shows temperature, weather description, feels-like temperature, wind speed, humidity, and pressure.
* **Responsive Design:** Works on desktop and mobile devices.
* **Weather Icons:** Displays weather icons based on current conditions.

---

## Demo

![Weather App Screenshot](./screenshot.png)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/weather-app.git
   ```
2. Navigate into the project directory:

   ```bash
   cd weather-app
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your API keys:

   ```env
   REACT_APP_WEATHER_API_KEY=your_weather_api_key
   REACT_APP_GEO_API_URL=your_geo_api_url
   ```
5. Start the development server:

   ```bash
   npm start
   ```

---

## Technologies Used

* **Frontend:** React, AsyncPaginate (react-select-async-paginate)
* **APIs:** Geo API for city search, OpenWeatherMap API (or other) for weather data
* **Styling:** CSS, Flexbox
* **State Management:** React Hooks (`useState`, `useEffect`)

---

## Folder Structure

```
weather-app/
├─ public/
│  └─ icons/            # Weather icons
├─ src/
│  ├─ components/
│  │  ├─ Search.js
│  │  └─ CurrentWeather.js
│  ├─ api.js            # API endpoints and options
│  └─ App.js
├─ .env                 # API keys
├─ package.json
└─ README.md
```

---

## Usage

1. Open the app in your browser.
2. Type the name of a city in the search bar.
3. Select the city from the dropdown.
4. View the current weather data for the selected city.

---

## Customization

* Adjust the styling in `current-weather.css` to change the layout, colors, and fonts.
* Change the number of cities returned or prioritized countries in `Search.js`.
* Replace or expand the weather icons in the `/public/icons` folder.

---

## Future Improvements

* Add a **7-day forecast** for selected cities.
* Include **unit toggle** between Celsius and Fahrenheit.
* Integrate **dark/light mode** for better UX.
* Add **geolocation support** to show weather for the user’s current location.

---

## License

This project is licensed under the MIT License.

---

## Author

**Chhalma Chhaya**
Email: [chhaya.mist@gmail.com](mailto:chhaya.mist@gmail.com)
GitHub: [ChhalmaGitHub](https://github.com/Chhalma)
Portfolio: [ChhalmaPortfolio](https://chhalma.github.io/portfolio/)

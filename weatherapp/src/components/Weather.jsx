import React from "react";
import "./Temp.css";
import { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  //831261a1d96631b08e530cc6d5c8baa3
  //https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=831261a1d96631b08e530cc6d5c8baa3
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=831261a1d96631b08e530cc6d5c8baa3`
      );
      const data = await response.json();
      console.log(data);
      setCity(data.main);
    };
       fetchAPI();
  }, [search]);

  return (
    <div className="box">
      <div className="inputData">
        <input
          type="search"
          value={search}
          className="inputField"
          onChange={(event) => {
            setSearch(event.target.value); 
          }}
        />
      </div>

      {!city ? (
        <>
          <h2 id="noData">Enter A city name</h2>
        </>
      ) : (
        <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view"></i>
            {search}
          </h2>
          <h1 className="temper">T:{city.temp}°C</h1>
          <h3 className="max">
            <h4>Min:{city.temp_min}°Cel</h4> <h4>Max:{city.temp_max}°Cel</h4>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Weather;

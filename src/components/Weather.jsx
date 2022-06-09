import React, { useEffect, useState } from "react";
import "./weather.css";
import { Card, Container, Col, Button } from "react-bootstrap";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Weather = ({ weatherData, loading }) => {
  return (
    <div>
      <div className="weatherbanner">
        <div className="bannercontent">
          <h1 className="city_title">{weatherData.name}</h1>
          <h2 className="today_date"> {moment().format("LL")}</h2>
          <Link to="/Search">
            <button className="searchbuton">search by city</button>
          </Link>
        </div>
      </div>
      <div className="wrapper">
        <div className="weatherdetails">
          <h4 className="subtitle">
            <span>Day</span>
          </h4>
          <span className="weathericons">
            <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/48/000000/external-day-sun-and-moon-tulpahn-flat-tulpahn.png" />
          </span>
          <span className="weathercontent">{moment().format("dddd")}</span>
        </div>

        <div className="weatherdetails">
          <h4 className="subtitle">
            <span>Temp</span>
          </h4>
          <span className="weathericons">
            <img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/42/000000/external-temperature-nature-wanicon-two-tone-wanicon.png" />
          </span>

          <span className="weathercontent">{weatherData.main.temp} ºC</span>
        </div>
        <div className="weatherdetails">
          <span>
            <h4 className="subtitle">Feels like </h4>
          </span>
          <span className="weathericons">
            <img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/42/000000/external-temperature-metabolism-inipagistudio-lineal-color-inipagistudio.png" />
          </span>
          <span className="weathercontent">
            {weatherData.main.feels_like}ºC
          </span>
        </div>
        <div className="weatherdetails">
          {" "}
          <span>
            <h4 className="subtitle"> Description</h4>
          </span>
          <span className="weathericons">
            <img src="https://img.icons8.com/dusk/48/000000/clouds.png" />
          </span>
          <span className="weathercontent">
            {weatherData.weather[0].description}
          </span>
        </div>
      </div>
      {/* Next Row */}
      <div className="wrapper">
        <div className="weatherdetails">
          <h4 className="subtitle">
            <span>Clouds</span>
          </h4>
          <span className="weathericons">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="cloud image"
            />
          </span>
          <span className="weathercontent">{weatherData.clouds.all}</span>
        </div>
        <div className="weatherdetails">
          <h4 className="subtitle">
            <span>Pressure</span>
          </h4>
          <span className="weathericons">
            <img src="https://img.icons8.com/color/48/000000/pressure.png" />
          </span>

          <span className="weathercontent">
            {weatherData.main.pressure} hPa{" "}
          </span>
        </div>
        <div className="weatherdetails">
          <span>
            <h4 className="subtitle">Humidity </h4>
          </span>
          <span className="weathericons">
            <img src="https://img.icons8.com/external-justicon-flat-justicon/48/000000/external-humidity-weather-justicon-flat-justicon.png" />
          </span>
          <span className="weathercontent">{weatherData.main.humidity}%</span>
        </div>
        <div className="weatherdetails">
          {" "}
          <span>
            <h4 className="subtitle"> Wind</h4>
          </span>
          <span className="weathericons">
            <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/42/000000/external-wind-autumn-wanicon-lineal-color-wanicon.png" />
          </span>
          <span className="weathercontent">
            {weatherData.wind.speed} meter/sec
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;

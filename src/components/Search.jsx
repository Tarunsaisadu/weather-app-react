import React from "react";
import { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import moment from "moment";
import "./weather.css";
import "./search.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  const [userQuery, setuserQuery] = useState("");
  const [results, setResults] = useState([]);

  const updateUserQuery = (event) => {
    console.log("userQuery", "setuserQuery");
    setuserQuery(event.target.value);
  };
  //  const celsius = (results.main.temp - 273.15).toFixed(2);
  const searchQuery = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?q=${userQuery}&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (!response.ok) {
        console.error("something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  return (
    <div className="form">
      <div className="weatherbanner">
        <div className="bannercontent">
          <input
            className="search_input"
            value={userQuery}
            onChange={updateUserQuery}
            onKeyPress={handleKeyPress}
            placeholder="enter a city name"
          />
          <button className="search-button" onClick={searchQuery}>
            Search
          </button>
        </div>
      </div>

      <div>
        {typeof results.main != "undefined" ? (
          <div className="cityinfo">
            <div className="searchwrapper">
              <div className="weatherdetails">
                <h4 className="subtitle">
                  <span>Day</span>
                </h4>
                <span className="weathericons">
                  <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/48/000000/external-day-sun-and-moon-tulpahn-flat-tulpahn.png" />
                </span>
                <span className="weathercontent">
                  {moment().format("dddd")}
                </span>
              </div>

              <div className="weatherdetails">
                <h4 className="subtitle">
                  <span>Temp</span>
                </h4>
                <span className="weathericons">
                  <img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/42/000000/external-temperature-nature-wanicon-two-tone-wanicon.png" />
                </span>

                <span className="weathercontent">{results.main.temp} ºC</span>
              </div>
              <div className="weatherdetails">
                <span>
                  <h4 className="subtitle">Feels like </h4>
                </span>
                <span className="weathericons">
                  <img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/42/000000/external-temperature-metabolism-inipagistudio-lineal-color-inipagistudio.png" />
                </span>
                <span className="weathercontent">
                  {results.main.feels_like}ºC
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
                  {results.weather[0].description}
                </span>
              </div>
            </div>

            <div className="searchwrapper">
              <div className="weatherdetails">
                <h4 className="subtitle">
                  <span>Clouds</span>
                </h4>
                <span className="weathericons">
                  <img
                    src={`http://openweathermap.org/img/wn/${results.weather[0].icon}.png`}
                    alt="cloud image"
                  />
                </span>
                <span className="weathercontent">{results.clouds.all}</span>
              </div>
              <div className="weatherdetails">
                <h4 className="subtitle">
                  <span>Pressure</span>
                </h4>
                <span className="weathericons">
                  <img src="https://img.icons8.com/color/48/000000/pressure.png" />
                </span>

                <span className="weathercontent">
                  {results.main.pressure} hPa{" "}
                </span>
              </div>
              <div className="weatherdetails">
                <span>
                  <h4 className="subtitle">Humidity </h4>
                </span>
                <span className="weathericons">
                  <img src="https://img.icons8.com/external-justicon-flat-justicon/48/000000/external-humidity-weather-justicon-flat-justicon.png" />
                </span>
                <span className="weathercontent">{results.main.humidity}%</span>
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
                  {results.wind.speed} meter/sec
                </span>
              </div>
            </div>
          </div>
        ) : (
          // <div
          //   className="row justify-content-start"
          //   style={{ paddingTop: "10px", marginTop: "400px" }}
          // >
          //   <Card
          //     className="container2"
          //     style={{ width: "78rem", color: "black" }}
          //   >
          //     <Card.Body>
          //       <Card.Subtitle className="mb-2 text-muted">
          //         <p>
          //           Clouds:{results.clouds.all}
          //           <img
          //             src={`http://openweathermap.org/img/wn/${results.weather[0].icon}.png`}
          //             alt="cloud image"
          //           />
          //         </p>
          //       </Card.Subtitle>
          //       <Card.Text>
          //         <p className="info_weather">
          //           Temperature:{(results.main.temp - 273.15).toFixed(2)} ºC
          //         </p>
          //         <p className="info_weather">
          //           Feels like: {(results.main.feels_like - 273.15).toFixed(2)}{" "}
          //           ºC
          //         </p>
          //         <p className="info_weather">
          //           Description: {results.weather[0].description}
          //         </p>
          //         <p className="info_weather">Day: {moment().format("dddd")}</p>
          //         <p className="info_weather">Date: {moment().format("LL")}</p>
          //       </Card.Text>
          //     </Card.Body>
          //   </Card>
          // </div>
          <div></div>
        )}
      </div>
    </div>
  );
}

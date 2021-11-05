import React, { useEffect, useState } from "react";
import "./weather.css";
import { Card, Container, Col, Button } from "react-bootstrap";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Weather = ({ weatherData }) => {
  return (
    <div>
      <div className="weatherbanner">
        <div className="bannercontent">
          <h1 className="city_title">{weatherData.name}</h1>
          <h2 className="today_date"> {moment().format("LL")}</h2>
          <Link to="/Search">
            <button className="searchbuton">
              <lord-icon
                className="city_icon"
                src="https://cdn.lordicon.com/oudlegmg.json"
                trigger="hover"
                colors="primary:#000000,secondary:#000000"
                stroke="58"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </button>
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
    // <div className="container body-content">
    //   <div className="container">
    //     <div
    //       className="row justify-content-start"
    //       style={{ paddingTop: "10px" }}
    //     >
    //       <div className="col" style={{ paddingTop: "20px" }}>
    //         <h1>{weatherData.name}</h1>
    //         <div
    //           className="row justify-content-end"
    //           style={{ paddingTop: "10px" }}
    //         >
    //           <Link to="/Search">
    //             <button class="btn btn-primary">Search by city</button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div
    //         className="row justify-content-start"
    //         style={{ paddingTop: "10px", marginTop: "400px" }}
    //       >
    //         <Card
    //           className="container2"
    //           style={{ width: "78rem", color: "black" }}
    //         >
    //           <Card.Body>
    //             <Card.Subtitle className="mb-2 text-muted">
    //               <p>
    //                 Clouds:{weatherData.clouds.all}
    //                 <img
    //                   src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
    //                   alt="cloud image"
    //                 />
    //               </p>
    //             </Card.Subtitle>
    //             <Card.Text>
    //               <p className="info_weather">
    //                 Temperature:{weatherData.main.temp} ºC
    //               </p>
    //               <p className="info_weather">
    //                 Feels like: {weatherData.main.feels_like}
    //               </p>
    //               <p className="info_weather">
    //                 Description: {weatherData.weather[0].description}
    //               </p>
    //               <p className="info_weather">Day: {moment().format("dddd")}</p>
    //               <p className="info_weather">Date: {moment().format("LL")}</p>
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Weather;

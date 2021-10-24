import React from "react";
import "./weather.css";
import { Card, Container, Col, Button } from "react-bootstrap";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Weather = ({ weatherData }) => {
  return (
    <div className="container body-content">
      <div className="container">
        
        <div
          className="row justify-content-start"
          style={{ paddingTop: "10px" }}
        >
          <div className="col" style={{ paddingTop: "20px" }}>
            <h1>{weatherData.name}</h1>
            <div className="row justify-content-end" style={{ paddingTop: "10px"  }}>
          <Link to="/Search">
            <button class="btn btn-primary">Search by city</button>
          </Link>
        </div>
          </div>
        </div>
         <div >
        <div
          className="row justify-content-start"
          style={{ paddingTop: "10px", marginTop: "400px" }}
        >
          <Card className="container2" style={{ width: "78rem", color:"black" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <p>
                  Clouds:{weatherData.clouds.all}
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="cloud image"
                  />
                  
                </p>
              </Card.Subtitle>
              <Card.Text>
                <p className="info_weather">Temperature:{(weatherData.main.temp)} ºC</p>
                <p className="info_weather">Feels like: {weatherData.main.feels_like}</p>
                <p className="info_weather">Description: {weatherData.weather[0].description}</p>
                <p className="info_weather">Day: {moment().format("dddd")}</p>
                <p className="info_weather">Date: {moment().format("LL")}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

import React from "react";
import { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import moment from "moment";
import "./weather.css";

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
      <input
        value={userQuery}
        onChange={updateUserQuery}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-primary" onClick={searchQuery}>
        Search
      </button>
      <div>
        {typeof results.main != "undefined" ? (
         
     <div
          className="row justify-content-start"
          style={{ paddingTop: "10px", marginTop: "400px" }}
        >
          <Card className="container2" style={{ width: "78rem", color:"black" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <p>
                  Clouds:{results.clouds.all}
                  <img
                    src={`http://openweathermap.org/img/wn/${results.weather[0].icon}.png`}
                    alt="cloud image"
                  />
                  
                </p>
              </Card.Subtitle>
              <Card.Text>
                <p className="info_weather">Temperature:{(results.main.temp - 273.15).toFixed(2)} ºC </p>
                <p className="info_weather">Feels like: {results.main.feels_like}</p>
                <p className="info_weather">Description: {results.weather[0].description}</p>
                <p className="info_weather">Day: {moment().format("dddd")}</p>
                <p className="info_weather">Date: {moment().format("LL")}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          
        
        </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

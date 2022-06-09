import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import Loader from "./components/Loader";
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
      let response_json = await response.json();
      setData(response_json);
      console.log(response_json);
      setLoading(true);
    };
    fetchWeather();
  }, [lat, long]);

  return (
    <div className="App">
      {loading ? (
        <Router>
          {typeof data.main != "undefined" ? (
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <Weather {...routerProps} weatherData={data} />
              )}
            />
          ) : (
            <div></div>
          )}
          <Route exact path="/search" component={Search} />
        </Router>
      ) : (
        <Loader />
      )}
    </div>
  );
}
export default App;

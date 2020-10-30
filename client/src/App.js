import React, { useState } from "react";
import FrontPage from "./components/FrontPage";
import MainPage from "./components/MainPage";
import { IdContext } from "./components/IdContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MultipleChoicePage from "./components/MultipleChoice";
import SavedPage from "./components/SavedPage";
import NoResult from "./components/Loading+NoResult/NoResult"
function App() {
  const [departureId, setDepartureId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const [departureName, setDepartureName] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalInfo, setArrivalInfo] = useState("");
  const [destinationInfo, setDestinationInfo] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [departureCountry, setDepartureCountry] = useState("");
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  return (
    <div>
      <Router>
        <IdContext.Provider
          value={{
            departureId,
            setDepartureId,
            destinationId,
            setDestinationId,
            departureName,
            setDepartureName,
            destinationName,
            setDestinationName,
            departureDate,
            setDepartureDate,
            arrivalInfo,
            setArrivalInfo,
            destinationInfo,
            setDestinationInfo,
            count, setCount, count2, setCount2, departureCountry, setDepartureCountry, destinationCountry, setDestinationCountry,
          }}
        >
          <NavBar />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/Main" component={MainPage} />
            <Route exact path="/MultipleChoicePage" component={MultipleChoicePage} />
            <Route exact path="/SavedPage" component={SavedPage} />
            <Route exact path="/NoResult" component={NoResult} />
          </Switch>
        </IdContext.Provider>
      </Router>
    </div>
  );
}

export default App;

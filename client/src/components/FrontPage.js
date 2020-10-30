import React, { useRef, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import { destinationApi, departureApi } from "../Api";
import { IdContext } from "./IdContext";
import { useHistory } from "react-router-dom";
import { FrontPageMain, SearchFlightButton, FrontPageH2, LoadingScreenDiv } from "./Styled";
import LoadingPage from "./Loading+NoResult/LoadingPage"

function FrontPage() {
  const [departureInput, setDepartureInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setArrivalInfo } = useContext(IdContext);
  const { setDestinationInfo } = useContext(IdContext);
  const timeout = useRef(null);
  const { setDestinationId, setDepartureId } = useContext(IdContext);
  const { setDestinationName, setDepartureName } = useContext(IdContext);
  const { setDestinationCountry, setDepartureCountry } = useContext(IdContext);
  const history = useHistory();

  //convert input to placeID to send it to ApiData
  const convertDeparture = () => {
    return departureApi(departureInput)
      .then((res) => {
        if (res.Places) {
          setDepartureId(res.Places.map((airport) => airport.PlaceId));
          setArrivalInfo(res.Places.map((airport) => airport));
          setDepartureName(res.Places.map((airport) => airport.PlaceName));
          setDepartureCountry(res.Places.map((airport) => airport.CountryName));
        }
      })
      .catch((err) => {
        console.log(err);
        // history.push("/NoResult");
      });
  };
  const convertDestination = () => {
    return destinationApi(destinationInput)
      .then((res) => {
        if (res.Places) {
          setDestinationId(res.Places.map((a) => a.PlaceId));
          setDestinationInfo(res.Places.map((airport) => airport));
          setDestinationName(res.Places.map((airport) => airport.PlaceName));
          setDestinationCountry(res.Places.map((airport) => airport.CountryName))
        }
      })
      .catch((err) => {
        console.log(err);
        // history.push("/NoResult");
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setDepartureInput(value);
    }, 800);
  };

  const handleChange2 = (event) => {
    const value = event.target.value;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setDestinationInput(value);
    }, 800);
  };

  const handleSubmit = async (event) => {
    setIsLoading(true)
    const departureName = await convertDeparture();
    console.log("handleSubmit");
    const destinationName = await convertDestination();
    console.log(departureName);
    console.log(destinationName);

    if (destinationName === undefined || departureName === undefined) {
      history.push("/NoResult")
    }
    else if (destinationName.length > 1 || departureName.length > 1) {
      history.push("/MultipleChoicePage")
    }
    else if (destinationName.length === 0 || departureName.length === 0) {
      history.push("/Main")
    };

    // destinationName.length > 1 || departureName.length > 1
    //   ? history.push("/MultipleChoicePage")
    //   : history.push("/Main");
  };

  return (
    <>
      {isLoading === false ?
        <FrontPageMain>
          <div>
            <FrontPageH2>Where to Next?</FrontPageH2>
            <SearchBar onChange={handleChange} onChange2={handleChange2} />
            <SearchFlightButton onClick={handleSubmit}>
              Search Flights
        </SearchFlightButton>
          </div>
        </FrontPageMain>
        : <LoadingScreenDiv><LoadingPage /></LoadingScreenDiv>
      }
    </>
  );
}

export default FrontPage;

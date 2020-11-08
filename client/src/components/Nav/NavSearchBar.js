import React, { useRef, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import { destinationApi, departureApi } from "../../Api";
import { IdContext } from "../IdContext";
import { useHistory } from "react-router-dom";
import { NavLoadingScreen, NavLoadingScreenDiv, NavSearchBarButton} from "../Styled";
import LoadingPage from "../Loading+NoResult/LoadingPage";

function NavSearchBar() {
  const [departureInput, setDepartureInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setArrivalInfo } = useContext(IdContext);
  const { setDestinationInfo } = useContext(IdContext);
  const timeout = useRef(null);
  const { setDestinationId, setDepartureId } = useContext(IdContext);
  const { setDestinationName, setDepartureName } = useContext(IdContext);
  const {setDestinationCountry, setDepartureCountry} = useContext(IdContext);
  const {search, setSearch } = useContext(IdContext);
  const history = useHistory();

  //convert input to placeID to send it to ApiData
  const convertDeparture = () => {
    return departureApi(departureInput)
      .then((res) => {
        setDepartureId(res.Places.map((airport) => airport.PlaceId));
        setArrivalInfo(res.Places.map((airport) => airport));
        setDepartureName(res.Places.map((airport) => airport.PlaceName));
        setDepartureCountry(res.Places.map((airport) => airport.CountryName))
        return res.Places.map((airport) => airport.PlaceName);
      })
      .catch((err) => {
        console.log(err);
        // history.push("/NoResult");
      });
  };
  const convertDestination = () => {
    return destinationApi(destinationInput)
      .then((res) => {
        setDestinationId(res.Places.map((a) => a.PlaceId));
        setDestinationInfo(res.Places.map((airport) => airport));
        setDestinationName(res.Places.map((airport) => airport.PlaceName));
        setDestinationCountry(res.Places.map((airport) => airport.CountryName))
        return res.Places.map((airport) => airport.PlaceName);
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
    setIsLoading(true);
    const departureName = await convertDeparture();
    const destinationName = await convertDestination();
    setSearch(false);
    
    if(destinationName===undefined||departureName===undefined){
      history.push("/NoResult")
    }
    else if(destinationName.length > 1 || departureName.length > 1){
      history.push("/MultipleChoicePage")}
    else {
      history.push("/Main")};
    
  };

  return (
    <>
    {isLoading===false?
    
      <div>
        <SearchBar onChange={handleChange} onChange2={handleChange2} />
        <NavSearchBarButton onClick={handleSubmit}>
          Search
        </NavSearchBarButton>
      </div>
    
      :<NavLoadingScreenDiv><NavLoadingScreen></NavLoadingScreen></NavLoadingScreenDiv>
      }
    </>
  );
}

export default NavSearchBar;

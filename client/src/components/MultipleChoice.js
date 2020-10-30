import React, { useContext } from "react";
import { IdContext } from "./IdContext";
import { useHistory } from "react-router-dom";
import NoResult from "./Loading+NoResult/NoResult"
import {ChoicePageMainDiv,
        ChoicePageH3, 
        ChoicePageH4, 
        ToH3, 
        PlaceButton, 
        RetryButton,
        PlaceButtonDiv
      } from "./Styled"

export default function MultipleChoice() {
  const { arrivalInfo, destinationInfo } = useContext(IdContext);
  const { departureId, setDepartureId } = useContext(IdContext);
  const { destinationId, setDestinationId} = useContext(IdContext);
  const {count, setCount} = useContext(IdContext)
  const {count2, setCount2} = useContext(IdContext)
  const { destinationName, setDestinationName } = useContext(IdContext);
  const { departureName, setDepartureName } = useContext(IdContext);
  let arrivalData = Array.from(arrivalInfo);
  let destinationData = Array.from(destinationInfo);
  const history = useHistory();
  let destinationIdArr = Array.from(destinationId)
  let departureIdArr = Array.from(departureId)

  const handleClick = (placeId,placeName) => {
    setDepartureId(placeId);
    setCount(count+1);
    setDepartureName(placeName)
    console.log(departureId)
    console.log(departureIdArr)

  };
  const handleClick2 = (placeId,placeName) => {
    setDestinationId(placeId);
    setDestinationName(placeName)
    setCount2(count2+1);
    console.log(destinationId)
    
  };
  const retryHandleClick =()=>{
    // if (destinationId.length === 0 && departureId.length=== 0) {
      if(count>=1 && count2>=1){
      history.push("/Main");
      setCount2(0)
      setCount(0)
    }
  }
  return (
    <>
    {arrivalData.length>0?
    <ChoicePageMainDiv >
      <ChoicePageH4>Search term too broad, please reclick both location then click Retry</ChoicePageH4>
      
      <ChoicePageH3>From</ChoicePageH3>
      {arrivalData.map((d) => (
        <PlaceButtonDiv>
          <PlaceButton onClick={()=>{handleClick(d.PlaceId,d.PlaceName)}}>
              {d.PlaceName}
                </PlaceButton>
                  </PlaceButtonDiv>))}

      <ToH3>To</ToH3>
      {destinationData.map((d) => (
        <PlaceButtonDiv>
          <PlaceButton onClick={()=>{handleClick2(d.PlaceId,d.PlaceName)}}>
            {d.PlaceName}
              </PlaceButton>
                </PlaceButtonDiv>))}

      <RetryButton onClick={retryHandleClick} >Retry</RetryButton>
    </ChoicePageMainDiv>
    :<NoResult/>
  }
  </>
  );
}

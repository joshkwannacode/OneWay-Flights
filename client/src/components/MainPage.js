import React, { useState, useEffect, useContext } from "react";
import { getFlightInfo } from "../Api";
import { IdContext } from "./IdContext";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react"
import PlaneSvg from "../assets/plane.svg"
import LoadingPage from "./Loading+NoResult/LoadingPage"
import NoResult from "./Loading+NoResult/NoResult"
import { useHistory } from "react-router-dom";
import {
  MainPageStyle,
  BlueBackGround,
  CityNames,
  CarrierName,
  MainPageBorder,
  RowFormat,
  PriceAndTime,
  Price,
  InfoBottom,
  SaveButtonDiv,
  SaveButtonBorder,
  SaveButton,
  DestinationCityInfo,
  DepartureCityInfo,
  CityInfo,
  PlanePic,
  CountryName,
  CountryName2,
  OnHoverDiv,
  LoadingScreenDiv,
} from "./Styled";

export default function MainPage(props) {
  const [quotesInfo, setQuotesInfo] = useState("");
  const [carrierInfo, setCarrierInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [carrierName, setCarrierName] = useState("");
  const { departureId } = useContext(IdContext);
  const { destinationId } = useContext(IdContext);
  const { destinationName, departureName } = useContext(IdContext);
  const { departureDate } = useContext(IdContext);
  const { destinationCountry, departureCountry } = useContext(IdContext);
  const { user, isAuthenticated } = useAuth0();
  const userName = user.nickname;
  const history = useHistory();
  const userId = () => {
    if (isAuthenticated === true) { return (user.sub) }
    else {
      return (
        0
      )
    };
  }

  useEffect(() => {
    setIsLoading(true)
    if (departureId && destinationId)
      getFlightInfo(departureId, destinationId, departureDate)
        .then((res) => {
          console.log(res);
          setQuotesInfo(res.Quotes.map((airport) => airport));
          setCarrierInfo(res.Carriers.map((airport) => airport));
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err);
          history.push("/NoResult")
        });
  }, [departureId, destinationId]);


  const onSave = (price, time, carrierName) => {
    if (isAuthenticated === true) {
      axios.post('/savedInfo/save', {
        departureName,
        price, destinationName, userId, carrierName, time, departureDate, userName
      })
        .then(res => console.log(res.data))
    } else {
      return (
        <p>Needs Login</p>
      )
    }
  }
  const departureCity = JSON.stringify(departureId);
  const destinationCity = JSON.stringify(destinationId);
  let quotesDataArr = Array.from(quotesInfo);
  let carrierDataArr = Array.from(carrierInfo);
  console.log("quotesDataArr", quotesDataArr);

  return (
    <>
      {quotesInfo.length > 0 && isLoading === false ?
        <MainPageStyle>
          <BlueBackGround>
            {quotesDataArr.map((d, key) => {
              console.log(d.OutboundLeg.CarrierIds[0]);
              const carrierData = carrierDataArr.find(
                (carrierC) => carrierC.CarrierId === d.OutboundLeg.CarrierIds[0]

              );
              console.log(carrierData);
              return (
                <OnHoverDiv >
                  <MainPageBorder>
                    {/* Card with info */}
                    <RowFormat>
                      <CityInfo>
                        <DepartureCityInfo>
                          <CityNames key={key.QuoteId}>
                            {departureCity.slice(2, 5)}
                          </CityNames>
                          <CountryName>{departureCountry[0]}</CountryName>
                        </DepartureCityInfo>

                        <PlanePic src={PlaneSvg} />

                        <DestinationCityInfo>
                          <CityNames key={key.QuoteId}>
                            {destinationCity.slice(2, 5)}
                          </CityNames>
                          <CountryName2 >{destinationCountry[0]}</CountryName2>
                        </DestinationCityInfo>
                      </CityInfo>


                      <PriceAndTime>
                        {carrierData && (
                          <CarrierName key={key.QuoteId}>{carrierData.Name}</CarrierName>
                        )}
                        <InfoBottom key={key.QuoteId}>
                          Departure: {d.QuoteDateTime.slice(11, 16)}
                        </InfoBottom>
                      </PriceAndTime>
                    </RowFormat>

                  </MainPageBorder>

                  {/* Save Button */}
                  <SaveButtonDiv>
                    <SaveButtonBorder>
                      <SaveButton onClick={() => { onSave(d.MinPrice, d.QuoteDateTime.slice(11, 16), carrierData.Name) }}>save</SaveButton>
                      <Price key={key.QuoteId} >${d.MinPrice}</Price>
                    </SaveButtonBorder>
                  </SaveButtonDiv>

                </OnHoverDiv>
              );
            })}
          </BlueBackGround>
        </MainPageStyle>
        : isLoading === true ? <LoadingScreenDiv><LoadingPage /></LoadingScreenDiv> : <NoResult />
      }
    </>
  );


}

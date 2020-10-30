import styled, { keyframes } from "styled-components";
import FrontPageBackGround from "../assets/boat.png";
import NoResult from "../assets/NoResult.png"
//Front page
export const FrontPageMain = styled.div`
  background-image: url(${FrontPageBackGround});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const FrontPageH2 = styled.h2`
  display: none;
  @media (min-width: 1024px) {
    color: white;
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-left: 18vw;
    margin-top: 15vh;
    font-size: 4vw;
    font-weight: 350;
  }
  @media (min-width: 1180px) {
    margin-top: 10vh;
  }
  @media (min-width: 2200px) {
    margin-top: 7vh;
  }
`;
export const SearchFlightButton = styled.button`
  position: absolute;
  margin-left: 43.2vw;
  margin-top: 40vh;
  background: #0a0f39;
  border-radius: 1vw;
  width: 38vw;
  height: 5vh;
  font-size: 5vw;
  color: white;
  border: none;
  cursor:pointer;
  @media (min-width: 425px) {
    font-size: 4vw;
  }
  @media (min-width: 768px) {
    font-size: 3vw;
    width: 30vw;
    margin-left: 51.5vw;
  }
  @media (min-width: 1024px) {
    font-size: 1.1vw;
    width: 8vw;
    border-radius: 0.3vw;
    margin-left: 73.5vw;
    margin-top: 38vh;
  }
  @media (min-width: 1600px) {
    margin-top: 45vh;
  }
  @media (min-width: 1800px) {
    margin-top: 48vh;
  }
  @media (min-width: 2200px) {
    height: 7vh;
    font-size: 1vw;
    margin-top: 50vh;
  }
  @media (min-width: 2400px) {
    height: 5vh;
    margin-top: 45vh;
  }
`;

//SearchBar
export const SearchBarBorder = styled.div`
  width: 64vw;
  height: 32vh;
  background: #0a0f39;
  position: absolute;
  margin-left: 17.5vw;
  margin-top: 7vh;
  border-radius: 1vw;
  @media (min-width: 1024px) {
    height: 12vh;
    margin-top: 25vh;
    border-radius: 0.3vw;
  }
  @media (min-width: 1600px) {
    margin-top: 30vh;
    height: 14vh;
  }
  @media (min-width: 1800px) {
    height: 16vh;
  }
  @media (min-width: 2200px) {
    height: 18vh;
    margin-top: 30vh;
  }
  @media (min-width: 2400px) {
    height: 14vh;
    margin-top: 30vh;
  }
`;

export const SearchBarForm = styled.form`
  margin-top: 1vh;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin-left: -0.5vw;
  }
`;

export const TextArea = styled.textarea`
  height: 5vh;
  margin-left: 2vw;
  resize: none;
  width: 60vw;
  border-radius: 1vw;
  @media (min-width: 1024px) {
    width: 19vw;
    height: 4vh;
    font-size: 1.3vw;
    border-radius: 0.3vw;
    margin-top: 1vh;
  }
  @media (min-width: 1440px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1800px) {
    height: 5vh;
  }
  @media (min-width: 2200px) {
    height: 6vh;
  }
`;

export const TextAreaLabel = styled.label`
  color: white;
  font-size: 5vw;
  margin-left: 2vw;

  @media (min-width: 425px) {
    font-size: 3vw;
  }
  @media (min-width: 768px) {
    font-size: 2vw;
  }
  @media (min-width: 1024px) {
    font-size: 1.3vw;
  }
`;

export const DateInput = styled.input.attrs({
  type: "date",
})`
  height: 5vh;
  margin-left: 2vw;
  resize: none;
  width: 60vw;
  border-radius: 1vw;
  border: none;
  @media (min-width: 1024px) {
    width: 19vw;
    height: 4vh;
    font-size: 1.3vw;
    border-radius: 0.3vw;
    margin-top: 1vh;
  }
  @media (min-width: 1440px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1800px) {
    height: 5vh;
  }
  @media (min-width: 2200px) {
    height: 6vh;
  }
`;

export const DateLabel = styled.label`
  color: white;
  font-size: 5vw;
  margin-left: 2vw;

  @media (min-width: 425px) {
    font-size: 3vw;
  }
  @media (min-width: 768px) {
    font-size: 2vw;
  }
  @media (min-width: 1024px) {
    font-size: 1.3vw;
  }
`;

export const AreaAndLabel = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

//main page
export const MainPageStyle = styled.body`
  background-color: #F3F3F3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;
export const BlueBackGround = styled.div`
  border-radius: 1vw;
  /* background-color:#262A51; */
  width:80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top:3vh;
`;
export const OnHoverDiv = styled.div`
display:flex;
flex-direction:row;

`
export const MainPageBorder = styled.div`
background-color:white;
  border-radius: 1vw;
  font-size: 2.6vw;
  margin-bottom: 3vw;
  margin-top:2vh;
  width: 67vw;
  height:12vh;
  box-shadow: 6px 7px 25px -14px rgba(0,0,0,0.78);
  &:hover {
    box-shadow: 6px 4px 39px 9px rgba(0,0,0,0.75);
  }
  @media(min-width:1100px){
  height:15vh;
    width:40vw;
  }
  
`;
export const PlanePic = styled.img`
position:absolute;
display:flex;
flex-direction:row;
margin-left:18vw;
margin-top:3vh;
width:8vw;
height:4vh;
@media(min-width:1100px){
  margin-top:4vh;
  height:7vh;
  width:14vw;
  margin-left:4vw;
  }

`
export const RowFormat = styled.div`
  text-align:center;
  
`;

export const CarrierName = styled.div`
  @media(min-width:1100px){
  margin-left:1vw;
  margin-top:0.8vh;
  font-size:1vw;
  }
`;

export const PriceAndTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-top:2vh;
  margin-bottom:2vh;
  margin-right:14vw;
  margin-left:2vw;
  @media(min-width:420px){
    margin-top:0.3vh;
  }
  
`;

export const CityNames = styled.h3`
font-size:5vw;
color:#262A51;
margin-top:2vh;

@media(min-width:425px){
  font-size:4vw;
}
@media(min-width:1100px){
  font-size:3vw;
  }
@media(min-width:1200px){
  font-size:2.5vw;
}
`
export const CityInfo = styled.div`
display:flex;
flex-direction:row;
margin-left:8vw;
justify-content:space-between;
@media(min-width:1100px){
  font-size:1vw;
  }
`
export const DepartureCityInfo = styled.div`
margin-left:-3vw;
@media(min-width:1100px){
  margin-left:-5vw;
  }

`
export const DestinationCityInfo = styled.div`
margin-right:15vw;
@media(min-width:1100px){
  margin-right:5.5vw;
  }
`
export const CountryName= styled.p`
/* margin-left:6vw; */
`
export const CountryName2= styled.p`
/* margin-right:7vw; */
`
export const InfoBottom = styled.p`
width:100vw;
position:absolute;
@media(min-width:1100px){
  margin-left:-20vw;
  margin-top:0.8vh;
  font-size:1vw;
  }
`;



export const SaveButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse; 
  /* justify-content: flex-end; */
  
`;

export const SaveButtonBorder = styled.div`
  /* position:absolute; */
  display: flex;
  flex-direction: column;
  text-align:center;
  align-items:center;
  align-self:center;
  width:13vw;
  height:12vh;
  margin-top:0.7vh;
  border-left: 0.2vw solid black;
  background-color:#262A51;
  border-radius: 1vw;
  z-index:0;
  box-shadow: 6px 7px 25px -14px rgba(0,0,0,0.78);
  
  
  @media(min-width:768px){
    margin-top:0vh;
  }
  @media(min-width:1100px){
    margin-top:-4vh;
    height:15vh;
    width:7vw;
  }
  @media(min-width:2400px){
  margin-top:-3.5vh;
  
  }
`;

export const SaveButton = styled.button`
border-radius: 1vw;
  position:absolute;
  background-color:#262A51;
  border:0.4vw solid white;
  color:white;
  margin-top:5.5vh;
  font-size: 2.5vw;
  height: 3.5vh;
  width:10vw;
  &:hover {
    cursor:pointer;
  }
  &:active{
    border:none;
  }
  @media(min-width:1100px){
    font-size:1vw;
    width:4vw;
    height: 3.5vh;
    margin-top:7vh;
    border:0.2vw solid white;
  }
`;
export const Price = styled.p`
  color:white;
  font-size:3vw;
  margin-top:2.5vh;
  @media(min-width:1100px){
    font-size:1vw;
    margin-top:3vh;
  }
`;

//SavedPage

export const SavePageMain= styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color: #F3F3F3;
width: 100vw;
  height: 100vh;
`
export const MainButton = styled.button`
width: 80vw;
height: 30vw;
margin-top: 4vh;
background-color:white;
box-shadow: 6px 7px 25px -14px rgba(0,0,0,0.78);
border-radius:0.5vw;
border:none;
cursor:pointer;
&:hover {
    box-shadow: 6px 4px 39px 9px rgba(0,0,0,0.75);
  }
@media(min-width:768px){
  width:70vw;
  font-size:3vw;
}
@media(min-width:1200px){
  width:45vw;
  font-size:2vw;
  height:20vh;
  margin-top:6vh;
}
`
export const SavedItemList = styled.div`
width:80vw;
background-color:white;
margin-top:10vh;
margin-bottom:10vh;
font-size:4vw;
display:flex;
flex-direction:column;
align-items:center;
box-shadow: 6px 7px 25px -14px rgba(0,0,0,0.78);
border-radius:0.5vw;
@media(min-width:1200px){
  width:50vw;
  font-size:2vw;
  
}
`
export const MainH2 = styled.h2`
margin-top:10vh;
@media(min-width:768px){
  font-size:3vw;
}
@media(min-width:1200px){
  font-size:2vw;
  
}
`

export const MainH4 = styled.h4`
margin-top:5vh;
@media(min-width:768px){
  font-size:3vw;
  margin-top:3vh;
}
@media(min-width:1200px){
  font-size:2vw;
  
}
`
export const SavedItemName = styled.p`
font-size:3vw;
margin-top:2vh;
@media(min-width:1200px){
  font-size:1vw;
  
}
`
export const SavedItemIndividual = styled.p`
margin-bottom:1vh;
`
export const CloseButton = styled.button`
border:none;
background-color:white;
border-radius:30vw;
margin-left:75vw;
cursor:pointer;
@media(min-width:1200px){
  margin-left:45vw;
  
}
`
export const CloseButtonImg = styled.img`
width:4vw;
height:3vw;
`
export const PlaneImg = styled.img`
width:8vw;
height:8vw;
margin-top:1vh;
margin-bottom:1vh;
@media(min-width:1200px){
width:3vw;
height:3vw;
}
`
export const EditSaveButton = styled.button`
margin-top:-2.5vh;
margin-bottom:4vh;
margin-left:9vw;
font-size:3vw;
width:4vh;
height:3vh;
color: white;
background-color:#262A51;
border: none;
position:absolute;
border-radius:1vw;
`
export const DeleteButton = styled.button`
margin-top:1vh;
margin-bottom:2vh;
border-radius:0.8vw;
border:none;
color: white;
background-color:#262A51;
width:20vw;
height:4vh;
cursor:pointer;
@media(min-width:768px){
  font-size:3vw;
}
@media(min-width:1200px){
  font-size:2vw;
  width:10vw;
  height:6vh;
}
`
export const DescDiv = styled.div`
margin-bottom:3vh;

`
export const DescText = styled.p`
margin-top:1vh;
margin-bottom:3vh;
`
export const DescTextarea = styled.textarea`
margin-top:1vh;
margin-bottom:3vh;
`

//Multiple Choice Page
export const ChoicePageMainDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:3vw;
`
export const ChoicePageH4 = styled.h4`
margin-top:2vh;
text-align:center;
margin-bottom:3vh;
@media(min-width:1400px){
  font-size:2vw;
  
}
`
export const ChoicePageH3 = styled.h3`
margin-bottom:2vh;
@media(min-width:768px){
  font-size:5vw;
}
@media(min-width:1200px){
  font-size:3.5vw;
  margin-top:2vh;
}
`
export const ToH3 = styled.h3`
margin-bottom:2vh;
margin-top:1vh;
@media(min-width:768px){
  font-size:5vw;
}
@media(min-width:1200px){
  font-size:3.5vw;
  margin-top:2vh;
}
 `
export const PlaceButton = styled.button`
width:30vw;
background-color:white;
margin-bottom:1vh;
border:none;
box-shadow: 6px 7px 25px -14px rgba(0,0,0,0.78);
cursor:pointer;
&:hover{
  background-color:rgba(0,0,0,0.30);
  }
&:active{
    border:none;
  }
@media(min-width:768px){
  font-size:3.5vw;
}
@media(min-width:1200px){
  font-size:2.5vw;
}
`
export const PlaceButtonDiv = styled.div`
`
export const RetryButton = styled.button`
margin-top:5vh;
margin-bottom:5vh;
border:none;
color: white;
background-color:#262A51;
width:20vw;
height:4vh;
cursor:pointer;

&:active{
    border:none;
  }
@media(min-width:768px){
  font-size:3.5vw;
  height:5vh;
  width:15vw;
}
@media(min-width:1200px){
  font-size:2.5vw;
  height:6vh;
  width:15vw;
}
`
//Loading Screen
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
		-webkit-transform: rotate(360deg);
	}
`
export const LoadingScreenDiv = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const LoadingScreen = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20vh;
	height: 20vh;
	border: 3px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top-color: #52718d;
	animation: ${spin} 1s ease-in-out infinite;
	-webkit-animation: ${spin} 1s ease-in-out infinite;
	margin-top: 30vh;
`
//No Result Page
export const NoResultDiv= styled.div`
  /* background: #00E7DC; */
  margin:0; 
  padding:0; 
  overflow:hidden;
  background-image:url(${NoResult});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const NoResultH1 = styled.h1`
  font-family: 'Nunito', sans-serif;
  text-align: center;
  padding: 2em 0 0;
  @media(max-width:450px){
    /* margin-top:-3vh; */
    font-size:3vw;
  }
`
export const NoResultSVG = styled.svg`
  /* margin-top:-40vh; */
  /* height: 100%;
  width:100%; */
`
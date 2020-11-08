import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "./Loading+NoResult/LoadingPage";
import {
    SavePageMain,
    MainH2,
    MainH4,
    SavedItemName,
    SavedItemList,
    SavedItemIndividual,
    CloseButton,
    CloseButtonImg,
    PlaneImg,
    MainButton,
    DeleteButton,
    LoadingScreenDiv,
} from "./Styled"
import PlaneSvg from "../assets/plane.svg";
import closeIcon from "../assets/closeIcon.svg";
const FlightData = props => {
    const { user } = useAuth0()
    const [buttonClick, setButtonClick] = useState(false);
    const handleClick = () => {
        setButtonClick(true)
    };
    const handleClose = () => {
        setButtonClick(false)
    };

    return (
        <>
            {!buttonClick?
                <ol>
                    <MainButton onClick={handleClick} >
                        <p>{props.savedData.departureName}</p>
                        <PlaneImg src={PlaneSvg} alt="planeImg" />
                        <p>{props.savedData.destinationName}</p>
                    </MainButton>
                </ol>
                : null}
            {buttonClick === true ?
                <SavedItemList>
                    <CloseButton onClick={handleClose}><CloseButtonImg src={closeIcon} /></CloseButton>

                    <SavedItemName>NAME</SavedItemName>
                    <SavedItemIndividual>{props.savedData.userName}</SavedItemIndividual>

                    <SavedItemName>FROM</SavedItemName>
                    <SavedItemIndividual>{props.savedData.departureName[0]}</SavedItemIndividual>

                    <SavedItemName>TO</SavedItemName>
                    <SavedItemIndividual>{props.savedData.destinationName[0]}</SavedItemIndividual>

                    <SavedItemName>CARRIER NAME</SavedItemName>
                    <SavedItemIndividual>{props.savedData.carrierName}</SavedItemIndividual>

                    <SavedItemName>DEPARTURE DATE</SavedItemName>
                    <SavedItemIndividual>{props.savedData.departureDate[0]}-{props.savedData.time[0]}</SavedItemIndividual>

                    <SavedItemName>PRICE</SavedItemName>
                    <SavedItemIndividual>${props.savedData.price}</SavedItemIndividual>

                    <DeleteButton onClick={() => { props.deleteData(props.savedData._id) }}>REMOVE</DeleteButton>

                </SavedItemList>
                : null
            }
        </>
    )
}

function SavedPage() {
    const { user, getAccessTokenSilently } = useAuth0()
    const [savedData, setSavedData] = useState("")
    const token = getAccessTokenSilently();
    const [isLoading, setIsLoading] = useState(true)

    axios.get('/savedInfo')
        .then(res => {
            setIsLoading(false);
            const filteredData = res.data.filter(id=>id.userName===user.nickname)
            setSavedData(filteredData);
            
        })
        .catch((error) => {
            console.log(error);
        })
    const deleteData = (id) => {
        axios.delete('/savedInfo/' + id)
            .then(response => { console.log(response.data) });

        setSavedData(savedData.filter(el => el._id !== id));
    }

    let savedDataArr = Array.from(savedData)

    return (
        <>
        {isLoading?<LoadingScreenDiv><LoadingPage/></LoadingScreenDiv>:
        <SavePageMain>
            <MainH2>Welcome {user.nickname}</MainH2>
            <MainH4>Saved List:</MainH4>

            {savedDataArr.map(a => {
                const savedDataId = savedDataArr.find(
                    (dataUserId) => dataUserId.userName === user.nickname
                );
                console.log(savedDataId)
                return <FlightData
                    savedData={a}
                    user={user}
                    key={a._id}
                    deleteData={deleteData}
                    
                />
            })}
        </SavePageMain>}
        </>
    )
}

export default SavedPage

import React, { useState } from 'react'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react"
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
    DeleteButton
} from "./Styled"
import PlaneSvg from "../assets/plane.svg"
import closeIcon from "../assets/closeIcon.svg"
const FlightData = props => {
    const { user } = useAuth0()
    const [buttonClick, setButtonClick] = useState(false);
    const handleClick = () => {
        setButtonClick(true)
    }
    const handleClose = () => {
        setButtonClick(false)
    }

    return (
        <>
            {!buttonClick ?
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

    axios.get('/savedInfo')
        .then(res => {
            setSavedData(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    const deleteData = (id) => {
        axios.delete('/savedInfo/' + id)
            .then(response => { console.log(response.data) });

        setSavedData(savedData.filter(el => el._id !== id))
    }

    let savedDataArr = Array.from(savedData)

    return (
        <SavePageMain>
            <MainH2>Welcome {user.nickname}</MainH2>
            <MainH4>Global Saved List:</MainH4>

            {savedDataArr.map(a => {
                const savedDataId = savedDataArr.find(
                    (dataUserId) => dataUserId.userId.sub === user.sub
                );
                console.log(savedDataId)
                return <FlightData
                    savedData={a}
                    user={user}
                    key={a._id}
                    deleteData={deleteData}
                    savedDataId={savedDataId}
                />
            })}

        </SavePageMain>
    )
}

export default SavedPage

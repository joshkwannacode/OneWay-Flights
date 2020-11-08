import React, { useContext, useRef } from "react";
import { IdContext } from "../IdContext";
import {
  NavTextAreaLabel,
  NavDateInput,
  NavSearchBarForm,
  NavDateLabel,
  NavAreaAndLabel,
  NavTextArea,
} from "../Styled";
export default function SearchBar(props) {
  const { setDepartureDate } = useContext(IdContext);
  const timeout = useRef(null);

  const handleDate = (event) => {
    const value = event.target.value;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setDepartureDate(value);
    }, 800);
  };
  return (
    
        <NavSearchBarForm>
          <NavAreaAndLabel>
            <NavTextAreaLabel>From</NavTextAreaLabel>
            <NavTextArea
              className="textarea"
              onChange={props.onChange}
              label="text"
              aria-label="country and city"
              placeholder="enter country and city"
            ></NavTextArea>
          </NavAreaAndLabel>
          <NavAreaAndLabel>
            <NavTextAreaLabel>To</NavTextAreaLabel>
            <NavTextArea
              className="textarea"
              onChange={props.onChange2}
              label="text"
              aria-label="country and city"
              placeholder="enter country and city"
            ></NavTextArea>
          </NavAreaAndLabel>
          <NavAreaAndLabel>
            <NavDateLabel htmlFor="departureDate">Date</NavDateLabel>
            <NavDateInput type="date" name="departureDate" onChange={handleDate} />
          </NavAreaAndLabel>
        </NavSearchBarForm>
    
  );
}

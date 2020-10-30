import React, { useContext, useRef } from "react";
import { IdContext } from "./IdContext";
import {
  SearchBarBorder,
  TextArea,
  TextAreaLabel,
  DateInput,
  SearchBarForm,
  DateLabel,
  AreaAndLabel,
} from "./Styled";
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
    <div>
      <SearchBarBorder>
        <SearchBarForm>
          <AreaAndLabel>
            <TextAreaLabel>From</TextAreaLabel>
            <TextArea
              className="textarea"
              onChange={props.onChange}
              label="text"
              aria-label="country and city"
              placeholder="enter country and city"
            ></TextArea>
          </AreaAndLabel>
          <AreaAndLabel>
            <TextAreaLabel>To</TextAreaLabel>
            <TextArea
              className="textarea"
              onChange={props.onChange2}
              label="text"
              aria-label="country and city"
              placeholder="enter country and city"
            ></TextArea>
          </AreaAndLabel>
          <AreaAndLabel>
            <DateLabel htmlFor="departureDate">Date</DateLabel>
            <DateInput type="date" name="departureDate" onChange={handleDate} />
          </AreaAndLabel>
        </SearchBarForm>
      </SearchBarBorder>
    </div>
  );
}

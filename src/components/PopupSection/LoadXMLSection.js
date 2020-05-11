import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const LoadXMLSection = (props) => {

    const [textAreaValue, setValue] = React.useState("");
    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };
  return (
    <div className={props.className}>
      <textarea
        className="textarea"
        rows={30}
        placeholder="Paste your XML"
        value={textAreaValue}
        onChange={(event) => onChangeHandler(event)}/>
      <div className="buttonbar">
            <Button onClick={props.closePopup} className="button" variant="outlined" color="primary">
                Cancel
            </Button>
            <Button onClick={() => props.loadXml(textAreaValue)} className="button" variant="contained" color="primary">
                Load XML
            </Button>
      </div>
    </div>
  );
};

const LoadXMLSectionStyled = styled(LoadXMLSection)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  .textarea {
    width: 96%;
    border-radius: 4px;
    border: 1px solid #c2c2c2;
    outline: none;
    resize: none;
    align-self: center;
    margin: 15px 10px 15px 10px;
    font-weight: normal;
    font-size: small;
    font-stretch: extra-expanded;
  }
  .buttonbar {
    display: inline-block;
    margin: 10px 40px 10px 0px;
    align-self: flex-end;
  }
  .button {
    margin: 0px 8px 0px 8px;
    cursor: pointer;
  }
`;

export default LoadXMLSectionStyled;

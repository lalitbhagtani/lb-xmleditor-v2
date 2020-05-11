import React from "react";
import { TextField, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteRounded";
import styled from "styled-components";

const AttributesSection = (props) => {
  const attributes = props.value;

  const [attributeName, setAttributeName] = React.useState("");
  const onChangeHandler = (event) => {
    setAttributeName(event.target.value);
    setAttributeNameError(false);
  };

  const [attributeNameError, setAttributeNameError] = React.useState(false);
  const addAttributeHandler = () => {
    if (attributeName !== undefined && attributeName !== null) {
      if (attributes[attributeName] === undefined) {
        props.onAttributeValueChangeHandler(
          null,
          attributes,
          attributeName,
          ""
        );
        setAttributeName("");
      } else {
        setAttributeNameError(true);
      }
    }
  };

  const attributeList = Object.entries(attributes).map(([key, value]) => {
    return (
      <div className="container" key={key}>
        <span className="label">{key}</span>
        <span className="fieldBox">
          <TextField
            className="addAttributeName"
            label="Attribute Value"
            variant="outlined"
            margin="dense"
            size="small"
            value={value}
            onChange={(event) =>
              props.onAttributeValueChangeHandler(event, attributes, key, value)
            }
          />
          <DeleteIcon
            className="deleteIcon"
            color="primary"
            onClick={() => props.onDeleteAttributeHandler(attributes, key)}
          />
        </span>
      </div>
    );
  });

  return (
    <div className={props.className}>
      <div className="outerContainer">{attributeList}</div>
      <div className="addAttribute">
        <TextField
          className="addAttributeName"
          label="Attribute Name"
          margin="dense"
          variant="outlined"
          size="small"
          value={attributeName}
          onChange={onChangeHandler}
          error={attributeNameError}
          helperText={attributeNameError ? "This name is already added" : null}
        />
        <Button
          className="addAttributeButton"
          variant="contained"
          color="primary"
          size="small"
          onClick={addAttributeHandler}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

const AttributesSectionStyled = styled(AttributesSection)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  .outerContainer {
    max-height: 90%;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 15px 0px 15px;
  }
  .addAttribute {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px 5px 10px 5px;
    height: 10%;
  }
  .addAttributeName {
    margin-right: 8px;
  }
  .addAttributeButton {
    margin-left: 8px;
  }
  .label {
    margin-right: 10px;
    font-weight: 400;
    font-size: 16px;
  }
  .fieldBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 170px;
    width: 200px;
  }
  .deleteIcon {
    cursor: pointer;
  }
`;

export default AttributesSectionStyled;

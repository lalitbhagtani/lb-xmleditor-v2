import React from "react";
import Styled from "styled-components";
import InlineEdit from "./InLineEdit";

const TextTag = props => {
  return (
    <div className={props.className}>
      <InlineEdit
        activeClassName="editing"
        text={props.tagName}
        id={props.id}
        change={props.dataChanged}
        className="inlineEdit"
      />
    </div>
  );
};

const TextTagWrapper = Styled(TextTag)`
  min-width: 100;
  display: "inline-block";
  font-size: 13px;
  font-weight: 500;
  position: relative;
  margin: 12px 5px 12px 10px;
  elevation: 10; 
.inlineEdit{
  border-radius: 2px;
  border: 1px solid #c2c2c2;
  padding: 2px 5px 2px 5px;
}
.editing{
  padding: 2px 5px 2px 5px;
}
`;

export default TextTagWrapper;

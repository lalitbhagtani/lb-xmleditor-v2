import React from "react";
import Styled from "styled-components";
import { Card } from "@material-ui/core";
import TextViewIconBar from "../../components/IconBar/TextViewIconBar";

const ToolContainer = props => {
  const containerClassName = [props.gridClassName, props.className].join(" ");
  return (
    <div className={containerClassName}>
      <Card className="header">
        <TextViewIconBar
          textIndex={props.textIndex}
          textPlain={props.textPlain}
          loadXML={props.loadXML}
          copyXML={props.copyXML}
          downloadXML={props.downloadXML}
          newXML={props.newXML}
          openTreeViewPopup={props.openTreeViewPopup}
          openTextViewPopup={props.openTextViewPopup}
        />
        <div className="textViewContainer">
          <div className="viewContainer">{props.children}</div>
        </div>
      </Card>
    </div>
  );
};

const ToolContainerWrapper = Styled(ToolContainer)`
  .header{    
    width: 100%;
    background-color: #fcfcfc;
  }  
  .textViewContainer{
    width: 100%;
    height: 520px;    
    overflow: scroll;    
    font-weight: 500;
    font-size: 14px;
  }
  .textViewPlain{
    margin: 10px;
  }
  .textViewIndent{
    margin-left: 15px;
    margin-right: 15px;    
  }
  .viewContainer{
    margin-bottom: 10px;
  }
  .textarea{
    font-weight: 500;
    font-size: 14px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    margin: 0px 10px 0px 10px;
    resize:none;
  }
`;

export default ToolContainerWrapper;

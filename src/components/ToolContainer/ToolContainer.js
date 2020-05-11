import React from "react";
import Styled from "styled-components";
import TextViewIconBar from "../../components/IconBar/TextViewIconBar";

const ToolContainer = props => {
  return (
    <div className={`${props.gridClassName} ${props.className}`}>
      <TextViewIconBar
          saveOnline={props.saveOnline}
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
          {props.children}
        </div>
    </div>
  );
};

const ToolContainerWrapper = Styled(ToolContainer)`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fcfcfc;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  .textViewContainer{
    width: 100%;
    height: calc(100% - 62px);
    overflow: auto;    
    font-weight: 500;
    font-size: 14px;
    padding-bottom: 10px;
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

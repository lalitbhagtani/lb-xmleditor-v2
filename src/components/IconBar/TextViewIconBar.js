import React from "react";
import Styled from "styled-components";
import { IconButton, Icon } from "@material-ui/core";

const TextViewIconBar = props => {
  return (
    <div className={props.className}>
      <span className="iconBar">
        {props.newXML ? (
          <span className="iconWrapper">
            <span className="tooltiptext">New</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.newXML}
            >
              <Icon fontSize="small">fiber_new</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.saveOnline ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Copy XML</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.copyXML}
            >
              <Icon fontSize="small">file_copy</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.saveOnline ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Save Online</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.saveOnline}
            >
              <Icon fontSize="small">cloud_upload</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.downloadXML ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Download XML</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.downloadXML}
            >
              <Icon fontSize="small">cloud_download</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.textIndex ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Pretty Print</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.textIndex}
            >
              <Icon fontSize="small">format_align_center</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.textPlain ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Minify</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.textPlain}
            >
              <Icon fontSize="small">format_align_justify</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.loadXML ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Load XML</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.loadXML}
            >
              <Icon fontSize="small">sync</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.openTextViewPopup ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Expand</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.openTextViewPopup}
            >
              <Icon>fullscreen</Icon>
            </IconButton>
          </span>
        ) : null}
        {props.openTreeViewPopup ? (
          <span className="iconWrapper">
            <span className="tooltiptext">Expand</span>
            <IconButton
              className="icon iconGap"
              aria-label="align center"
              size="small"
              onClick={props.openTreeViewPopup}
            >
              <Icon>fullscreen</Icon>
            </IconButton>
          </span>
        ) : null}
      </span>
    </div>
  );
};

const TextViewIconBarWrapper = Styled(TextViewIconBar)`
  display: inline-block;
  background-color: #283593;
  width: 100%;
  height: 42px;
  border-radius: 4px 4px 0px 0px;
  .iconBar{
    float: right;
    margin: 6px 10px 6px 10px;
    cursor: pointer;
  }
  .iconGap{
    color: #e8eaf6;
  }
  .iconWrapper{
    position: relative;
    display: inline-block;
    margin-right: 10px;
  }
  .tooltiptext {
    visibility: hidden;
    background-color: #424242;
    color: #fff;
    text-align: center;
    padding: 5px 10px 5px 10px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    white-space: nowrap;
    margin-top: 32px;
    font-size: 10px;
  }

  .iconWrapper:hover .tooltiptext {
    visibility: visible;
  }
`;

export default TextViewIconBarWrapper;

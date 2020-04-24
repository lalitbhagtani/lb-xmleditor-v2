import React from "react";
import Styled from "styled-components";
import { IconButton, Icon } from "@material-ui/core";

const TextViewIconBar = props => {
  return (
    <div className={props.className}>
      <span className="iconBar">
        {props.newXML ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.newXML}
          >
            <Icon fontSize="small">fiber_new</Icon>
          </IconButton>
        ) : null}
        {props.copyXML ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.copyXML}
          >
            <Icon fontSize="small">file_copy</Icon>
          </IconButton>
        ) : null}
        {props.downloadXML ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.downloadXML}
          >
            <Icon fontSize="small">cloud_download</Icon>
          </IconButton>
        ) : null}
        {props.textIndex ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.textIndex}
          >
            <Icon fontSize="small">format_align_center</Icon>
          </IconButton>
        ) : null}
        {props.textPlain ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.textPlain}
          >
            <Icon fontSize="small">format_align_justify</Icon>
          </IconButton>
        ) : null}
        {props.loadXML ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.loadXML}
          >
            <Icon fontSize="small">sync</Icon>
          </IconButton>
        ) : null}
        {props.openTextViewPopup ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.openTextViewPopup}
          >
            <Icon>fullscreen</Icon>
          </IconButton>
        ) : null}
        {props.openTreeViewPopup ? (
          <IconButton
            className="icon iconGap"
            aria-label="align center"
            size="small"
            onClick={props.openTreeViewPopup}
          >
            <Icon>fullscreen</Icon>
          </IconButton>
        ) : null}
      </span>
    </div>
  );
};

const TextViewIconBarWrapper = Styled(TextViewIconBar)`
  display: inline-block;
  background-color: #283593;
  width: 100%;
  .iconBar{
      float: right;
      margin: 6px 10px 6px 10px;
      cursor: pointer;
  }
  .iconGap{      
      margin-right: 10px;
      color: #e8eaf6;
  }
`;

export default TextViewIconBarWrapper;

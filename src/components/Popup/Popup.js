import React from "react";
import { Backdrop, Card } from "@material-ui/core";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

const preventClose = event => {
  event.stopPropagation();
};

const Popup = props => {
  const classes = useStyles();
  return (
    <Backdrop
      className={[props.className, classes.backdrop].join(" ")}
      open={props.open}
      onClick={props.closePopup}
    >
      <Card className="header">
        <div className="textViewContainer" onClick={preventClose}>
          <div className="viewContainer">{props.children}</div>
        </div>
      </Card>
    </Backdrop>
  );
};

const PopupWrapper = Styled(Popup)`
  
  .header{    
    width: ${props => props.width || "90%"};   
    height: ${props => props.height || "90%"};
    background-color: #fcfcfc;
  }
  .textViewIndent{
    margin-left: 15px;
    margin-right: 15px;    
  }
  .textViewContainer{
    width: 100%;
    height: 100%;    
    overflow: ${props => props.scroll || "scroll"};
    font-weight: 500;
    font-size: 13px;
  }
  .textViewPlain{
    margin: 10px;
  }
  .viewContainer{
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default PopupWrapper;

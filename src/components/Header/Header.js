import React from "react";
import Styled from "styled-components";
import { AppBar, Toolbar } from "@material-ui/core";
import Menus from "../Menus/Menus";
import { Data } from "../../constants/Constants";

const Header = ({ className, menuClick, menusData }) => {
  return (
    <AppBar className={className} color="secondary" position="static">
      <Toolbar className="toolbar">
        <span className="text">
          {Data.HeaderText}
          <sub className="subtext">{Data.HeaderSubText}</sub>
        </span>
        <Menus className="menus" menusData={menusData} click={menuClick} />
      </Toolbar>
    </AppBar>
  );
};

const HeaderWrapper = Styled(Header)`
  flex-grow: 0;
  .toolbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    font-weight: bold;
    font-size: 15pt;
  }
  .subtext {
    font-weight: bold;
    font-size: 8pt;
  }
  .menus {
    margin-left: 5px;
  }
`;

export default HeaderWrapper;

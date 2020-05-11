import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import Styled from "styled-components";

const TextTagContextMenu = props => {
  return (
    <Menu
      className={props.className}
      keepMounted
      onClose={props.close}
      open={props.mouseY !== null}
      anchorReference="anchorPosition"
      anchorPosition={
        props.mouseX !== null && props.mouseY !== null
          ? { top: props.mouseY, left: props.mouseX }
          : undefined
      }
    >
      <MenuItem className="menuItem" onClick={props.cdataMenuItem}>
        <input
          className="checkbox"
          type="checkbox"
          onChange={props.cdataChecked}
          checked={props.cdata}
        />
        <span className="checkboxlabel">CDATA</span>
      </MenuItem>
      <MenuItem className="menuItem" onClick={props.deleteElement}>
        Delete Element
      </MenuItem>
      <MenuItem className="menuItem" onClick={props.copyElement}>
        Copy
      </MenuItem>
    </Menu>
  );
};

const TextTagContextMenuWrapper = Styled(TextTagContextMenu)`
  .menuItem{    
    font-size: 13px;
    font-weight: 500;
  }
  .checkboxlabel{
    margin-left: 5px;
    font-size: 13px;
    font-weight: 500;
  }
  .checkbox{
    font-size: 13px;
    font-weight: 500;
  }
`;

export default TextTagContextMenuWrapper;

import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import Styled from "styled-components";

const ElementTagContextMenu = props => {
  return (
    <Menu
      className={props.className}
      keepMounted
      open={props.mouseY !== null}
      onClose={props.close}
      anchorReference="anchorPosition"
      anchorPosition={
        props.mouseX !== null && props.mouseY !== null
          ? { top: props.mouseY, left: props.mouseX }
          : undefined
      }
    >
      <MenuItem className="menuItem" onClick={props.attributesHandler}>
        Add/Update/Delete Attributes
      </MenuItem>
      <MenuItem className="menuItem" onClick={props.addElement}>
        Add Element
      </MenuItem>
      <MenuItem className="menuItem" onClick={props.addTextElement}>
        Add Text
      </MenuItem>
      <MenuItem className="menuItem" onClick={props.deleteDeepElement}>
        Delete Element
      </MenuItem>
      <MenuItem className="menuItem" onClick={props.deleteShallowElement}>
        Delete Element W/O Children
      </MenuItem>
      <MenuItem className="menuItem" onClick={props.copyElement}>
        Copy
      </MenuItem>
      {props.isElementCopied ? (
        <MenuItem className="menuItem" onClick={props.pasteElement}>
          Paste
        </MenuItem>
      ) : null}
    </Menu>
  );
};

const ElementTagContextMenuWrapper = Styled(ElementTagContextMenu)`
  .menuItem{    
    font-size: 13px;
    font-weight: 500;
  }
`;

export default ElementTagContextMenuWrapper;

import React, { useState } from "react";
import Styled from "styled-components";
import InlineEdit from "./InLineEdit";
import { Icon } from "@material-ui/core";
import { Type } from "../../constants/Constants";
import PropTypes from "prop-types";
import TextTagContextMenu from "../Menus/ContextMenu/TextTagContextMenu";
import ElementTagContextMenu from "../Menus/ContextMenu/ElementTagContextMenu";

const ElementTag = props => {
  const [coordinates, setCoordinates] = useState({
    mouseX: null,
    mouseY: null
  });

  const contextMenu = event => {
    event.preventDefault();
    setCoordinates({
      mouseX: event.clientX,
      mouseY: event.clientY
    });
  };

  const close = () => {
    setCoordinates({
      mouseX: null,
      mouseY: null
    });
  };

  let icon = <span className="emptySpan"></span>;
  let menu = (
    <TextTagContextMenu
      mouseX={coordinates.mouseX}
      mouseY={coordinates.mouseY}
      closeMenu={props.closeMenu}
      deleteElement={props.deleteDeepElement}
      cdataChecked={props.cdataChecked}
      cdataMenuItem={props.cdataMenuItem}
      copyElement={props.copyElement}
    />
  );
  if (props.self.type === Type.Element) {
    if (props.children.length > 0) {
      icon = (
        <Icon
          className="icon"
          color="primary"
          onClick={props.expandsOrCollapse}
        >
          {props.expand ? "remove_circle" : "add_circle"}
        </Icon>
      );
    }
    menu = (
      <ElementTagContextMenu
        mouseX={coordinates.mouseX}
        mouseY={coordinates.mouseY}
        closeMenu={props.closeMenu}
        addElement={props.addElement}
        addTextElement={props.addTextElement}
        deleteDeepElement={props.deleteDeepElement}
        deleteShallowElement={props.deleteShallowElement}
        isElementCopied={props.isElementCopied}
        pasteElement={props.pasteElement}
        copyElement={props.copyElement}
        attributesHandler={props.attributesHandler}
      />
    );
  }

  return (
    <div className={props.className}>
      <div className="tagContainer" onClick={close} onContextMenu={contextMenu}>
        {icon}
        <InlineEdit
          activeClassName="editing"
          text={props.name}
          parent={props.parent}
          self={props.self}
          change={props.dataChanged}
          className="inlineEdit"
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
          onDragStart={props.onDragStart}
        />
        {menu}
      </div>
      {props.expand ? props.children : null}
    </div>
  );
};

ElementTag.prototype = {
  dataChanged: PropTypes.func.isRequired,
  parent: PropTypes.object.isRequired,
  self: PropTypes.object.isRequired,
  expandsOrCollapse: PropTypes.func.isRequired,
  expands: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

const ElementTagWrapper = Styled(ElementTag)`  
  display: block;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  margin: 11px 5px 0px 10px;  
  border-left: 2px dotted #aaa;  

.tagContainer{
  display: inline;
}
.inlineEdit{
  border-radius: 2px;
  padding: 3px 6px 3px 6px;
  font-weight: 500;
  font-size: 13px;
  elevation: 10;
  box-shadow: 2px 4px 4px 0 rgba(0,0,0,0.25);
  transition: all 0.3s;
  background-color: #fff;
  outline: none;
}
.inlineEdit:hover {
  box-shadow: 4px 8px 12px 0 rgba(0,0,0,0.3);
  font-weight: 600;
}
.editing{
  padding: 2px 5px 2px 5px;  
}
.icon{
  font-size: 14px;
  margin-right: 2px;
  vertical-align: -26%
}
.emptySpan{
  margin-right: 12px
}
`;

export default ElementTagWrapper;

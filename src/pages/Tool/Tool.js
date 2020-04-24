import React, { Component } from "react";
import Styled from "styled-components";
import ToolContainer from "../../components/ToolContainer/ToolContainer";
import ElementTag from "../../components/Tag/ElementTag";
import Attribute from "../../components/AttributesSection/AttributesSection";
import LoadingBackdrop from "../../components/Backdrop/LoadingBackdrop";
import {
  Type,
  Default,
  Data,
  NewXML,
  DragDropData,
} from "../../constants/Constants";
import Popup from "../../components/Popup/Popup";
import cloneDeep from "lodash.clonedeep";
import {
  convertToXML,
  convertToIndentXML,
  getNewElement,
  deleteElement,
  deleteElementShallow,
  convertToIndentXMLForDownload,
  convertToXMLForDownload,
} from "../../util/Util";
import Help from "../../components/Help/Help";
import HelpContext from "../../context/HelpContext";
import { saveToCloud } from "../../service/ToolService";

const fileDownload = require("js-file-download");

class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openAttribute: false,
      attributeValue: {},
      XML: Default.XML,
      TreeView: null,
      TextView: null,
      view: null,
      indent: true,
      loading: false,
    };
  }

  textArea = React.createRef();
  static isCopied = false;
  static copiedElement = null;

  componentDidMount() {
    this.updateState(this.state.XML);
  }

  closeMenuHandler = () => {};

  cdataMenuItemHandler = (event) => {
    event.stopPropagation();
  };

  addElementHandler = (type, self) => {
    const element = {};
    const key = type === Type.Element ? Default.ElementName : Default.TextName;
    element[key] = getNewElement(type);
    if (
      self !== undefined &&
      self !== null &&
      self.elements !== undefined &&
      self.elements !== null
    ) {
      self.elements.push(element);
      this.updateState(this.state.XML);
    }
  };

  deleteElementShallowHandler = (parent, key, value) => {
    deleteElementShallow(parent, key, value);
    this.updateState(this.state.XML);
  };

  deleteElementDeepHandler = (parent, key, value) => {
    deleteElement(parent, key, value);
    this.updateState(this.state.XML);
  };

  cdataCheckedHandler = (value) => {
    if (value !== undefined && value !== null && value.type === Type.Text) {
      value.cdata = !value.cdata;
      this.updateState(this.state.XML);
    }
  };

  //check
  elementNameChangedHandler = (value) => {
    const { parent, newText, oldText, self } = value;
    if (parent === this.state.XML) {
      const item = {};
      item[newText] = { ...this.state.XML[oldText] };
      this.setState({ XML: item });
    } else {
      const item = parent.elements.find(
        (item) => item[oldText] !== undefined && item[oldText] === self
      );
      item[newText] = { ...item[oldText] };
      delete item[oldText];
      this.updateState(this.state.XML);
    }
  };

  expandsOrCollapseHandler = (expand, self) => {
    self.expand = !expand;
    this.updateState(this.state.XML);
  };

  onDropHandler = (event, value) => {
    event.preventDefault();
    if (value.type === Type.Text) {
      alert("Element cannot be drop to text element");
      return;
    }
    const { tagParent, tagKey, tagValue } = DragDropData;
    const element = deleteElement(tagParent, tagKey, tagValue);
    if (
      value !== undefined &&
      value !== null &&
      value.elements !== undefined &&
      value.elements !== null &&
      element !== null
    ) {
      value.elements.push(element);
      this.updateState(this.state.XML);
    }
    DragDropData.tagParent = {};
    DragDropData.tagKey = "";
    DragDropData.tagValue = {};
  };

  onDragOverHandler = (event) => {
    event.preventDefault();
  };

  onDragStartHandler = (parent, key, value) => {
    DragDropData.tagParent = parent;
    DragDropData.tagKey = key;
    DragDropData.tagValue = value;
  };

  copyElementHandler = (key, value) => {
    value = cloneDeep(value);
    this.copiedElement = {};
    this.copiedElement[key] = value;
    this.isCopied = true;
    const TreeView = this.prepareTreeView(this.state.XML, this.state.XML);
    this.setState({ TreeView });
  };

  pasteElementHandler = (value) => {
    if (
      value !== undefined &&
      value !== null &&
      value.elements !== undefined &&
      value.elements !== null &&
      this.copiedElement !== null
    ) {
      this.isCopied = false;
      value.elements.push(this.copiedElement);
      this.copiedElement = null;
      this.updateState(this.state.XML);
    }
  };

  onAttributeValueChangeHandler = (event, attributes, key, value) => {
    if (event !== null && event.target !== undefined && event.target !== null) {
      attributes[key] = event.target.value;
    } else {
      attributes[key] = value;
    }
    this.updateAttributes(attributes);
  };

  onDeleteAttributeHandler = (attributes, key) => {
    delete attributes[key];
    this.updateAttributes(attributes);
  };

  updateAttributes = (attributes) => {
    const TextView = this.state.indent
      ? convertToIndentXML(this.state.XML, "")
      : convertToXML(this.state.XML, []);
    this.setState({ TextView, attributeValue: attributes });
  };

  openAttributePopupHandler = (value) => {
    if (value.attributes === undefined || value.attributes === null) {
      value.attributes = {};
    }
    this.setState({ openAttribute: true, attributeValue: value.attributes });
  };

  closeAttributePopupHandler = () => {
    this.setState({ openAttribute: false });
  };

  prepareTreeView = (data, parent) => {
    return Object.entries(data).map(([key, value]) => {
      return (
        <ElementTag
          dataChanged={this.elementNameChangedHandler}
          key={value}
          parent={parent}
          self={value}
          closeMenu={this.closeMenuHandler}
          cdataChecked={this.cdataCheckedHandler.bind(this, value)}
          addElement={this.addElementHandler.bind(this, Type.Element, value)}
          addTextElement={this.addElementHandler.bind(this, Type.Text, value)}
          deleteDeepElement={this.deleteElementDeepHandler.bind(
            this,
            parent,
            key,
            value
          )}
          deleteShallowElement={this.deleteElementShallowHandler.bind(
            this,
            parent,
            key,
            value
          )}
          expandsOrCollapse={this.expandsOrCollapseHandler.bind(
            this,
            value.expand,
            value
          )}
          attributesHandler={this.openAttributePopupHandler.bind(this, value)}
          onDrop={(event) => this.onDropHandler(event, value)}
          onDragOver={this.onDragOverHandler}
          onDragStart={this.onDragStartHandler.bind(this, parent, key, value)}
          copyElement={this.copyElementHandler.bind(this, key, value)}
          pasteElement={this.pasteElementHandler.bind(this, value)}
          isElementCopied={this.isCopied}
          cdataMenuItem={this.cdataMenuItemHandlerHandler}
          expand={value.expand}
          name={key}
        >
          {value.type === Type.Element
            ? value.elements.map((item) => this.prepareTreeView(item, value))
            : null}
        </ElementTag>
      );
    });
  };

  textIndentHandler = () => {
    const TextView = convertToIndentXML(this.state.XML, "");
    this.setState({ TextView, indent: true });
  };

  textPlainHandler = () => {
    const TextView = convertToXML(this.state.XML, []);
    this.setState({ TextView, indent: false });
  };

  openPopupHandler = (type) => {
    this.setState({ open: true, view: type });
  };

  closePopupHandler = () => {
    this.setState({ open: false });
  };

  loadXMLHandler = (xmlText) => {
    const parent = {};
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    if (xmlDoc !== null && xmlDoc.firstChild !== null) {
      parent[xmlDoc.firstChild.nodeName] = {
        type: Type.Element,
        expand: true,
        elements: [],
      };
    } else {
      // alert(errorParsingXml);
    }
  };

  /*downloadXMLHandler = () => {
    let text = null;
    if (this.state.indent) {
      text = convertToIndentXMLForDownload(this.state.XML, [], "");
    } else {
      text = convertToXMLForDownload(this.state.XML, []);
    }
    fileDownload(text.join(""), Data.FileName);
  };*/

  downloadXMLHandler = () => {
    this.openLoadingHandler();
    const text = convertToXMLForDownload(this.state.XML, []);
    saveToCloud(text);
  };

  closeLoadingHandler = () => {
    this.setState({ loading: false });
  };

  openLoadingHandler = () => {
    this.setState({ loading: true });
  };

  newXMLHandler = () => {
    this.updateState(NewXML);
  };

  copyXMLHandler = () => {
    let text = null;
    if (this.state.indent) {
      text = convertToIndentXMLForDownload(this.state.XML, [], "");
    } else {
      text = convertToXMLForDownload(this.state.XML, []);
    }
    this.textArea.current.value = text.join("");
    this.textArea.current.select();
    document.execCommand("copy");
    this.setState({ copySuccess: true });
  };

  updateState = (state) => {
    const TreeView = this.prepareTreeView(state, state);
    const TextView = convertToIndentXML(state, "");
    this.setState({
      XML: { ...state },
      TreeView,
      TextView,
      view: TreeView,
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <ToolContainer
          gridClassName="TreeView"
          newXML={this.newXMLHandler}
          openTreeViewPopup={this.openPopupHandler.bind(this, Data.TreeView)}
        >
          {this.state.TreeView}
        </ToolContainer>
        <ToolContainer
          gridClassName="TextView"
          downloadXML={this.downloadXMLHandler}
          copyXML={this.copyXMLHandler}
          textIndex={this.textIndentHandler}
          textPlain={this.textPlainHandler}
          loadXML={this.loadXMLHandler}
          openTextViewPopup={this.openPopupHandler.bind(this, Data.TextView)}
        >
          {this.state.TextView}
        </ToolContainer>
        <Popup open={this.state.open} closePopup={this.closePopupHandler}>
          {this.state.view === Data.TextView
            ? this.state.TextView
            : this.state.TreeView}
        </Popup>
        <Popup
          width="35%"
          height="80%"
          scroll="auto"
          open={this.state.openAttribute}
          closePopup={this.closeAttributePopupHandler}
        >
          <Attribute
            value={this.state.attributeValue}
            onDeleteAttributeHandler={this.onDeleteAttributeHandler}
            onAttributeValueChangeHandler={this.onAttributeValueChangeHandler}
          />
        </Popup>
        <textarea type="text" ref={this.textArea} value="" />
        <HelpContext.Consumer>
          {(value) => (
            <Popup open={value} closePopup={this.props.closeHelpPopup}>
              <Help />
            </Popup>
          )}
        </HelpContext.Consumer>
        <LoadingBackdrop
          open={this.state.loading}
          close={this.closeLoadingHandler}
        />
      </div>
    );
  }
}

const ToolWrapper = Styled(Tool)`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  margin: 10px 0px 10px 0px;
  .TreeView{
    width: 49%;
    margin-right: 5px;
    margin-left: 8px;
  }
  .TextView{
    width: 49%;
    margin-right: 8px;
    margin-left: 5px;
  }  
`;

export default ToolWrapper;

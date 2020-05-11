import React from "react";
import parser from 'fast-xml-parser';
import { Type, Default } from "../constants/Constants";

const getAttributesString = attributes => {
  if (attributes !== undefined && attributes !== null) {
    const attr = Object.entries(attributes).map(([key, value]) => {
      return key + '="' + value + '"';
    });
    if(attr.length > 0){
      return " " + attr.join(" ");
    }
  }
  return "";
};

export const convertToXML = (data, xml) => {
  Object.entries(data).map(([key, value]) => {
    if (value.type === Type.Element) {
      xml.push("<" + key + getAttributesString(value.attributes) + ">");
      value.elements.map(item => convertToXML(item, xml));
      xml.push("</" + key + ">");
    } else {
      if (value.cdata) {
        xml.push("<![CDATA[" + key + "]]>");
      } else {
        xml.push(key);
      }
    }
    return xml;
  });
  return <div className="textViewPlain">{xml}</div>;
};

export const convertToIndentXML = (data, index) => {
  let xml = [];
  return Object.entries(data).map(([key, value], i) => {
    index = index + i;
    if (value.type === Type.Element) {
      xml.push("<" + key + getAttributesString(value.attributes) + ">");
      xml.push(value.elements.map(item => convertToIndentXML(item, index)));
      xml.push("</" + key + ">");
    } else {
      if (value.cdata) {
        xml.push("<![CDATA[" + key + "]]>");
      } else {
        xml.push(key);
      }
    }
    return (
      <div key={index} className="textViewIndent">
        {xml}
      </div>
    );
  });
};

export const convertToIndentXMLForDownload = (data, xml, indent) => {
  Object.entries(data).map(([key, value]) => {
    if (value.type === Type.Element) {
      xml.push(
        indent + "<" + key + getAttributesString(value.attributes) + ">\n"
      );
      value.elements.map(item =>
        convertToIndentXMLForDownload(item, xml, indent + Default.Tab)
      );
      xml.push(indent + "</" + key + ">\n");
    } else {
      if (value.cdata) {
        xml.push(indent + "<![CDATA[" + key + "]]>");
      } else {
        xml.push(indent + key);
      }
      xml.push("\n");
    }
    return xml;
  });
  return xml;
};

export const convertToXMLForDownload = (data, xml) => {
  Object.entries(data).map(([key, value]) => {
    if (value.type === Type.Element) {
      xml.push("<" + key + getAttributesString(value.attributes) + ">");
      value.elements.map(item => convertToXMLForDownload(item, xml));
      xml.push("</" + key + ">");
    } else {
      if (value.cdata) {
        xml.push("<![CDATA[" + key + "]]>");
      } else {
        xml.push(key);
      }
    }
    return xml;
  });
  return xml;
};

export const clipTagName = text => {
  if (text.length > Default.MaxTagLength) {
    return text.substring(0, Default.MaxTagLength) + "...";
  }
  return text;
};

export const findElementIndex = (parent, key, value) => {
  let index = -1;
  if (
    parent !== undefined &&
    parent !== null &&
    parent.elements !== undefined &&
    parent.elements !== null
  ) {
    index = parent.elements.findIndex(
      element => element[key] !== null && element[key] === value
    );
  }
  return index;
};

export const getNewElement = type => {
  if (type === Type.Element) {
    return { type: Type.Element, expand: true, elements: [] };
  } else {
    return { type: Type.Text, expand: true, cdata: false };
  }
};

export const isRootElement = function(parent, key, value) {
  if (parent !== undefined && parent !== null) {
    if (parent[key] === value) {
      return true;
    }
  }
  return false;
};

export const deleteElement = (parent, key, value) => {
  if (isRootElement(parent, key, value)) {
    alert("Root element cannot be deleted");
    return;
  }
  const index = findElementIndex(parent, key, value);
  let element = null;
  if (index !== -1) {
    element = parent.elements[index];
    parent.elements.splice(index, 1);
  }
  return element;
};

export const deleteElementShallow = (parent, key, value) => {
  if (isRootElement(parent, key, value)) {
    alert("Root element cannot be deleted");
    return;
  }
  if (value.type === Type.Element) {
    let index = findElementIndex(parent, key, value);
    if (index !== -1) {
      if (
        parent.elements[index] !== undefined &&
        parent.elements[index] !== null
      ) {
        const elements = parent.elements[index][key].elements;
        parent.elements.splice(index, 1);
        for (let i in elements) {
          parent.elements.splice(index++, 0, elements[i]);
        }
      }
    }
  }
};

export const loadXML = (xmlString) => {
  if(parser.validate(xmlString) !== true) {
    return null
  }
  const parent = {};
  const domParser = new DOMParser();
  const xmlDoc = domParser.parseFromString(xmlString, "text/xml");
  if (xmlDoc !== null && xmlDoc.firstChild !== null) {
    const attri = getAttributes(xmlDoc.firstChild.attributes)
    const name = xmlDoc.firstChild.nodeName;
    parent[name] = {
      type: Type.Element,
      expand: true,
      attributes: attri,
      elements: [],
    }
    traverseXMLElements(xmlDoc.firstChild.childNodes, parent[name].elements)
    return parent
  } else {
    return null
  }
}

const traverseXMLElements = (nodeList, parent) => {
  for(let node = 0; node < nodeList.length; node++){
    const element = nodeList[node]
    if(element.nodeName === '#text' || element.nodeName === '#cdata-section'){
      if(element.nodeValue.trim().length > 0){
        const cdata = element.nodeName === '#cdata-section'
        const obj = {
          [element.nodeValue]: {
            type: Type.Text,
            expand: true,
            cdata
          }
        }
        parent.push(obj)
      }
    }else {
      const attri = getAttributes(element.attributes)
      const obj = {
        [element.nodeName]: {
          type: Type.Element,
          expand: true,
          attributes: attri,
          elements: [],
        }
      }
      parent.push(obj)
      if(element.childNodes.length > 0){
        traverseXMLElements(element.childNodes, obj[element.nodeName].elements)
      }
    }
  }
}

const getAttributes = (attributes) => {
  const attri = {}
  Object.values(attributes).map((value) => {
    attri[value.nodeName] = value.nodeValue
    return value
  })
  return attri
}
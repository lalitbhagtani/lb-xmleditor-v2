import React from "react";
import Styled from "styled-components";

const HelpSection = (props) => {
  return (
    <div className={props.className}>
      XML stands for Extensible Markup Language. It is an open source, language
      independent, human readable, data-interchange format. It was designed to
      store and transport data. It is most commonly used for communication
      between two application running on different servers. These application
      can be written on same technology or can be written on different
      technology. It is comprise of tags ( start tag and end tag ) and data is
      stored inside those tags.
      <h2>XML Editor V2</h2>
      XML editor ( XML Viewer ) is an online web-based tool, designed to create,
      view, format, edit, save and share xml file. This tool provides multiple
      features which will help you, to create simple and complex xml easily. A
      list of all its features and functionality are as follows :-
      <h3>Tree View</h3>
      Tree view display's your working xml in a hierarchical model, you can
      select any node to view or edit it's value. It can be
      expanded or collapsed by clicking icon button on a right hand side of the node.
      <h3>Text View</h3>
      Text view will show your working xml in the text format. It can be
      minify or pretty print by clicking respective icon button on a icon's bar.
      <h3>Add Element</h3>
      Select the element under which you like to add new element, then right click to open the context menu. 
      Click <strong>Add Element</strong>, this will create new element node under the selected node.
      <h3>Add Text</h3>
      Select the element under which you like to add new text, then right click to open the context menu. 
      Click <strong>Add Text</strong>, this will create new text node under the selected node.
      <h3>Delete Element</h3>
      To delete a node ( element or text ) from xml viewer. Select the element or text node which you like to delete,
      then right click to open the context menu. Click <strong>Delete Element</strong>, this will delete the element along with its all child nodes.
      <h3>Delete Element W/O Children</h3>
      To delete a node ( element or text without its childrens ) from xml viewer. Select the element or text node which you like to delete,
      then right click to open the context menu. Click <strong>Delete Element W/O Children</strong>, 
      this will delete the element and its child nodes will become the childrens of the deleted element's parent.
      <h3>Download</h3>
      You can download your existing work, which you have created using xml
      editor ( xml viewer ) tool. To use this functionality, click download
      button on a navigation bar, this will download a file onto your system.
      <h3>Load</h3>
      To load your xml file into the tool, click load icon button on a navigation bar
      and then copy and paste your xml file content into the text area and click load xml button.
      <h3>New</h3>
      Click the new button on the navigation bar to remove your existing work
      from the xml editor ( xml viewer ) tool, So that you can start you
      development from the scratch.
      <h3>Copy &amp; Paste</h3>
      You can copy and paste any node into another based on following two rules
      :-
      <ol>
        <li>Text cannot have a child node.</li>
        <li>Element can have Text or Element as a child.</li>
      </ol>
      To use <strong>Copy &amp; Paste</strong> functionality, first select the node which you
      like to copy, then right click to open the context menu. Click <strong>Copy</strong>, 
      this will copy the selected node along with its childrens. 
      Now select the node under which you want to copy your previous selection, 
      then right click to open the context menu. Click <strong>Paste</strong>, 
      this will copy your previously selected node inside new one. This Copy
      &amp; Paste functionality is very useful, when you want add a new node,
      which is similar to one of the existing node.
      <h3>Cut &amp; Paste</h3>
      You can cut and paste any node into another based on following two rules
      :-
      <ol>
        <li>Text cannot have a child node.</li>
        <li>Element can have Text or Element as a child.</li>
      </ol>
      To use <strong>Cut &amp; Paste</strong> functionality, drag the node which you
      like to cut and drop it on the node under which you want to paste.
      <h3>Save Online</h3>
      You can use save online functionality to save and share your work. To use
      this save functionality, click a save online button on the navigation bar.
      This will save your work on a server and provide you a url with unique id,
      this url can be used to view, edit and share your saved work with your
      colleagues.
      <h3>Minify</h3>
      Minify feature is used to minify your existing work present in the text
      view. This feature can be used as a standalone, when your requirement is
      just to minify your work. To use this feature, copy and paste your work in
      the code editor and click a minify icon button on the bar.
      <h3>Pretty Print</h3>
      Pretty Print feature is used to pretty print your existing work in text
      view. This feature can be used as a standalone, when your requirement is
      just to pretty print your work. To use this feature, copy and paste your
      work in the code editor and click the pretty print icon button on the
      bar.
    </div>
  );
};

const HelpSectionStyled = Styled(HelpSection)`
  margin: 15px;
  font-size: 1.2em;
`;

export default HelpSectionStyled;

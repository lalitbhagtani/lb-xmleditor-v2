import React from "react";
import Styled from "styled-components";

const Help = (props) => {
  return (
    <div className={props.className}>
      XML stands for Extensible Markup Language. It is an open source, language
      independent, human readable, data-interchange format. It was designed to
      store and transport data. It is most commonly used for communication
      between two application running on different servers. These application
      can be written on same technology or can be written on different
      technology. It is comprise of tags ( start tag and end tag ) and data is
      stored inside those tags.
      <h3>XML Editor</h3>
      XML editor ( XML Viewer ) is an online web-based tool, designed to create,
      view, format, edit, save and share xml file. This tool provides multiple
      features which will help you, to create simple and complex xml easily. A
      list of all its features and functionality are as follows :-
      <h4>Add Element</h4>
      To add new element, first select the element node under which you like to
      add new element, then click the Add Element icon on a right side of the
      bar, once you click this icon, new element will be added to the selected
      node.
      <h4>Add Text</h4>
      To add new text, first select the element node under which you like to add
      new text, then click the Add Text icon on the right side of the bar, once
      you click this icon, new text will be added to the selected node.
      <h4>Tree View</h4>
      Tree view will show your working xml in a hierarchical model, you can
      select any node in the model to view or edit it's value. It can be
      expanded by clicking expand image button on a right hand side of bar.
      <h4>Text View</h4>
      Text view is like a code editor, this will show your working xml in the
      text format. You can edit your work in the code editor and can also load
      this to xml editor ( xml viewer ) by clicking load image button. It can be
      expanded by clicking expand image button on a right hand side of the bar.
      <h4>Download</h4>
      You can download your existing work, which you have created using xml
      editor ( xml viewer ) tool. To use this functionality, click download
      button on a navigation bar, this will download a file onto your system.
      <h4>Load</h4>
      To load any of your xml file into the tool, first copy and paste your
      existing work into the text view and then click load image button on the
      bar.
      <h4>New</h4>
      Click the new button on the navigation bar to remove your existing work
      from the xml editor ( xml viewer ) tool, So that you can start you
      development from the scratch.
      <h4>Copy &amp; Paste</h4>
      You can copy and paste any node into another based on following two rules
      :-
      <ol>
        <li>Text cannot have a child node.</li>
        <li>Element can have Text or Element as a child.</li>
      </ol>
      To use Copy &amp; Paste functionality, first select the node which you
      like to copy, then click the copy and paste icon on its bar and finally
      select the node inside which you want to copy your previous selection.
      This will copy your previously selected node inside new one. This Copy
      &amp; Paste functionality is very useful, when you want add a new node,
      which is similar to one of the existing node.
      <h4>Delete</h4>
      You can delete any node ( element or text ) from xml viewer. To use this
      delete functionality, first select the node which you want to delete, then
      click the delete icon on the right side of the bar, once you click a
      delete icon an confirm dialog will be displayed, asking your confirmation
      for delete. Confirm dialog will contain two buttons <strong>
        Ok
      </strong>{" "}
      and <strong>Cancel</strong>, click <strong>OK</strong> to delete or click{" "}
      <strong>Cancel</strong> to leave it.
      <h4>Save Online</h4>
      You can use save online functionality to save and share your work. To use
      this save functionality, click a save online button on the navigation bar.
      This will save your work on a server and provide you a url with unique id,
      this url can be used to view, edit and share your saved work with your
      colleagues.
      <h4>Minify</h4>
      Minify feature is used to minify your existing work present in the text
      view. This feature can be used as a standalone, when your requirement is
      just to minify your work. To use this feature, copy and paste your work in
      the code editor and click a minify image button on the bar.
      <h4>Pretty Print</h4>
      Pretty Print feature is used to pretty print your existing work in text
      view. This feature can be used as a standalone, when your requirement is
      just to pretty print your work. To use this feature, copy and paste your
      work in the code editor and click the pretty print image button on the
      bar.
    </div>
  );
};

const HelpStyled = Styled(Help)`
  margin: 15px;
  font-size: 1em;
`;

export default HelpStyled;

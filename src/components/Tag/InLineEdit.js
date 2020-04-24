import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { clipTagName } from "../../util/Util";

function selectInputText(element) {
  element.setSelectionRange(0, element.value.length);
}

class InlineEdit extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    parent: PropTypes.object.isRequired,
    self: PropTypes.object.isRequired,
    onDrop: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired,

    activeClassName: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    validate: PropTypes.func,

    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    editingElement: PropTypes.string,
    staticElement: PropTypes.string,
    tabIndex: PropTypes.number,
    isDisabled: PropTypes.bool,
    editing: PropTypes.bool,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    minLength: 1,
    maxLength: 256,
    editingElement: "input",
    staticElement: "span",
    tabIndex: 0,
    isDisabled: false,
    editing: false,
    placeholder: "Empty"
  };

  state = {
    editing: this.props.editing,
    text: this.props.text,
    minLength: this.props.minLength,
    maxLength: this.props.maxLength
  };

  componentWillReceiveProps(nextProps) {
    const isTextChanged = nextProps.text !== this.props.text;
    const isEditingChanged = nextProps.editing !== this.props.editing;
    let nextState = {};
    if (isTextChanged) {
      nextState.text = nextProps.text;
    }
    if (isEditingChanged) {
      nextState.editing = nextProps.editing;
    }
    if (isTextChanged || isEditingChanged) {
      this.setState(nextState);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.self !== this.props.self || nextState.editing) {
      return true;
    }
    if (nextState.editing === !this.state.editing) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    let inputElem = ReactDOM.findDOMNode(this.refs.input);
    if (this.state.editing && !prevState.editing) {
      inputElem.focus();
      selectInputText(inputElem);
    } else if (this.state.editing && prevProps.text !== this.props.text) {
      this.finishEditing();
    }
  }

  startEditing = e => {
    if (this.props.stopPropagation) {
      e.stopPropagation();
    }
    this.setState({ editing: true, text: this.props.text });
  };

  finishEditing = () => {
    if (
      this.isInputValid(this.state.text) &&
      this.props.text !== this.state.text
    ) {
      this.commitEditing();
    } else if (
      this.props.text === this.state.text ||
      !this.isInputValid(this.state.text)
    ) {
      this.cancelEditing();
    }
  };

  cancelEditing = () => {
    this.setState({ editing: false, text: this.props.text });
  };

  commitEditing = () => {
    this.setState({ editing: false, text: this.state.text });
    let newProp = {};
    newProp["newText"] = this.state.text;
    newProp["oldText"] = this.props.text;
    newProp["self"] = this.props.self;
    newProp["parent"] = this.props.parent;
    this.props.change(newProp);
  };

  clickWhenEditing = e => {
    if (this.props.stopPropagation) {
      e.stopPropagation();
    }
  };

  isInputValid = text => {
    return true; //text.length >= this.state.minLength && text.length <= this.state.maxLength
  };

  keyDown = event => {
    if (event.keyCode === 13) {
      this.finishEditing();
    } else if (event.keyCode === 27) {
      this.cancelEditing();
    }
  };

  textChanged = event => {
    this.setState({
      text: event.target.value.trim()
    });
  };

  render() {
    if (this.props.isDisabled) {
      const Element = this.props.staticElement;
      return (
        <Element
          draggable
          ondrop={this.props.onDrop}
          ondragover={this.props.onDragOver}
          ondragstart={this.props.onDragStart}
          className={this.props.className}
          style={this.props.style}
        >
          {clipTagName(this.state.text) || this.props.placeholder}
        </Element>
      );
    } else if (!this.state.editing) {
      const Element = this.props.staticElement;
      return (
        <Element
          draggable
          onDrop={this.props.onDrop}
          onDragOver={this.props.onDragOver}
          onDragStart={this.props.onDragStart}
          className={this.props.className}
          onClick={this.startEditing}
          tabIndex={this.props.tabIndex}
          style={this.props.style}
        >
          {clipTagName(this.state.text) || this.props.placeholder}
        </Element>
      );
    } else {
      const Element = this.props.editingElement;
      return (
        <Element
          onClick={this.clickWhenEditing}
          onKeyDown={this.keyDown}
          onBlur={this.finishEditing}
          className={this.props.activeClassName}
          placeholder={this.props.placeholder}
          defaultValue={this.state.text}
          onChange={this.textChanged}
          style={this.props.style}
          ref="input"
        />
      );
    }
  }
}

export default InlineEdit;

const HelpReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_HELP":
      return true;
    case "CLOSE_HELP":
      return false;
    default:
      return false;
  }
}

export default HelpReducer

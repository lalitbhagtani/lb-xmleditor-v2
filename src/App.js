import React from "react";
import Styled from "styled-components";
import Header from "./components/Header/Header";
import Tool from "./pages/Tool/Tool";
import { MenusData } from "./constants/Constants";
import { menuRoutes } from "./util/MenuRoutes";
import HelpText from "./context/HelpContext";

const App = (props) => {
  const [openHelp, setOpenHelp] = React.useState(false);

  const closeHelpPopupHandler = () => {
    setOpenHelp(false);
  };
  const openHelpPopupHandler = () => {
    setOpenHelp(true);
  };
  const menuClick = { ...menuRoutes, Help: openHelpPopupHandler };
  return (
    <div className={props.className}>
      <HelpText.Provider value={openHelp}>
        <Header menuClick={menuClick} menusData={MenusData} />
        <Tool closeHelpPopup={closeHelpPopupHandler} />
      </HelpText.Provider>
    </div>
  );
};

const AppWrapper = Styled(App)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
`;

export default AppWrapper;

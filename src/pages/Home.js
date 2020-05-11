import React from "react";
import Styled from "styled-components";
import Header from "../components/Header/Header";
import Tool from "./Tool";
import { MenusData } from "../constants/Constants";
import { menuRoutes } from "../util/MenuRoutes";
import { connect } from 'react-redux';
import queryString from 'query-string'
import { DownloadFromCloud } from '../service/ToolService'

const Home = (props) => {

  const [loading, setLoading] = React.useState(false)
  const [xmlData, setXMLData] = React.useState("")
  React.useEffect(() => {
    if (props.location.search) {
        const values = queryString.parse(props.location.search)
        if (values.id) {
            setLoading(true)
            DownloadFromCloud(values.id, setXMLData, setLoading)
        }
    }
  }, [])
  
  const openHelpPopupHandler = () => {
    props.sendAction("OPEN_HELP")
  };
  const menuClick = { ...menuRoutes, Help: openHelpPopupHandler };
  return (
      <div className={props.className}>
          <Header menuClick={menuClick} menusData={MenusData} />
          <Tool xmlData={xmlData} loading={loading}/>
      </div>
  );
};

const HomeWrapper = Styled(Home)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
  .menu{
    height: 40px
  }
`;

const mapDispatchToProps = dispatch => ({
  sendAction: (type, data) => dispatch({ type: type, data: data })
})

export default connect(null, mapDispatchToProps)(HomeWrapper)
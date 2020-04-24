import axios from "./AxiosConfig";

const saveToCloud = (xmlData, setState) => {
  //setState({ loading: true });
  axios
    .put("xml", xmlData)
    .then((response) => {
      if (response.data !== null && response.data !== undefined) {
        console.log(response);
      }
      //setState({ loading: false });
    })
    .catch((error) => {
      // setState({ loading: false });
    });
};

export { saveToCloud };

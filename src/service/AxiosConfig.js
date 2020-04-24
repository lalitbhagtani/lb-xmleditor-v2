import axios from "axios";

const instance = axios.create({
  baseURL: "http://json-editor-backend.appspot.com/rest/",
});

export default instance;

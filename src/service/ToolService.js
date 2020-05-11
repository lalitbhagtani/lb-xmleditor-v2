import db from "./FirebaseConfig";
import History from '../util/History'
import { Routes } from '../constants/Constants'

const saveToCloud = (xmlData, closeLoadingHandler) => {
  db.collection("xml").add({
    data: xmlData
  })
  .then(result => {
    console.log("Document written with ID: ", result.id);
    History.push(Routes.BASE_URL+"?id="+result.id)
    closeLoadingHandler()
  })
  .catch(error => {
    alert("Error in saving your XML")
    closeLoadingHandler()
  });
};

const DownloadFromCloud = (id, setXMLData, setLoading) => {
  db.collection("xml").doc(id).get()
  .then(result => {
    if(result.exists){
      const data = result.data().data
      if(data && data.trim().length > 0){
        setXMLData(data)
      }
    }
    setLoading(false)
  })
  .catch(error => {
    alert("Error in retrieving your XML")
    setXMLData("")
    setLoading(false)
  });
};

export { saveToCloud, DownloadFromCloud };

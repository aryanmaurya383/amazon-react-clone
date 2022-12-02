import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-react-clone-616b4.cloudfunctions.net/api"
    //  "http://127.0.0.1:5001/react-clone-616b4/us-central1/api"
    //The API(cloud function) URL
});

export default instance;
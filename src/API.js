import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  receiveSearchResults (searchTerm) {
    axios.get(`/api/places/search?q=${searchTerm}`)
      .then((res) => {
        ServerActions.receiveSearchResults(res.data.results);
      })
      .catch((err) => {
        console.log('ERROR! API.receiveSearchResults', err);
      });
  }
};

export default API;

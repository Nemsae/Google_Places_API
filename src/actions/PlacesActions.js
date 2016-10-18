import API from '../API';

const PlacesActions = {
  sendSearch (searchTerm) {
    API.receiveSearchResults(searchTerm);
  }
};

export default PlacesActions;

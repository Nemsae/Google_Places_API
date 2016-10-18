import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveSearchResults (placeResults) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_PLACE_RESULTS',
      payload: { placeResults }
    });
  }
};
export default ServerActions;

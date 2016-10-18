import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _placesResults = [];

class AnimeStore extends EventEmitter {
  constructor () {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {
        case 'RECEIVE_PLACE_RESULTS': {
          let { placeResults } = action.payload;
          _placesResults = placeResults;
          this.emit('CHANGE');
        } break;
      }
    });
  }

  startListening (cb) {
    this.on('CHANGE', cb);
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb);
  }

  getPlacesResults () {
    return _placesResults;
  }
}

export default new AnimeStore();

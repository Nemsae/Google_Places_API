import React, { Component } from 'react';
// import PlacesActions from '../actions/PlacesActions';
// import SearchResults from './SearchResults';
import PlacesStore from '../stores/PlacesStore';

export default class SearchPage extends Component {
  constructor () {
    super();

    this.state = {
      placesResult: PlacesStore.getPlacesResults()
    };

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    PlacesStore.startListening(this._onChange);
  }

  componentWillUnmount () {
    PlacesStore.stopListening(this._onChange);
  }

  _onChange () {
    this.setState({
      placesResult: PlacesStore.getPlacesResults()
    });
  }

  render () {
    let { placesResult } = this.state;
    console.log('placesResult: ', placesResult);
    return (
      <div>

      {/* <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.7290258,-73.98712069999999&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.7290258,-73.98712069999999&key=AIzaSyCIipCvL_8JdRDVXS93O5GUb10CxZwVjPw" /> */}
        {
          placesResult.map((place, i) => {
            console.log(place.geometry.location.lat, place.geometry.location.lng);
            return (
              <div className='col-xs-4' key={i}>
                <h3><img className='icon' src={place.icon} />{place.name}</h3>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${place.geometry.location.lat},${place.geometry.location.lng}&zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${place.geometry.location.lat},${place.geometry.location.lng}`} />
                <h4>Rating: {place.rating}</h4>
                <h5>Address: {place.formatted_address}</h5>
                <h5>Type: {place.types.map((type) => {
                  let newType = type.split('_').join(' ');
                  return `${newType}, `;
                }
                )}
                </h5>
                {/* {place.photos ? place.photos[0].html_attributions[0] : ''} */}
              </div>
            );
          })
        }
      </div>
    );
  }
}

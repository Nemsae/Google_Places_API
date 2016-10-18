import React, { Component } from 'react';
import PlacesActions from '../actions/PlacesActions';
import SearchResults from './SearchResults';
// import API from '../API';

export default class SearchPage extends Component {
  constructor () {
    super();
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch (e) {
    e.preventDefault();
    let {searchInput} = this.refs;
    let searchTerm = searchInput.value;
    let search = searchTerm.split(' ').join('+');
    console.log('search: ', search);
    PlacesActions.sendSearch(search);
  }

  render () {
    return (
      <div className='text-center'>
        <h1>Find G. Places</h1>
        <form onSubmit={this.submitSearch} >
          <input ref='searchInput' type='text' className='form-control searchBar' />
          <button className='btn btn-primary' >Search</button>
        </form>
        <SearchResults />
      </div>
    );
  }
}

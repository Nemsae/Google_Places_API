import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render () {
    return (
      <div>
        <div className='navbar navbar-inverse navbar-fixed-left'>
          <ul className='nav navbar-nav'>
            <li>My Places</li>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/search'>Search</Link></li>
            {/* <li><Link className='link' to='/favorites'>Favorites</Link><img className='linkImg' src={stickers.favorites} /></li>
            <li><Link className='link' to='/watchList'>WatchList</Link><img className='linkImg' src={stickers.watchlist} /></li> */}
          </ul>
        </div>
        <div className='container'>
          <div>
            {this.props.children}
          </div>
        </div>

      </div>
    );
  }
}

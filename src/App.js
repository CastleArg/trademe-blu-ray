import React, { Component } from 'react';
import './App.css';
import MovieComponent from './movie-component';
import SearchComponent from './search-component';

class App extends Component {
  state = {
    movies: [],
  }

  setSearchTerm = (newTerm) => {
    fetch(`https://api.trademe.co.nz/v1/bluray/find.json?search=${newTerm}`)
    .then(response => response.json())
    .then(json => this.setState({ movies: json.List }))
  }

  render() {
    return (
      <div className="App">    
        <SearchComponent searchInputChanged={this.setSearchTerm}/>
        {this.state.movies.length == 0 && <div>please search for a movie</div>}
        {this.state.movies.length > 0 && this.state.movies.map(movie => <MovieComponent movie={movie}/>)}
      </div>
    );
  }
}

export default App;

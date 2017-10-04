import React, { Component } from 'react';
import './App.css';
import ShowListing from './ShowListing';

class App extends Component {

  constructor() {
    super();
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
      // AJAX Request 
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5000/api/shows");
    xhr.addEventListener('load', () => {
      if(xhr.status !== 200) return;
      this.setState((prevState) => {
        return {
           shows: JSON.parse(xhr.response)
        }
      })
    });

    xhr.send();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Shows</h1>
        </header>
        <section>
          <ShowListing shows={this.state.shows}/>
        </section>
      </div>
    );
  }
}

export default App;

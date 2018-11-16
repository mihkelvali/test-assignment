import React, { Component } from 'react';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import './App.css';
import Search from './components/search';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar />
            <main className='container'>
                <Search />
            </main>
        </React.Fragment>
    );
  }
}

export default App;

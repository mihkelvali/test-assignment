import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Search from './components/Search';

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

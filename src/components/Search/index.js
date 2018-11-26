import React, {Component} from 'react';
import pin from '../../icons/ic-pin.svg';
import './styles.css';
import Suggestions from '../Suggestions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherSuggestions: [],
            isLoaded: false,
            query: '',
        }
    }

    getData = () => {
        const apiCall = 'http://internship-proxy.aw.ee:3001/location?query=' + this.state.query;
        fetch(apiCall).then(response => response.json())
            .then(data => {
            this.setState ({
                isLoaded: true,
                weatherSuggestions: data,
            })
        });
    };

    handleOnKeyUp = (e) => {
        this.setState({query: e.target.value}, () => {
            this.getData();
        });
        if (this.state.query !== '') {
            const x = document.getElementById('ns');
            x.style.display = 'block';
        }
    };

    /*handleClick = () => {
        if (this.state.query === '') {
            const x = document.getElementById('ns');
            x.style.display = 'block';
        }
        this.setState({
            weatherSuggestions: []
        });

    };

    handleFocus = () => {
        this.setState({query: ''}, () => {
            this.getData();
        });
    };*/

    render() {
        return (
            <React.Fragment>
                <div className="center">
                    <img src={pin} alt="icon"/>
                    <p id="ns">Search location...</p>
                    <input type="search" ref={input => this.search = input}  placeholder="Search location.." onFocus={this.handleFocus} onClick={this.handleClick} id="city" onKeyUp={this.handleOnKeyUp}/>
                    <Suggestions weatherInfo={this.state.weatherSuggestions}/>
                </div>
            </React.Fragment>
        );
    }
}


export default Search;

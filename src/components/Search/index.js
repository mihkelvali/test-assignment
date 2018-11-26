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
        if (e.target.value !== '') {
            this.refs.pTag.style.display = 'block';
            this.setState({query: e.target.value}, () => {
                this.getData();
            });
        }
        else {
            this.refs.pTag.style.display = 'none';
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

    };*/

    handleFocus = () => {
        this.refs.pTag.style.display = 'block';
    };

    click = () => {
        this.refs.pTag.style.display = 'none';
    };

    render() {
        return (
            <React.Fragment>
                <div className="center">
                    <img src={pin} alt="icon"/>
                    <p ref="pTag" id="ns">Search location...</p>
                    <input type="search" ref="search"  placeholder="Search location.." onFocus={this.handleFocus} onClick={this.handleClick} id="city" onKeyUp={this.handleOnKeyUp}/>
                    <Suggestions weatherInfo={this.state.weatherSuggestions}/>
                </div>
            </React.Fragment>
        );
    }
}


export default Search;

import React, {Component} from 'react';
import pin from '../../icons/ic-pin.svg';
import './styles.css';
import Suggestions from '../Suggestions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherSuggestions: [],
            query: '',
        }
    }

    getData = () => {
        const apiCall = 'http://internship-proxy.aw.ee:3001/location?query=' + this.state.query;
        fetch(apiCall).then(response => response.json())
            .then(data => {
            this.setState ({
                weatherSuggestions: data,
            })
        });
    };

    handleOnKeyUp = () => {
            this.setState({query: this.refs.search.value}, () => {
                this.getData();
            });
    };

    handleFocus = () => {
        this.refs.pTag.style.display = 'block';
    };

    render() {
        return (
            <React.Fragment>
                <div className="center">
                    <img src={pin} alt="icon"/>
                    <p ref="pTag">Search location...</p>
                    <input type="search" ref="search"  placeholder="Search location.." onFocus={this.handleFocus} onKeyUp={this.handleOnKeyUp}/>
                    <Suggestions weatherInfo={this.state.weatherSuggestions}/>
                </div>
            </React.Fragment>
        );
    }
}


export default Search;

import React, {Component} from 'react';
import pin from '../icons/ic-pin.svg';
import './search.css';
import Suggestions from './suggestions';

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
        let apiCall = 'http://internship-proxy.aw.ee:3001/location?query=' + this.state.query;
        fetch(apiCall).then(response => {
            return response.json();
        }).then(data => {
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
    };

    handleClick = () => {
        //let list = document.getElementById('locationsList');
        //console.log(list);
        //list.addEventListener("click", this.closeList);
    };

    closeList = () => {
        this.setState({
            query: '',
            isLoaded: false,
            weatherSuggestions: []
        })
    };

    render() {
        return (
            <React.Fragment>
                <div className="center">
                        <img src={pin} alt="icon"/>
                        <input type="search" ref={input => this.search = input} placeholder="Search location.." onClick={this.handleClick} id="city" onKeyUp={this.handleOnKeyUp}/>
                        <Suggestions weatherInfo={this.state.weatherSuggestions}/>
                    </div>
            </React.Fragment>
        );
    }
}


export default Search;

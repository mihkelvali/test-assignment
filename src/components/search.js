import React, {Component} from 'react';
import pin from '../icons/ic-pin.svg';
import './search.css';
import Suggestions from './suggestions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: [],
            isLoaded: false,
            query: ''
        }
    }

    getData = () => {
        let apiCall = 'http://internship-proxy.aw.ee:3001/location?query=' + this.state.query;
        fetch(apiCall).then(response => {
            return response.json();
        }).then(data => {
            this.setState ({
                isLoaded: true,
                weatherInfo: data,
            })
        });
    };

    handleOnKeyUp = () => {
        this.setState({query: this.search.value}, () => {
            console.log(this.state.query);
            this.getData();
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="center">
                    <img src={pin} alt="icon"/>
                    <input type="search" ref={input => this.search = input} placeholder="Search location.." id="city" onKeyUp={this.handleOnKeyUp}/>
                    <div id="results">
                        <Suggestions weatherInfo={this.state.weatherInfo}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Search;

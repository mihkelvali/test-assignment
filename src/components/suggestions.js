import React, {Component} from 'react';
import './suggestions.css';
import DisplayWeather from './displayWeather';

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: [],
            locationData: [],
            isLoaded: false,
            woeid: '',
            icon1: ''

        }
    }

    getWeatherData = () => {
        let apiCall = 'http://internship-proxy.aw.ee:3001/location/' + this.state.woeid;
        fetch(apiCall).then(response => {
            return response.json();
        }).then(data => {
            this.setState ({
                isLoaded: true,
                locationData: data.consolidated_weather,
                icon1: data.consolidated_weather[0].weather_state_abbr
            })
        });
    };

    closeList = () => {
        let list = document.getElementById('locationsList');
        console.log(list);
    };

    onClick = (e) => {
        let locationId = e.target.id;
        this.setState({woeid: locationId}, () => {
            this.getWeatherData();
            //this.closeList();
        });
    };

    render() {
        return (
            <div className="">
                <ul className="suggestions" id="locationsList">
                    {this.props.weatherInfo.map(data => (
                            <li onClick={this.onClick} key={data.woeid} id={data.woeid}>
                                {data.title}
                            </li>
                    ))}
                    </ul>
                    <DisplayWeather
                        locationInfo={this.state.locationData}
                        icon={this.state.icon1}
                    />
            </div>
        );

    }
}


export default Suggestions;

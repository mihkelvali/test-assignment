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
            date: new Date(),
            minTemp: 0,
            maxTemp: 0
        }
    }

    getWeatherData = () => {
        let apiCall = 'http://internship-proxy.aw.ee:3001/location/' + this.state.woeid;
        fetch(apiCall).then(response => {
            return response.json();
        }).then(data => {
            this.setState ({
                isLoaded: true,
                locationData: data.consolidated_weather
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
                        dateInfo={this.state.date}
                        minInfo={this.state.minTemp}
                    />
            </div>
        );

    }
}


export default Suggestions;

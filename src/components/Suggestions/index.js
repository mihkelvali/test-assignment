import React, {Component} from 'react';
import './styles.css';
import DisplayWeather from '../DisplayWeather';

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: [],
            locationData: [],
            woeid: '',
        }
    }

    getWeatherData = () => {
        const apiCall = 'http://internship-proxy.aw.ee:3001/location/' + this.state.woeid;
        fetch(apiCall).then(response => response.json())
            .then(data => {
            this.setState ({
                locationData: data.consolidated_weather
            })
        });
    };

    onClick = (e) => {
        const locationId = e.target.id;
        this.setState({woeid: locationId}, () => {
            this.getWeatherData();
        });
        this.refs.locationsList.style.display = 'none';
    };

    render() {
        if (this.props.weatherInfo.length === 0) {
            return null;
        }
        else {
            return (
                <div>
                    <ul className="suggestions" ref='locationsList'>
                        {this.props.weatherInfo.map(data => (
                            <li onClick={this.onClick} key={data.woeid} id={data.woeid}>
                                {data.title}
                            </li>
                        ))}
                    </ul>
                    <DisplayWeather locationInfo={this.state.locationData}/>
                </div>
            );
        }

    }
}


export default Suggestions;

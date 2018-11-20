import React, {Component} from 'react';
import './displayWeather.css';

class DisplayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationInfo: [],
            applicable_date: '',
            min_temp: '',
            max_temp: '',
            wind_speed: '',
            weather_state_abbr: ''
        };
    }

    render() {
        return(
            <div className="containerBox">
                {this.props.locationInfo.slice(0,3).map((data, id) => (
                    <div className="display" key={id}>
                        <div className="date">{new Date(data.applicable_date).toLocaleDateString()}</div>
                        <div className="icon">{data.weather_state_abbr}</div>
                        <div className="temp">Min: {parseFloat(data.min_temp).toFixed(2)}</div>
                        <div className="temp">Max: {parseFloat(data.max_temp).toFixed(2)}</div>
                        <div className="wind">{parseInt(data.wind_speed)}mph</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayWeather;

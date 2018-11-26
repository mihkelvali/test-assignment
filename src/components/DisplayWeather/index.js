import React, {Component} from 'react';
import arrow from '../../icons/windarrow.svg';
import './styles.css';

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

    validateDate = (date) => {
        date = new Date(date).toLocaleDateString();
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        if (date === today.toLocaleDateString()) {
            return "Today";
        }
        else if (date === tomorrow.toLocaleDateString()) {
            return "Tomorrow";
        }
        else return date;
    };

    validateUrl = (iconState) => {
        const urlStart = "https://www.metaweather.com//static/img/weather/";
        const extension = ".svg";
        const url = urlStart + iconState + extension;
        return <img src={url} alt="icon"/>;
    };

    render() {
        if (this.props.locationInfo.length === 0) {
            return null;
        }
        else {
            return (
                <div className="containerBox">
                    {this.props.locationInfo.slice(0, 3).map((data, id) => (
                        <div className="display" key={id}>
                            <div className="date">{this.validateDate(data.applicable_date)}</div>
                            <div className="icon">
                                {this.validateUrl(data.weather_state_abbr)}
                                <p>{data.weather_state_name}</p>
                            </div>
                            <div className="temp">Min: {parseFloat(data.min_temp).toFixed(2)}</div>
                            <div className="temp">Max: {parseFloat(data.max_temp).toFixed(2)}</div>
                            <div className="wind">
                                <img src={arrow} alt="icon"/>
                                <p>{parseInt(data.wind_speed, 10)} mph</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default DisplayWeather;

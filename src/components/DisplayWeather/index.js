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
                            <table>
                                <tbody>
                                    <tr className="date">
                                        <td>{this.validateDate(data.applicable_date)}</td>
                                    </tr>
                                    <tr className="icon">
                                        <td>{this.validateUrl(data.weather_state_abbr)}</td>
                                        <td className="text">{data.weather_state_name}</td>
                                    </tr>
                                    <tr className="temp">
                                        <td>Max:</td>
                                        <td className="smallText">{parseInt(data.max_temp, 10)}&deg;C</td>
                                    </tr>
                                    <tr className="temp">
                                        <td>Min:</td>
                                        <td className="smallText">{parseInt(data.min_temp, 10)}&deg;C</td>
                                    </tr>
                                    <tr className="wind">
                                        <td><img src={arrow} alt="icon"/></td>
                                        <td className="smallText">{parseInt(data.wind_speed, 10)}mph</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default DisplayWeather;

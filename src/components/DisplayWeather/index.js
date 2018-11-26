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

    checkDate = (weather) => {

        const today = new Date();
        console.log(today);
        console.log(weather);
    };

    render() {
        const url = "https://www.metaweather.com//static/img/weather/";
        const extension = ".svg";
        return(
            <div className="containerBox">
                {this.props.locationInfo.slice(0,3).map((data, id) => (
                    <div className="display" key={id}>
                        <div className="date">{new Date(data.applicable_date).toLocaleDateString()}</div>
                        <div className="icon">
                            {this.checkDate(data.applicable_date)}
                            <img src={url+data.weather_state_abbr+extension} alt="icon"/>
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

export default DisplayWeather;

import React, {Component} from 'react';
import './suggestions.css';

class Suggestions extends Component {
    
    onClick(e) {
        console.log('Was clicked: ' + e.target.id);
    }
    render() {
        return (
            <div className="">
                <ul className="suggestions" id="locationList">
                    {this.props.weatherInfo.map(data => (
                        <li onClick={this.onClick} key={data.woeid} id={data.woeid}>
                            {data.title}
                            </li>
                    ))}
                    </ul>
            </div>
        );

    }
}


export default Suggestions;

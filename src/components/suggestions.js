import React, {Component} from 'react';

class Suggestions extends Component {

    render() {
        return (
            <div>
                <div>Search results: </div>
                <ul>
                    {this.props.weatherInfo.map(data => (
                        <li key={data.woeid}>
                            Location: {data.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default Suggestions;

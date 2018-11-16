import React, {Component} from 'react';

class DisplayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: [],
            isLoaded: false,
            userQuery: this.props.callBack
        }
    }

    /*someFn = () => {
        var query1;
        this.props.callbackFromParent(query1);
    }*/

    /*handleOnKeyUp = (event) => {
        let inputBox = document.getElementById('city')
        let query = inputBox.value;
        this.setState({queryParam: query});
        console.log(this.state.queryParam);
    };*/

    myCallback = (callBack) => {
        let testQuery = this.props.callBack;
        console.log('Query value myCallback ' + testQuery);
        this.setState({ userQuery: testQuery });
        console.log('State value myCallback: ' +this.state);
    };

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = 'new') => {
        //this.myCallback();

        let apiCall = 'http://internship-proxy.aw.ee:3001/location?query=' + query;
        let testQuery = this.props.callBack;
        console.log('Query value component did mount: ' + testQuery);

        console.log('api: ' +apiCall);


        fetch(apiCall).then(response => {
            return response.json();
        }).then(data => {
            //console.log(data);
            this.setState ({
                isLoaded: true,
                weatherInfo: data,
            })
        });
    };

    render() {
        //let testQuery = this.props.callBack;
        //console.log('Query value ' + testQuery);
        //this.setState({userQuery: testQuery});
        let {isLoaded, weatherInfo} = this.state;
        console.log('State: ' + this.state);
        console.log('isLoaded: ' + isLoaded);
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            return (
                <div >
                    <div id='output'> </div>
                    <ul>
                        {weatherInfo.map(data => (
                            <li key={data.woeid}>
                                Location: {data.title}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default DisplayWeather;

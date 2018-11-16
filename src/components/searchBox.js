import React, {Component} from 'react';
import pin from '../icons/ic-pin.svg';
import './search.css';
import DisplayWeather from './displayWeather';
import DisplaySearchResults from './suggestions';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryParamFromChild: ''
        }
    }

    handleKeyPress = (event) => {
        let userQuery = event.target.value;
        this.setState({queryParamFromChild: userQuery});

        //console.log(this.state.queryParamFromChild);
        document.getElementById('test').innerHTML = userQuery;
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {
        let queryParam = this.state.queryParamFromChild;
        return (
            <React.Fragment>
                <div className="center">
                    <img src={pin} alt="icon"/>
                    <input type="search" placeholder="Search location.." id="city" onKeyUp={this.handleKeyPress}/>
                    <DisplaySearchResults />
                    <div id="test"> Input value: </div>
                    <div id="results">
                        <DisplayWeather callBack={queryParam}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default SearchBox;

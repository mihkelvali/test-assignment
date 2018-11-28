import React, { Component } from "react";
import pin from "../../icons/ic-pin.svg";
import "./styles.css";
import Suggestions from "../Suggestions";
import DisplayWeather from "../DisplayWeather";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            locations: [],
            woeId: "",
            detailInfo: []
        };
    }

    fetchLocations = () => {
        const url =
            "http://internship-proxy.aw.ee:3001/location?query=" +
            this.state.query;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locations: data
                });
            });
    };

    handleOnKeyUp = () => {
        this.setState({ query: this.refs.search.value }, () => {
            this.fetchLocations();
        });
    };

    handleFocus = () => {
        this.refs.pTag.style.display = "block";
        this.setState({
            detailInfo: [],
            query: ""
        });
    };

    selectLocation = ({ target: { id: woeId } }) => {
        this.setState({
            woeId
        });
        this.fetchDetailedInformation();
    };

    fetchDetailedInformation = () => {
        fetch("http://internship-proxy.aw.ee:3001/location/" + this.state.woeId)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locations: [],
                    detailInfo: data.consolidated_weather
                });
            });
    };

    render() {
        const { locations, detailInfo } = this.state;
        return (
            <React.Fragment>
                <div className="center">
                    <img src={pin} alt="icon" />
                    <p ref="pTag">Search location...</p>
                    <input
                        type="search"
                        ref="search"
                        placeholder="Search location.."
                        onFocus={this.handleFocus}
                        onKeyUp={this.handleOnKeyUp}
                    />
                    {locations && (
                        <Suggestions
                            weatherInfo={locations}
                            selectLocation={this.selectLocation}
                        />
                    )}
                    {detailInfo && <DisplayWeather locationInfo={detailInfo} />}
                </div>
            </React.Fragment>
        );
    }
}

export default Search;

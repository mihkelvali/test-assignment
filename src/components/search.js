import React, {Component} from 'react';
import pin from '../icons/ic-pin.svg';
import './search.css';
import Suggestions from './suggestions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherSuggestions: [],
            isLoaded: false,
            query: '',
        }
    }

    getData = () => {
        let apiCall = 'http://internship-proxy.aw.ee:3001/location?query=' + this.state.query;
        fetch(apiCall).then(response => {
            return response.json();
        }).then(data => {
            this.setState ({
                isLoaded: true,
                weatherSuggestions: data,
            })
        });
    };

    handleOnKeyUp = () => {
        this.setState({query: this.search.value}, () => {
            this.getData();
        });

    };

    /*onChange = (e) => {
        let suggestions = this.state.weatherSuggestions;
        let userInput = e.currentTarget.value;
        console.log('sgs: ' +suggestions);
        console.log('inpt: ' +userInput);
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
        });
    };

    autocomplete(inp, arr) {
        let currentFocus;
        console.log(arr);
        inp.addEventListener("input", function(e) {
            let a, b, i, val = this.value;
            console.log(val);
            closeAllLists();
            if (!val) {
                return false;
            }
            currentFocus = -1;
            a = document.createElement("DIV");
            console.log(a);
            a.setAttribute("id", "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    console.log(b);
                a.appendChild(b);
                }
            }
        });

        function closeAllLists(element)
        {
            let x = document.getElementsByClassName("autocomplete-items");
            for (let i = 0; i < x.length; i++) {
                if (element !== x[i] && element !== inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }*/

    render() {
        /*const {
            onChange,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                query
            }
        } = this;
        let suggestionsListComponent;

        if (showSuggestions && query) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li className={className} key={suggestion.woeid}>
                                    {suggestion.title}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions, you're on your own!</em>
                    </div>
                );
            }
        }*/
        return (
            <React.Fragment>
                <div className="center">
                        <img src={pin} alt="icon"/>
                        <input type="search" ref={input => this.search = input} placeholder="Search location.." id="city" onKeyUp={this.handleOnKeyUp}/>
                        <Suggestions weatherInfo={this.state.weatherSuggestions}/>
                    </div>
            </React.Fragment>
        );
    }
}


export default Search;

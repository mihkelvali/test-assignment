import React from "react";
import "./styles.css";

const Suggestions = ({ weatherInfo, selectLocation }) => (
    <div>
        <ul className="suggestions">
            {weatherInfo.map(data => (
                <li
                    onClick={selectLocation}
                    key={data.woeid}
                    id={data.woeid}
                >
                    {data.title}
                </li>
            ))}
        </ul>
    </div>
);

export default Suggestions;

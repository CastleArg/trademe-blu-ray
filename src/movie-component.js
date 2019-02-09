import React, { useState } from 'react';
const MovieComponent = (props) => {
    //now we can set state in a functional component
    const [isExpanded, setIsExpanded] = useState(false);
    const theDate = props.movie.ReleaseDate ?
     new Date(parseInt(props.movie.ReleaseDate.slice(6, -2))).toDateString() 
     : 'NO DATE RETURNED';
    return (<div>
        <h3 onClick={() => setIsExpanded(!isExpanded)}>{props.movie.Name}} </h3>
        {isExpanded && <ul>
            <li>Id: {props.movie.Id}</li>
            <li>Year: {props.movie.MovieYear}</li>
            <li>Release Date: {theDate}</li>
        </ul>}
    </div>)
}

export default MovieComponent;
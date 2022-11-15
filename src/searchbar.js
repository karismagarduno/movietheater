import React from 'react'
import './App.css';
const Searchmovie = (props) => {
    return(
        <div className="sm">
            <input
            className="btn btn-primary btn-lg"
            value={props.value}
            onChange={(event) => props.setSearchmovie(event.target.value)}
            placeholder="Search movie"
            ></input>
        </div>
    )
}
export default Searchmovie;
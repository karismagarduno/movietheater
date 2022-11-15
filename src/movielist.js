import React from 'react'

const Movielist = (props)=> {
    return(
        <>
        {props.movies.map((movie,index)=>(
            <div class="d-flex flex-row mb-3 -flex flex-nowrap">
                <img src={movie.Poster} alt="movies"/>
            </div> 
        ))}
            </>
    );
        }
    export default Movielist
import './App.css';
import {useEffect, useState} from "react";
import Movielist from './movielist.js'
import Searchmovie from './searchbar.js'
const App = () =>{
  const [movies, setMovies]=useState([]);
  const [searchmovie, setSearchmovie]= useState('')

  const Requestmovie = async()=>{
    const url=`https://www.omdbapi.com/?apikey=d63dd993&s=${searchmovie}`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.Search){
      setMovies(data.Search);
    }
  }
  useEffect(() => {
    Requestmovie(searchmovie);
  },[searchmovie]
  );
  return(
    <div className="wholething">
      <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"><img src="logo.png" width="95px" height="95px"></img></a>
    <form className="d-flex">
    <div className = "moviesearch">
      <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie}/>
      </div>
      
    </form>
  </div>
</nav>
      
      <div className="App">
        <Movielist movies={movies}/>
      </div>
    </div>
  );

}

export default App;
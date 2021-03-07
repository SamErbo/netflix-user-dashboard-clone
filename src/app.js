import React from 'react';
import './app.css';
import Row from './Row';
import requests from './requests';
import Nav from './Nav';
import Banner from './Banner';



function app() {
  return (
    <div className="app">

      <Nav />

      <Banner />

      <Row title="Netflix Orginal" fetchUrl={requests.fetchNetflixOriginals}isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>  
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation}/>
     
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasy}/> 
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchScienceFiction}/> 
      {/* <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>  */}
    </div>
  );
}

export default app;

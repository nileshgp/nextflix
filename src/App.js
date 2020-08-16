import React from 'react';
import './App.css';
import Row from './Row/Row';
import requests from './requests';
import Banner from './Banner/Banner';


function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Banner />
      <Row
      title="Trending Now"
      fetchUrl={requests.fetchTrending}
      isLargeRow/>
      <Row title="Action & Adventure" fetchUrl={requests.fetchActionAdventure}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedy}/>
      <Row title="Crime" fetchUrl={requests.fetchCrime}/>
      <Row title="Drama" fetchUrl={requests.fetchDrama}/>
      <Row title="Mystery" fetchUrl={requests.fetchMystery}/>
      <Row title="Sci-Fi & Fantasy" fetchUrl={requests.fetchSciFantasy}/>
    </div>
  );
}

export default App;

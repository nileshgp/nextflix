import React from 'react';
import './App.css';
import Row from './Row/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h2>Nextflix What tv show should you watch next?</h2>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action & Adventure"/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {

 const [counties, setCountries] = useState([]);

 useEffect(()=>{
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(jsonData => setCountries(jsonData))
   .catch(error => console.log(error))
 }, [])

  const handleButton = () => {console.log('added');}

  return (
    <div className="App">

  <h1>{counties.length}</h1>

  <ul>
    {
      counties.map(cN => <Country cCountry={cN} key={cN.alpha3Code} hButton={handleButton}></Country> )
    }
  </ul>

  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;

import React from 'react';

const Country = (props) => {
  // console.log(props);
  const { name, population, region, borders, flag } = props.cCountry
  return (
    <div style={{border: '2px solid black', margin: '10px', padding:'10px'}}>
      <h4>Countries: {name}</h4>
      <img style={{border: '2px solid black', height: '50px', borderRadius: '50%'}} src={flag} alt=""/>
      <p>population {population}</p>
      <p><small>{region}</small></p>
      <p>{borders[0]}{borders[1]}</p>
      <button onClick={props.hButton} >Add Country</button>
      
    </div>
  );
};

export default Country;
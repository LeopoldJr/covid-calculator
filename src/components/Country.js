import React, { useState } from 'react';
import '../styles/Country.css';
import {Collapse, Button} from 'react-bootstrap';

function Country( props ) {
    const [open, setOpen] = useState(false);

    return (
      <div className="Toggle-Container">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Info
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">

          { props.activeCases <= 2000 ?
          <h2 style={{color: 'green'}}  >Current Number of Active Cases: {props.activeCases}</h2>
          :
          <h2 style={{color: 'red'}}>Current Number of Active Cases: {props.activeCases} </h2>
          } 
          <h2>Total Number of Cases: {props.totalCases}</h2>
          <h2>Total Number of Recoveries: {props.recoveredCases}</h2>
          <h2 >Total Number of Deaths: {props.deaths}</h2>
          <h2>Total Population: {props.population}</h2>

          </div>
        </Collapse>
      </div>
    );
  }

export default Country;

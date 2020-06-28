import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import useInputState from "../hooks/useInputState";
import "../styles/Form.css";

function Form( props ) {
    const [country, changeCountry] = useInputState("");

    const [numOfContacts, changeNumOfContacts] = useInputState("");

    const [isQuaratined, setIsQuaratined] = React.useState(false);
    const [isFrequentlyOutside, setIsFrequentlyOutside] = React.useState(false);

    const [data, setData] = useState({response: []});

    useEffect( () => {
        const axios = require("axios");
        const axiosCancelSource = axios.CancelToken.source();

    axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"d7f84a0792msh14582687a63a511p13fb05jsn4b67c16f280a",
        "useQueryString":true
        }
        })
        .then((response)=>{
          setData(response.data);
        })
        .catch((error)=>{
          console.log(error)
        })

        return () => {
            axiosCancelSource.cancel('Axios request canceled.')
          }
      }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        let countryCases = 1;
        let countryPopulation = 1;

        {data.response.map(data =>{ 

            let cases = data.cases.total;
            let population = data.population;

            if (data.country == country){
                console.log(cases);
                countryCases = cases;
                countryPopulation = population;
            }
            
        })}
        props.calculate(countryCases, countryPopulation, numOfContacts, isQuaratined, isFrequentlyOutside);

    }

    return (
        <div>
        <Paper>
            <form>
            <div className="New-Field">
                <h1>Type your country name (USA, UK, Italy, China, ect...)</h1>
                <TextField value={country} onChange={changeCountry} />
            </div>

            <div className="New-Field">
                <h1>How many people do you live with / are in daily close contact with?</h1>
                <TextField value={numOfContacts} onChange={changeNumOfContacts} />
            </div>

            <div className="New-Field">
                <h1>Are you actively participating in social distancing?</h1>
                <ToggleButton
                value="check"
                selected={isQuaratined}
                onChange={() => {
                    setIsQuaratined(!isQuaratined);
                }}
                >
                <CheckIcon />
                </ToggleButton>
            </div>

            <div className="New-Field">
                <h1>Do you enter public spaces two times a week or less?</h1>
                <ToggleButton
                value="check"
                selected={isFrequentlyOutside}
                onChange={() => {
                    setIsFrequentlyOutside(!isFrequentlyOutside);
                }}
                >
                <CheckIcon />
                </ToggleButton>
            </div>
            <Button variant="secondary" onClick={ (e) => handleSubmit(e)}>Calculate</Button> 
            </form>
        </Paper>
        </div>
    )


}
export default Form;
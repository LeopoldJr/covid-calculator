import React, {Component} from 'react';
import Country from "./Country";
import '../styles/Data.css';

class Data extends Component {

  state = {
    data: null,
  }
  componentDidMount(){

    const axios = require("axios");

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
          this.setState({ data: response.data })
        })
        .catch((error)=>{
          console.log(error)
        })
    
  }


  render(){
    return (
      <div className="Data">
        {this.state.data?.response.map(data => (
          <div className="New-Country">
             <h1>{data.country}</h1>
          <Country 
          activeCases={data.cases.active}
          totalCases={data.cases.total}
          recoveredCases={data.cases.recovered}
          deaths={data.deaths.total}
          population={data.population}
          />
          </div>
          
          ))}
      </div>
    );

  }
  
}

export default Data;

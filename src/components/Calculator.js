import React, {Component} from 'react';
import '../styles/Calculator.css';
import axios from "axios"
import Form from "./Form.js"

class Calculator extends Component {



  constructor(props){
    super(props);
    //this.state = {caption: "", image: ""}
    this.Compute = this.Compute.bind(this);
    //this.percentage = 0;
    this.state = {percentage: "0"};
  }


  // state = {
  //   percentage: 0,
  // }
  // componentDidMount(){

  //   const axios = require("axios");

  //   axios({
  //       "method":"GET",
  //       "url":"https://covid-193.p.rapidapi.com/statistics",
  //       "headers":{
  //       "content-type":"application/octet-stream",
  //       "x-rapidapi-host":"covid-193.p.rapidapi.com",
  //       "x-rapidapi-key":"d7f84a0792msh14582687a63a511p13fb05jsn4b67c16f280a",
  //       "useQueryString":true
  //       }
  //       })
  //       .then((response)=>{
  //         this.setState({ data: response.data })
  //       })
  //       .catch((error)=>{
  //         console.log(error)
  //       })
    
  // }
  Compute( countryCases, countryPopulation, numOfContacts, isQuaratined, isFrequentlyOutside) {
    //e.preventDefault();
    let total = 100;
    let contactNum = parseInt(numOfContacts);

    //changeNumOfCases(50);
    let cases = parseInt(countryCases);
    let population = parseInt(countryPopulation);

  

    //numOfCases = parseInt
    let casesRatio = (cases * 10)/population ;
    total = total * casesRatio;
    
    if (isQuaratined == true) {
      total = total * 0.8;
    } else {
      total = total * 2;
    }

    if (isFrequentlyOutside == true) {
      total = total * 0.8;
    } else {
      total = total * 2;
    }

    if (contactNum >= 5) {
      total = total * 2;
    }

    
    console.log("Done!");
    console.log(`number of cases: ${cases}`);
    console.log(`Cases Ratio: ${casesRatio}`)
    console.log(`total: ${total}`);

    //return { percentage: `${total}` }
    this.setState({ percentage: `${total.toFixed(2)}%` });
  }
  

  render(){
    return (
      <div className="Calculator">
        <Form calculate={this.Compute} />
        <h1>{this.state.percentage}</h1>
        
        {/* {this.state.data?.response.map(data => (
          
        <h1>{data.country}</h1>
        
        ))} */}
        
      </div>
    


    );
  }
}

export default Calculator;

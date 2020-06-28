import React, {Component} from 'react';
import '../styles/Calculator.css';
import axios from "axios"
import Form from "./Form.js"

class Calculator extends Component {



  constructor(props){
    super(props);
    //this.state = {caption: "", image: ""}
    this.Compute = this.Compute.bind(this);
    this.percentage = 0;
  }


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

  Compute(country, numOfContacts, isQuaratined, isFrequentlyOutside) {
    //const [numOfCases, changeNumOfCases, resetCases] = useInputState("");
    let total = 100;
    let contactNum = parseInt(numOfContacts);

    //changeNumOfCases(50);
    let numOfCases = country;
    let cases = parseInt(numOfCases);
    

  

    //numOfCases = parseInt
    total = cases + contactNum;
    
    if (isQuaratined == true) {
      total = total + 1;
    }
    if (isFrequentlyOutside == true) {
      total = total + 1;
    }
    console.log("Done!");
    console.log(`number of cases: ${cases}`);
    console.log(`total: ${total}`);

    this.percentage = total;
  }
  

  render(){
    return (
      <div className="Calculator">
        <Form calculate={this.Compute} />
        {/* {this.percentage}
        {this.state.data?.response.map(data => (
          
        <h1>{data.country}</h1>
        
        ))} */}
        
      </div>
    


    );
  }
}

export default Calculator;

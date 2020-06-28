import React, {Component} from 'react';
import '../styles/Calculator.css';
import Form from "./Form.js"

class Calculator extends Component {



  constructor(props){
    super(props);

    this.Compute = this.Compute.bind(this);

    this.state = {percentage: "0%"};
  }


  Compute( countryCases, countryPopulation, numOfContacts, isQuaratined, isFrequentlyOutside) {

    let total = 100;
    let contactNum = parseInt(numOfContacts);

    let cases = parseInt(countryCases);
    let population = parseInt(countryPopulation);

  
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

    
    // console.log("Done!");
    // console.log(`number of cases: ${cases}`);
    // console.log(`Cases Ratio: ${casesRatio}`)
    // console.log(`total: ${total}`);

    this.setState({ percentage: `${total.toFixed(2)}%` });
  }
  

  render(){
    return (
      <div className="Calculator">
        <Form calculate={this.Compute} />
        <h1 className="center-h1" >{this.state.percentage} Chance of Contracting COVID-19</h1>
      </div>
    


    );
  }
}

export default Calculator;

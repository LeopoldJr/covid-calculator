import React, {Component} from 'react';
import '../styles/Home.css';

class Home extends Component {
  render(){
    return (
      <div className="Home Sections ">
        <h1>Welcome to my COVID-19 Data Tracker and Calculator!</h1>
        <div className="Section-Calculator">
          <h1>COVID-19 Calculator</h1>
          <p className="Home-text" >
            All you have to do is insert some information about where you live and your day-to-day habits. The COVID-19 Calculator takes in that information and calculates the likelyhood that you will contract the COVID-19 virus utilizing an API and other various published statistics.
           <br></br>*Note: I am not an expert on the virus or calculating probability, so the calculations are not very accurate, but extremely rough estimations. More Data is needed for a more thorough analysis*
          </p>
        </div>
        <div className="Section-Data">
          <h1>Data Tracker</h1>
          <p className="Home-text" >
            The Data Tracker contains published data on all 195 countries in the world, as well as 32 other significant locations, such as the Diamond-Princess CruiseShip. Under each location, the Data Tracker tracks the number active cases, total cases, recoveries, and deaths. It also tracks population to help interpret the data.
            <br></br>*Note: There is currently no search function, as it is under maintenance. *
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

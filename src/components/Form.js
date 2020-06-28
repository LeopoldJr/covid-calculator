import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import useInputState from "../hooks/useInputState";
import "../styles/Form.css";

function Form( props ) {
    const [country, changeCountry, resetCountry] = useInputState("");
    const [numOfContacts, changeNumOfContacts, resetContacts] = useInputState("");

    const [isQuaratined, setIsQuaratined] = React.useState(false);
    const [isFrequentlyOutside, setIsFrequentlyOutside] = React.useState(false);

    return (
        <div>
        <Paper>
            <div className="New-Field">
                <h1>Type your country name</h1>
                <TextField value={country} onChange={changeCountry} />
            </div>

            <div className="New-Field">
                <h1>How many people do you live with / are in daily close contact with?</h1>
                <TextField value={numOfContacts} onChange={changeNumOfContacts} />
            </div>

            <div className="New-Field">
                <h1>Are you actively participating in quarantine?</h1>
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
            <button onClick={props.calculate(country, numOfContacts, isQuaratined, isFrequentlyOutside)}>Calculate</button>
        </Paper>
        
        </div>
    )


}
export default Form;
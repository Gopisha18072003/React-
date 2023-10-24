import React from 'react'

function ValidationComponent(props) {
    let validationMessage = 'Text long Enough';
    if(props.length <=5) {
        validationMessage = 'Text too short';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default ValidationComponent; 
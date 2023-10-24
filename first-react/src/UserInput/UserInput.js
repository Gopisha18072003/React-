import React from 'react'
const UserInput = (props) => {
    return <input type="text"
    value={props.default}
    onChange= {props.change}
    />
}
export default UserInput;
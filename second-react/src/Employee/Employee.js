import React from 'react'
import './Employee.css'
//write name of the component in uppercase
function Employees(props) {
    return (
        <div className='employee'>
            <h1>Name = {props.name}</h1>
            <p>Department = {props.dept}</p>
            <p>Position = {props.pos}</p>
            <input type='text' onChange={props.change} value={props.pos}/>
            <strong onClick={props.click}>Delete</strong>
        </div>
    );
}

export default Employees;
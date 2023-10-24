import React from 'react'
import './Person.css'
// using props make the data hardcoaded in the custom component
const Person = (data) => {
    return (
        <div className='Person' >
            <p onClick={data.click}>I am {data.name} and {data.age} years old!</p>
            {/* <p onClick={data.click}>{data.children}</p> */}
            {/* <input type='text' onChange={data.change} value={data.name}/> */}
        </div>
        
    );
}

export default Person;   
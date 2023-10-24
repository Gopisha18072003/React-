
import { useState } from 'react';
import './App.css';
import Employees from './Employee/Employee';
function App() {

  //creating states using react hooks
  const [getEmployees, setEmployees] = useState({
    employees: [
      {id: 'e1', name: 'Gopi Shaw', dept: 'IT', pos:'Junior'},
      {id: 'e2', name: 'Aditya Shukla', dept: 'IT', pos:'Junior'},
      {id: 'e3', name: 'Abhay Shaw', dept: 'Marketing', pos:'Team Lead'},
      {id: 'e4', name: 'Guru Prakash', dept: 'Designing', pos:'Senior'},
    ],
    isEmployeeVisible: false
  });


  const toggleDisplayEmployees = () => {
    //don't directly change states
    const temp = getEmployees.isEmployeeVisible;
    setEmployees((prevState) => ({
      ...prevState,
      isEmployeeVisible: !temp
    }));
  }

  const changePositionHandler = (event, id) => {
    // Find the index
    const index = getEmployees.employees.findIndex(e=>{
      return e.id === id
    })

    // copy the employee
    const targetEmployee ={
      ...getEmployees.employees[index]
    }; 
    
    // change the employee's position
    targetEmployee.pos = event.target.value;
    const updatedEmployees = [...getEmployees.employees];
    updatedEmployees[index] = targetEmployee;
    setEmployees((prevState) => ({
      ...prevState,
      employees: updatedEmployees
    }))
  };

  const deleteEmployeeHandler = (index) => {
    const copy = [...getEmployees.employees];
    copy.splice(index, 1);
    setEmployees((prevState) => ({
      ...prevState,
      employees: copy
    }))
  };

  let empContainer = null;
  if(getEmployees.isEmployeeVisible) {
    empContainer = (
      <div>
        {
          getEmployees.employees.map((employee, index) => {
            return <Employees 
            change={(event)=>changePositionHandler(event, employee.id)}
            click={()=> deleteEmployeeHandler(index)}
            name={employee.name}
            dept={employee.dept}
            pos={employee.pos}
            key={employee.id}
            ></Employees>
          })
        }
      </div>
    );
  }
  return (
    <div className="App">
      <button onClick={toggleDisplayEmployees}>All Employees</button>
      {empContainer}
    </div>
  );
}

export default App;

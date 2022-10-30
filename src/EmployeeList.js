import React from "react";
import './App.css'

class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div id="ld">
                <h1>EmployeeList</h1>
                <table>
                    
                    <thead>
                    <tr>
                        <th>Emp_ID</th>
                        <th>Emp_Name:</th>
                        <th>Emp_Age:</th>
                        <th>Emp_Address:</th>
                        <th>Designation:</th>
                    </tr></thead>
                    <tbody>
                    {this.props.employees.map((items)=>{
                    return <tr><td>{items.id}</td><td>{items.empname}</td><td>{items.age}</td>
                    <td>{items.address}</td>
                    <td>{items.designation}</td></tr>
                })}
                    </tbody>
                </table>

            </div>
            
        );
    }

}
export default EmployeeList;
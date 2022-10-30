import React from "react";
import EmployeeList from "./EmployeeList";
import './App.css';


class CreateEmployee extends React.Component{
    constructor(){
        super();
        this.state={
            id:"",
            empname:"",
            age:"",
            address:"",
            designation:"",
            employees:[]

        }
    }
    onIdChange(event){
        this.setState({id:event.target.value})
    }
    onNameChange(event){
        this.setState({empname:event.target.value})
    }
    onAgeChange(event){
        this.setState({age:event.target.value})
    }
    onaddressChange(event){
        this.setState({address:event.target.value})
    }
    onDegisnationChange(event){
        this.setState({designation:event.target.value})
    }
    savedata(e){
        e.preventDefault();
        let employees = this.state.employees;
        let employee = {
            id:this.state.id,
            empname:this.state.empname,
            age:this.state.age,
            address:this.state.address,
            designation:this.state.designation
        }
        employees.push(employee)  
        this.setState({employees:employees})
    }
    render(){
        return (
            <>            <div className="maindiv">
                <h1>Employee Details form</h1>
                <form>
                    <label>EmployeeId : </label>
                    <input type="text" name="id" value={this.state.id} onChange={(e)=>this.onIdChange(e)}/>
                    <br></br>
                    <label>Emp_Name : </label>
                    <input type="text" name="name" value={this.state.empname} onChange={(e)=>this.onNameChange(e)}/>
                    <br></br>
                    <label>Emp_Age : </label>
                    <input type="text" name="age" value={this.state.age} onChange={(e)=>this.onAgeChange(e)}/>
                    <br></br>
                    <label>EmpAddress : </label>
                    <input type="text" name="address" value={this.state.address} onChange={(e)=>this.onaddressChange(e)}/>
                    <br></br>
                    <label>Designation : </label>
                    <input type="text" name="desig" value={this.state.designation} onChange={(e)=>this.onDegisnationChange(e)}/>
                    <br></br>
                    
                    <button onClick={(e)=>this.savedata(e)}>SaveData</button>
                
                
                </form>
                
            </div>
            <div>
                <EmployeeList employees={this.state.employees}/>
                </div>

            </>

        );
    }
}
export default CreateEmployee;
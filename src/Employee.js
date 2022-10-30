// import React from "react";

// class Employee  extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"test",
//             company:"motivity",
//             isDisplay:false
//         }
//         this.changeInfo=this.changeInfo.bind(this);
        
//     }
//     changeInfo(){
//         console.log("wjwvnkvkmvkmkvmdks")
//         console.log(this.state.name)
        
//     }
//     showCompany(){
//         console.log(this.state.company)
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.changeInfo}>Change Info</button>
//                 <button onClick={()=>this.showCompany()}>showcompany</button>
//              {this.isDisplay &&   <h1>{this.state.name}</h1>}
//                 <h1>{this.state.company}</h1>
//             </div>
//         )
//     }
// }
// export default Employee;
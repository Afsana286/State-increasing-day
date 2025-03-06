// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals"

// function App(){
// let date=new Date();
// // let year=date.getFullYear();
// // let month=date.getMonth();
// // let Day=date.getDay();
// // let hour=date.getHours();
// // let minute=date.getMinutes();
// // let second=date.getSeconds();  

// let [day,setupdate]=useState(Day);
// // let [Month,setmonth] =useState(month)  ;

//   function increase(){
//    if(day>=1 && day<=30 ) setupdate((day)=>day+1);
//   //  if(day>=30) setmonth((m)=>m+1)  ;       
//   }
//   function decrease(){
//     if(day>1 && day<=30 ) setupdate((day)=>day-1);       
//    }

// let [count,setcount]=useState(0);
// function countervalu(e){    
// setcount(e.target.value);
// let newcont=30-Day;
// console.log(newcont);

// // if(day>1 && day<=30 ) {parseInt(setupdate((day)=>day+ Number(count)),10)};      
// if(day>1 && day<=30 && e.target.value<=newcont) {setupdate(day=>day+ Number(e.target.value))};      
// }

// return(
//   <div className="container">
//     <div className="container1">
//       <h1>Counter:<input type="text" onChange={(e)=>countervalu(e)} value={count}/></h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//       <p>{day}/{month}/{year} ,{hour}:{minute}:{second} </p>
//     </div>
//   </div>
// )
// }
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

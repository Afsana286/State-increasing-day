import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals"

function App(){
let [date,SetDate]=useState(new Date());
  function increase(){
     SetDate(dateprev=>{
      let newdate=new Date(dateprev);
      newdate.setDate(newdate.getDate()+1);
      return newdate
     }
     ) 
  }
  function decrease(){
    SetDate(dateprev=>{
      let newdate=new Date(dateprev);
      newdate.setDate(newdate.getDate()+1);
    return newdate
     }) 
   }

let [count,setcount]=useState(0);
function countervalu(e){    
  let newCount = Number(e.target.value);  
  console.log(newCount);
  
  setcount(newCount);
SetDate(dateprev=>{
    let newdate=new Date(dateprev);
  newdate.setDate(newdate.getDate()+newCount);
  return newdate}
)
}

return(
  <div className="container">
    <div className="container1">
      <h1>Counter:<input type="text" onChange={(e)=>countervalu(e)} value={count}/></h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <p>{date.toLocaleString()}</p>
    </div>
  </div>
)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

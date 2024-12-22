import React from "react"
import ReactDOM from "react-dom/client"


const  eleZero= React.createElement('h1',{id:98,name:'sai'},React.createElement('h2',{id:98,name:'sai'},'hello i am h2'))
console.log(eleZero)



const pi=5000

const Title=()=><h2>Raju </h2>
const Header=()=> (<h1> 
   
    <Title/>
    inside Header</h1>)

    
var eleOne= (<h1 className="One" id="one" style={{color:"red",textAlign:"center"}}>This is my{<Header/>} 
    first jsx tag </h1>)


const r=document.getElementById("root")
const ro=ReactDOM.createRoot(r)
ro.render(ele1)
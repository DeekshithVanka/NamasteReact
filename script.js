import React from "react"
import ReactDOM from "react-dom/client"


const ele = React.createElement('h1',{id:98,name:'sai'},React.createElement('h2',{id:98,name:'sai'},'hello i am h2'))
console.log(ele)
const r=document.getElementById("root")
const ro=ReactDOM.createRoot(r)
ro.render(ele)
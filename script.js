import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{

    return (
        < div className="header">
           <div className="logo-container">
           {/* <img  src="./cart.png" alt="Nothing is rendered"/> */}
             <h1>
                Mobio
             </h1>
           </div>
           <div className="nav-items">
            <ul>
        <li> Home </li>
        <li> About us </li>
        <li> contact us </li>
        <li> cart  </li>1
            </ul>
            </div>
       
        </div>
    )

}
const Card=(props)=>{
    
    const {name,age}=props
    


    return (
        <div className="rescard">

            
            <h2>   {name}</h2>
            <h2>   {age}</h2>
            <h2>   Price</h2>
            <h2>   rating</h2>
            
            
            
            
              </div>
    )
}

const Body=()=>{

    const resobj=[{
        id:1,
        name:"sai",
        age:20
    },{
        id:2,
        name:"shetty",
        age:18
    },{
        id:3,
        name:"kiran",
        age:25
    }]

   return (<div className="body" >
    
    <div className="res-container" >
{
    resobj.map((restrent)=>(
        <Card  key={restrent.id} name={restrent.name} age={restrent.age}/>
    )

    )
}
 </div>
 </div>)
}


const Footer=()=>{
}
const Applayout=()=>{
    return (
        <div className="app">
        <Header/>


        <Body/>
        <Footer/>
        </div>

    )
}

const rootelement=document.getElementById("root")
const root=ReactDOM.createRoot(rootelement)
root.render(<Applayout/>)

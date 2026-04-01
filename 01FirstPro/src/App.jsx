 import React from "react"
 import card from "./component/card"
 import ReactDOM from 'react-dom/client'
 function App(){
    return(
       /* //fragments
        <>
        <div id="Dad">
            <h1>First React App</h1>
        </div>
        <div id="chacha"> welcome to my web</div>
        </>*/
        <>
         <div className="card">
            <h1>Md Manowar Alam</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam cumque porro eligendi maxime illum tempora? Adipisci blanditiis minus dignissimos, obcaecati porro eligendi maiores eveniet cumque beatae eos totam assumenda.</p>
        </div>
        {card()}
</>
        
    )
 }

 export default App
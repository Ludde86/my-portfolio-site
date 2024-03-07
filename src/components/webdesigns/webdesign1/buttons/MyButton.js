import React, {useState} from "react";
import "./myButton.css"

export default function MyButton() {

   const [count, setCount]  = useState(0)

   function handleAddCount() {
      setCount(count + 1)
   }

   function handleDelCount() {
      setCount(count - 1)
   }

   return(
      <>

      
        
         <button className="my-button" style={{background: 'red'}} onClick={handleDelCount}>
         -
         </button>
      
      <button className="my-button" style={{background: count < 0 ? "red" : "green" }} onClick={handleAddCount}>
      Klicka här: {count}
      </button>
    
         <button className="my-button" style={{background: 'green'}} onClick={handleAddCount}>
         +
         </button>
      
      
     
      </>
   );
}
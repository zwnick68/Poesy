import {React,useEffect,useState} from "react";
import Poem from "./Poem";


function PoemsContainer({poems}) {
  
  return (
    <div className="poems-container">
      {
        poems.map((element)=> { 
          return (
          <Poem poems={element}/>
          
          
          )
        })
      }
    </div>
  );
}

export default PoemsContainer;

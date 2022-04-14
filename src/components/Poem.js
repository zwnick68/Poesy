import {React,useState} from "react";

function Poem({poems}) {
  const[mark,setMark]=useState(true)
  let read = mark ? "Mark as read" : "Mark as unread"
  return (
    <div>
      <h3>{poems.title}</h3>
      <p>{poems.content}</p>
      <p>
        <strong>{poems.author}</strong>
      </p>
      <button onClick={()=> {setMark(!mark)}}>{read}</button>
    </div>
  );
}

export default Poem;

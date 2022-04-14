import {React,useState,useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


function App() {
const[show,setShow]=useState(false)


const[poems,setPoems] = useState([])
  const request = async () => {
    let req = await fetch("http://localhost:8004/poems")
    let res = await req.json()
    setPoems(res)
  }
  useEffect(request,[])
  
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={()=>setShow(!show)}>Show/hide new poem form</button>
        { show ? <NewPoemForm setPoems={setPoems} poems={poems} /> : null}
      </div>
      <PoemsContainer poems={poems} />
      
    </div>
  );
}

export default App;

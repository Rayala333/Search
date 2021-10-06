import React,{useState} from 'react';
import Data from './city.json'

const App = ()=> {
  const [search, setsearch] = useState("");

  const changeHandler= (e)=>{
      setsearch(e.target.value)
  }
  return (
    <div>
      <center>
        <h1>Enter Your City</h1>
        <input type="text" value={search} onChange={changeHandler} />

        {Data.filter(City=>City.name.toLowerCase().includes(search.toLowerCase())).map(City=>
                        <div style={{"border":"1px solid black" ,"padding":"10px", "margin":"10px", "max-width":"70%"}}>
                          {City.name}
                        </div>)}
      </center>
      
    </div>
  )
}

export default App;
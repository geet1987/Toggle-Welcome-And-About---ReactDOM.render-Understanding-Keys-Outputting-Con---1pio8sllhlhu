import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [def,setDef] = useState(true);
  const toggleHandler = ()=>{
    setDef(def => !def);
  }

  return (
    <div id="main">
      {def && <div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div>}
      {!def && <div id="about-div">
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>}
      <button id="toggle" onClick={toggleHandler}>Toggle</button>
    </div>
  );
};

export default App;

import React from 'react';
import "./style/index.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import data from "./data.js";

const data_JSX = data.map( (item) =>{
  return <Card key={item.img} {...item} />  
})

function App()
{
  return( 
    <div>

      <Navbar/>
      <Hero/>
      <div className="list">
        {data_JSX}
      </div>

    </div>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar/NavBar"
import "./App.css"
import {Orginals,action,comedy} from './urls'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Orginals} title='Netflix Orginals'  />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
    </div>
  );
}

export default App;

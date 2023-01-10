import React from "react"
import {Routes , Route} from "react-router-dom" 
import AeroportComponent from "./composants/front/AeroportComponent";
import './App.css';
import DetailsComponent from "./composants/front/DetailsComponent";
import FavoritesComponent from "./composants/front/FavoritesComponent";
import FlightComponent from "./composants/front/FlightComponent" ;


const App: React.FC = () => {

  return (
    <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<AeroportComponent />} />
            <Route path="/flight" element={<FlightComponent />} />
            <Route path="/details" element={<DetailsComponent />} />
            <Route path="/favorites" element={<FavoritesComponent />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;

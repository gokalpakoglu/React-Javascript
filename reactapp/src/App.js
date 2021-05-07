// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import FirstComp from './Components/HomePage';
import Tarihi from './Components/TarihiYerler';
import List from './Components/DogalGuzellikler';
import Aktiviteler from './Components/Aktiviteler';
import Slider from './Components/Slider';
import Guess from './Components/GuessGame';


function App() {
  return (
    <div className="App" style={{backgroundColor:'bisque'}}>     
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={FirstComp}></Route>
        <Route path="/dogalguzellikler" component={Listx}></Route>
        <Route path="/tarihiyerler" component={TarihiYer}></Route>
        <Route path="/aktiviteler" component={Aktivite}></Route>
        <Route path="/slider" component={Sliderx}></Route>
        <Route path="/guessgame" component={GuessGame}></Route>
      </Router>
    </div>

  );
}
const Home=()=>(
  <div>
    <FirstComp></FirstComp>
  </div>
);
const Listx=()=>(
  <div>
    <List></List>
  </div>
);
const TarihiYer=()=>(
  <div>
    <Tarihi></Tarihi>
  </div>
);
const Aktivite=()=>(
  <div>
    <Aktiviteler></Aktiviteler>
  </div>
);
const Sliderx=()=>(
  <div style={{width:'1280',height:'720'}}>
    <Slider></Slider>
  </div>
);
const GuessGame=()=>(
  <div>
    <Guess></Guess>
  </div>
);


export default App;


import './App.css';



import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Navbar from './components/Navbar';
import News from './components/News';



export default class App extends Component {
  
 
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* <News apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'sports'}/> */}
          <Routes>
          <Route exact path="/" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'general'}/>}/>
          <Route exact path="/Business" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'business'}/>}/>
          <Route exact path="/Entertainment" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'entertainment'}/>}/>
          <Route exact path="/Health" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'health'}/>}/>
          <Route exact path="/Science" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'science'}/>}/>
          <Route exact path="/Sports" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'sports'}/>}/>
          <Route exact path="/Technology" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={5} country={'in'} category={'technology'}/>}/>
          </Routes>
            
          
          

        </Router>
      </div>
    )
  }
}


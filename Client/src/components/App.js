import React, { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import history from "../history";
import Feed from './Feed';
import Contact from './Contact';
import About from './About';
import Loading from './Loading';
import './App.css';

const App = () => {
  const [state, setState] = useState({});
  const {Loading}=useAuth0;
  useEffect(()=>{
    (async ()=>{
      const url='http://localhost:4000/courses';
      const response = await axios.get(url);
      console.log('data',response.data);
      setState({feeds:response.data})
    })();
    
  },[])

  if(Loading){
    return (<Loading></Loading>)
  }
  else{
    return (
      <div className="container">
        <Navigation />
        <Jumbotron title={state.jumbotronTitle}/>
        <Routes>
          <Route path="/contact" element={Contact}/>
          <Route path="/about" element={About}/>
          <Route path="/" element={<Feed feeds={state.feeds}/>} />
        </Routes>
        <div className="footer">
              <p>&copy; {state.name} Inc.</p>
        </div>
      </div>

    )
  }
}

export default App;

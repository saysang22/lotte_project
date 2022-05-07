
import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data';
import Header from './components/header';
import Main from './components/main';
import MainContents from './components/main_contents';
import Navlist from './components/navlist';
import Paper from './components/paper';

import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/detail';

function App() {


  let [shoes, shoes변경] = useState(data);

  return (
    <div>

      <Route exact path='/lotte_portfolio'>
        <Header topPage={true}/>
        <Main/>
        <MainContents shoes={shoes} showmain={true}/>
      </Route>


      <Route path='/detail/:id'>
        <Header topPage={false}/>
        <Detail shoes={shoes}/>
      </Route>
    
      {/* <Route path='/components/:id'>
        <MainContents shoes={shoes}/>
      </Route> */}
      <Switch>
        <Route path='/components/paper'>
          <Header topPage={false}/>
          <Paper/>
        </Route>
        <Route path='/components/:id'>
          <Header topPage={false}/>
          <Navlist datas={shoes}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

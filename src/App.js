
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Header from './components/header';
import Main from './components/main';
import MainContents from './components/main_contents';
import Navlist from './components/navlist';
import Paper from './components/paper';
import { Route, Switch } from 'react-router-dom';
import Detail from './components/detail';
import BannerWrap from './components/banner';
import BestContents from './components/bestContents';
import Footer from './components/footer';

function App() {

  let [shoes] = useState(data);

  return (
    <div>

      <Route exact path='/lotte_portfolio'>
        <Header topPage={true} datas={shoes}/>
        <Main/>
        <MainContents shoes={shoes} showmain={true}/>
        <BannerWrap/>
        <BestContents/>
      </Route>


      <Route path='/detail/:id'>
        <Header topPage={false} datas={shoes}/>
        <Detail shoes={shoes}/>
      </Route>
    
      {/* <Route path='/components/:id'>
        <MainContents shoes={shoes}/>
      </Route> */}
      <Switch>
        <Route path='/components/paper'>
          <Header topPage={false} datas={shoes}/>
          <Paper/>
        </Route>
        <Route path='/components/:id'>
          <Header topPage={false} datas={shoes}/>
          <Navlist datas={shoes}/>
        </Route>
      </Switch>
      <Footer/>

    </div>
  );
}

export default App;

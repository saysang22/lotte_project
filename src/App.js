
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
import Faq from './components/faq';
import Cart from './components/cart';
import ACom from './components/aCom';
import BCom from './components/bCom';


function App() {

  let [shoes] = useState(data);

  return (
    <div>
      <Header topPage={true} datas={shoes} />
      <ACom/>
      <BCom/>
      <Route exact path="/lotte_portfolio">
        <Main />
        <MainContents shoes={shoes} showmain={true} />
        <BannerWrap />
        <BestContents />
      </Route>

      <Route path="/detail/:id">
        <Detail shoes={shoes} />
      </Route>

      <Switch>
        <Route path="/components/paper">
          <Paper />
        </Route>
        <Route path="/components/faq">
          <Faq />
        </Route>
        <Route path='/components/cart'>
          <Cart/>
        </Route>
        <Route path="/components/:id">
          <Navlist datas={shoes} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

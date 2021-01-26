import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './view/home'
import Country from './view/country'
import Header from './components/header'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  background: ${p=>p.darkMode ? p.theme.color2 : p.theme.color5};
  min-height: 100vh;
`


function App() {
  const darkMode = useSelector(state=>state.app.darkMode)
  return (
    <Router>
    <Wrapper darkMode={darkMode}>
      <Header />

      <Switch>
        <Route path="/country/:id" exact>
          <Country />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Wrapper>
  </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './comps/PageNotFound';
import MainPage from './comps/MainPage';
import program from './comps/program'
import space from './comps/space'
import Pano1 from './comps/Pano1';
import Pano2 from './comps/Pano2';
import Pano3 from './comps/Pano3';
import Pano4 from './comps/Pano4';
import Pano5 from './comps/Pano5';

const App = () => {

  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route exact path={"/program"} component={program} />
        <Route exact path={"/space"} component={space} />
        <Route exact path={"/Pano1"} component={Pano1} />
        <Route exact path={"/Pano2"} component={Pano2} />
        <Route exact path={"/Pano3"} component={Pano3} />
        <Route exact path={"/Pano4"} component={Pano4} />
        <Route exact path={"/Pano5"} component={Pano5} />
        <Route exact path={"/404"} component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>

  )

}

export default App;

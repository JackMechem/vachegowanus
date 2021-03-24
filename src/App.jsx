import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.jsx';
import MainPage from './pages/MainPage';
import Pano1 from './pages/panos/Pano1';
import Pano2 from './pages/panos/Pano2';
import Pano3 from './pages/panos/Pano3';
import ViewModel from './pages/comps/modelView/ViewModel'

const App = () => {

return(

  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path={"/"} component={MainPage}/>
      <Route exact path={"/Pano1"} component={Pano1}/>
      <Route exact path={"/Pano2"} component={Pano2}/>
      <Route exact path={"/Pano3"} component={Pano3}/>
      <Route exact path={"/Model1"} component={ViewModel}/>
      <Route exact path={"/404"} component={PageNotFound}/>
      <Redirect to="/404"/>
    </Switch>
  </Router>

)

}

export default App;

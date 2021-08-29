import { HashRouter, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import AddingPage from "./AddingPage";

import style from './style.css'

export default function Routers() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/addingPage' component={AddingPage} />
      </Switch>
    </HashRouter>
  );
};

import { HashRouter, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import AddingPage from "./AddingPage";
import Contact from "./Contact";

import style from './style.css'

export default function Routers() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop_page' component={AddingPage} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </HashRouter>
  );
};

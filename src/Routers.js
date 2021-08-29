import { HashRouter, Switch, Route } from "react-router-dom";
import App from './App';
import AddingPage from "./AddingPage";

export default function Routers() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/addingPage' component={AddingPage} />
      </Switch>
    </HashRouter>
  );
};

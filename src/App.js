import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import User from "./components/user/User"
import Create from "./components/create/Create";
import Createquestion from "./components/create/Createquestions";
import More from "./components/more/More";
import Question from "./components/question/Question";
import Finish from "./components/finish/Finish";
import Log from "./components/user/Log";
import Register from "./components/user/Registe";

function App() {
  return (
    <Router>

      <div className="App">
        {/* <Header/> */}
        <div className="content__father">
          <div className="content">
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/user"} component={User}/>
              <Route exact path={"/create"} component={Create}/>
              <Route exact path={"/create/:id"} component={Createquestion}/>
              <Route exact path={"/tests/:id"} component={More}/>
              <Route exact path={"/questions/:id/:i"} component={Question}/>
              <Route exact path={"/finish/:id"} component={Finish}/>
              <Route exact path={"/log-in"} component={Register}/>
              <Route exact path={"/register"} component={Log}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
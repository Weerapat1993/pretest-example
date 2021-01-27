import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import Question1 from './pages/question/Question1'
import Question2 from './pages/question/Question2'
import Question3 from './pages/question/Question3'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/question-1" component={Question1} />
      <Route path="/question-2" component={Question2} />
      <Route path="/question-3" component={Question3} />
    </Switch>
  </Router>
)
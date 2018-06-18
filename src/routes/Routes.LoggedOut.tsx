import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

// import About from './About'
import Entrance from './Entrance'
import Error404 from './Error404'

class LoggedOutRoutes extends React.Component<{}, {}> {
  render() {
    return <Switch>
      <Route exact path="/" component={Entrance} />
      <Route path="/about" component={() => <h1>About Page</h1>} />
      <Route component={Error404} />
    </Switch>
  }
}
export default LoggedOutRoutes

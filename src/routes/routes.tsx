import * as React from 'react'
// import gql from 'graphql-tag'
// import { graphql } from 'react-apollo'
import { Route, Switch } from 'react-router-dom'

// import AsyncAboutRoute from './About'
// import Entrance from './Entrance'
import Error404 from './Error404'
import Home from './Home'

interface IProps {
  data?: any, // tslint:disable-line no-any
}

// const Loading = () => <div>Loading... </div>

class Routes extends React.Component<IProps, {}> {
  render() {
    // if (!this.props.data || this.props.data.loading) {
    //   return <Loading />
    // }
    // const loggedIn = this.props.data && this.props.data.me && this.props.data.me.userId.length > 0 || false
    // console.log({loggedIn}) // tslint:disable-line no-console
    // if (loggedIn) {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={() => <h1>About Page</h1>} />
        <Route component={Error404} />
      </Switch>
    // }

    // return <Switch>
    //   <Route exact path="/" component={Entrance} />
    //   <Route path="/about" component={AsyncAboutRoute} />
    //   <Route component={Error404} />
    // </Switch>
  }
}
export default Routes

// const meUserQuery = gql`
// query me {
//   me {
//     userId
//   }
// }
// `

// const withMe = graphql(meUserQuery, {
//   options: { pollInterval: 1000 }
// })

// export default withMe((Routes))

import * as React from 'react'

import LoggedIn from './Routes.LoggedIn'
import LoggedOut from './Routes.LoggedOut'

import { connectIsConnected } from '../components/network/NetworkOperations'

interface IProps {
  isConnected: boolean
}

class AuthedRoutes extends React.Component<IProps, {}> {
  render() {
    if (this.props.isConnected === true) {
      return <LoggedIn />
    }

    return <LoggedOut />
  }
}

export default connectIsConnected(AuthedRoutes)

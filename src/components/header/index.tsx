import * as React from 'react'

import LoggedIn from './Header.LoggedIn'
import LoggedOut from './Header.LoggedOut'

import { connectIsConnected } from '../network/NetworkOperations'

interface IProps {
  isConnected: boolean
}

class Header extends React.Component<IProps, {}> {
  render() {
    if (this.props.isConnected === true) {
      return <LoggedIn />
    }

    return <LoggedOut />
  }
}

export default connectIsConnected(Header)

import * as React from 'react'
import { graphql, } from 'react-apollo' //  compose

import { getStatus } from './NetworkQueries.gql'

interface IProps {
  isConnected: boolean,
}
interface IState {}
class NetworkStatus extends React.Component<IProps, IState> {
  render() {
    const {isConnected} = this.props
    return <div>
      Connected to GQL Endpoint? {isConnected ? 'YES' : 'NOPE!!'}
    </div>
  }
}

// const checkNetworkStatus = graphql(UPDATE_NETWORK_STATUS, {
//   props: ({ mutate }) => ({
//     updateNetworkStatus: isConnected => mutate({ variables: { isConnected } }),
//   }),
// })(NetworkStatus)

const GqlNetworkStatus = graphql(getStatus, {
  props: ({ data: { networkStatus, loading, error } }) => {
    if (loading) {
      return { loading }
    }

    if (error) {
      return { error }
    }

    return {
      isConnected: networkStatus.isConnected,
      loading,
    }
  },
})(NetworkStatus)

export default GqlNetworkStatus

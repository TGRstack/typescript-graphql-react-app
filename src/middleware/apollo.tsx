import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

const GQL_ENDPOINT = '' // "https://w5xlvm3vzz.lp.gql.zone/graphql"

function createApolloClient() {
  const newCache = new InMemoryCache()

  const stateLink = withClientState({
    cache: newCache,
    defaults: {
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: true,
      }
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
          const data = {
            networkStatus: {
              __typename: 'NetworkStatus',
              isConnected
            },
          }
          cache.writeData({ data })
          return null
        },
      },
    },
  })

  const client = new ApolloClient({
    cache: newCache,
    connectToDevTools: true,
    link: ApolloLink.from([
      stateLink,
      new HttpLink({
        uri: GQL_ENDPOINT
      })
    ]),
  })

  return client
}

export default function({children}: {children: React.ReactChild}) {
  return <ApolloProvider client={createApolloClient()}>
    {children}
  </ApolloProvider>
}

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch: fetch as any,
    // uri: 'https://api.thegraph.com/subgraphs/name/angry-mech/hyperjump-ftm-blocks' // https://ftm-blocks.hyperjump.app'
    uri: 'https://api.thegraph.com/subgraphs/name/matthewlilley/fantom-blocks'
  }),
  cache: new InMemoryCache()
})

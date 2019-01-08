import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from "connected-next-router";

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <ConnectedRouter>
            <Component {...pageProps} />
          </ConnectedRouter>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)

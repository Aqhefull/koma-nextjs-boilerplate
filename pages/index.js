import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from './../actions'
import Start from '../components/start/start'
import Layout from '../components/UI/Layout';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Layout>
        <Start />
      </Layout>
    )
  }
}

export default connect()(Index)

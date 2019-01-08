import React, { Component } from "react";
import Head from "next/head"
import stylesheet from '../../styles/main.sass'

class Layout extends Component {

  render() {
    return (
      <div className='body'>
        <Head>
          <title>Next.js Starter by Alexander Komarevich</title>
          <meta name="description" content="Next.js Starter by Alexander Komarevich" />
          <link href="/static/css/reset.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div id="wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout

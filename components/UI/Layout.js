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
          <meta name="keywords" content="nextjs, starter" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Next.js Starter by Alexander Komarevich" />
          <meta property="og:description" content="Next.js Starter by Alexander Komarevich" />
          <meta property="og:url" content="https://example.com/" />
          <meta property="og:site_name" content="Next.js starter" />
          <meta property="og:image" content="" />
          <meta property="og:image:secure_url" content="" />
          <link rel="shortcut icon" href="/static/favicon/favicon.svg" type="image/x-icon" />
          <link rel="apple-touch-icon" href="" />
          <link rel="apple-touch-icon" sizes="72x72" href="" />
          <link rel="apple-touch-icon" sizes="114x114" href="" />
          <link rel="apple-touch-icon" sizes="144x144" href="" />
          <link rel="apple-touch-icon" sizes="152x152" href="" />
          <link rel="apple-touch-icon" sizes="180x180" href="" />
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

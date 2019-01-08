import { connect } from 'react-redux'
import Clock from '../clock'
import { Link } from '../../routes'

function Start ({ lastUpdate, light }) {
  return (
    <section className="start">
      <div className="start__container">
        <div style={{padding: "20px 0"}}>
          <h1>Next.js Starter by Alexander Komarevich</h1>
          <h2>Character</h2>
          <ul>
            <li><Link prefetch route="character" id="1"><a>Flash</a></Link></li>
            <li><Link prefetch route="character" id="2"><a>Arrow</a></Link></li>
          </ul>
        </div>
        <Clock lastUpdate={lastUpdate} light={light} />
      </div>
    </section>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state.timer
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Start)

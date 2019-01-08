export default ({ lastUpdate, light }) => {
  return (
    <div className={light ? 'light' : ''}>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #61dafb;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #3e444e;
        }
      `}</style>
    </div>
  )
}

const format = t =>
  `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`

const pad = n => (n < 10 ? `0${n}` : n)

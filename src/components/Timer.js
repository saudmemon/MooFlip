function Timer({ secs }) {
  const progress = (secs / 15) * 100

  return (
    <div className="timer-card">
      <div className="timer-label">Next quote in</div>
      <div className="timer-val">
        0:{String(secs).padStart(2, '0')}
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default Timer
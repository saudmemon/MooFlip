function QuoteCard({ currentMood, currentQuote, liked, onNewQuote, onLike }) {
  if (!currentQuote || !currentMood) return null

  const initials = currentQuote.author
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="card">
      <span
        className="mood-tag"
        style={{ background: currentMood.bg, color: currentMood.color }}
      >
        {currentMood.label}
      </span>

      <p className="quote-text" key={currentQuote.text}>
        "{currentQuote.text}"
      </p>

      <div className="author-row">
        <div className="avatar">{initials}</div>
        <span className="author">{currentQuote.author}</span>
      </div>

      <div className="btns">
        <button className="btn-new" onClick={onNewQuote}>
          🔄 New quote
        </button>
        <button
          className={`btn-like ${liked ? 'liked' : ''}`}
          onClick={onLike}
        >
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </div>
  )
}

export default QuoteCard
import moodData from '../data/quotes'

function MoodSelector({ currentMood, onMoodChange }) {
  return (
    <div className="moods">
      {Object.entries(moodData).map(([key, mood]) => (
        <button
          key={key}
          className={`mood-btn ${currentMood === key ? 'active' : ''}`}
          style={{ background: mood.bg, color: mood.color }}
          onClick={() => onMoodChange(key)}
        >
          {mood.label}
        </button>
      ))}
    </div>
  )
}

export default MoodSelector
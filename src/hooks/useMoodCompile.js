import { useState, useEffect } from 'react'
import moodData from '../data/quotes'

function useMoodCompile() {
  const [mood, setMood] = useState('motivated')
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [liked, setLiked] = useState(false)
  const [secs, setSecs] = useState(15)

  const currentMood = moodData[mood] || moodData['motivated']
  const quotes = currentMood.quotes
  const currentQuote = quotes[quoteIndex % quotes.length]

  const newQuote = () => {
    setQuoteIndex(prev => prev + 1)
    setLiked(false)
    setSecs(15)
  }

  const changeMood = (newMood) => {
    setMood(newMood)
    setQuoteIndex(0)
    setLiked(false)
    setSecs(15)
  }

  const toggleLike = () => {
    const saved = JSON.parse(localStorage.getItem('likedQuotes') || '[]')
    if (!liked) {
      saved.push(currentQuote)
      localStorage.setItem('likedQuotes', JSON.stringify(saved))
    } else {
      const filtered = saved.filter(q => q.text !== currentQuote.text)
      localStorage.setItem('likedQuotes', JSON.stringify(filtered))
    }
    setLiked(prev => !prev)
  }

  useEffect(() => {
    const iv = setInterval(() => {
      setSecs(prev => {
        if (prev <= 1) {
          setQuoteIndex(i => i + 1)
          setLiked(false)
          return 15
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(iv)
  }, [])

  return {
    mood,
    currentMood,
    currentQuote,
    liked,
    secs,
    newQuote,
    changeMood,
    toggleLike
  }
}

export default useMoodCompile
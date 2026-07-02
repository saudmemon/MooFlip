const useSound = () => {
  const getCtx = () => {
    if (!window._audioCtx) {
      window._audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    }
    return window._audioCtx
  }

  const playClick = () => {
    try {
      const c = getCtx()
      const o = c.createOscillator()
      const g = c.createGain()
      o.connect(g)
      g.connect(c.destination)
      o.frequency.value = 600
      g.gain.setValueAtTime(0.1, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.1)
      o.start(c.currentTime)
      o.stop(c.currentTime + 0.1)
    } catch (e) {}
  }

  const playWhoosh = () => {
    try {
      const c = getCtx()
      const o = c.createOscillator()
      const g = c.createGain()
      o.connect(g)
      g.connect(c.destination)
      o.type = 'sine'
      o.frequency.setValueAtTime(300, c.currentTime)
      o.frequency.exponentialRampToValueAtTime(600, c.currentTime + 0.15)
      g.gain.setValueAtTime(0.08, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2)
      o.start(c.currentTime)
      o.stop(c.currentTime + 0.2)
    } catch (e) {}
  }

  const playDing = () => {
    try {
      const c = getCtx()
      const o = c.createOscillator()
      const g = c.createGain()
      o.connect(g)
      g.connect(c.destination)
      o.type = 'sine'
      o.frequency.value = 880
      g.gain.setValueAtTime(0.15, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.5)
      o.start(c.currentTime)
      o.stop(c.currentTime + 0.5)
    } catch (e) {}
  }

  const playTick = () => {
    try {
      const c = getCtx()
      const o = c.createOscillator()
      const g = c.createGain()
      o.connect(g)
      g.connect(c.destination)
      o.type = 'sine'
      o.frequency.value = 1000
      g.gain.setValueAtTime(0.08, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05)
      o.start(c.currentTime)
      o.stop(c.currentTime + 0.05)
    } catch (e) {}
  }

  const playMotivated = () => {
    try {
      const c = getCtx()
      const notes = [400, 600, 800]
      notes.forEach((freq, i) => {
        const o = c.createOscillator()
        const g = c.createGain()
        o.connect(g)
        g.connect(c.destination)
        o.type = 'sine'
        o.frequency.value = freq
        const t = c.currentTime + i * 0.1
        g.gain.setValueAtTime(0.12, t)
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
        o.start(t)
        o.stop(t + 0.15)
      })
    } catch (e) {}
  }

  const playStuck = () => {
    try {
      const c = getCtx()
      const o = c.createOscillator()
      const g = c.createGain()
      o.connect(g)
      g.connect(c.destination)
      o.type = 'sawtooth'
      o.frequency.setValueAtTime(200, c.currentTime)
      o.frequency.setValueAtTime(180, c.currentTime + 0.1)
      o.frequency.setValueAtTime(200, c.currentTime + 0.2)
      o.frequency.setValueAtTime(180, c.currentTime + 0.3)
      g.gain.setValueAtTime(0.08, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.4)
      o.start(c.currentTime)
      o.stop(c.currentTime + 0.4)
    } catch (e) {}
  }

  const playGrinding = () => {
    try {
      const c = getCtx()
      ;[0, 0.12].forEach(delay => {
        const o = c.createOscillator()
        const g = c.createGain()
        o.connect(g)
        g.connect(c.destination)
        o.type = 'square'
        o.frequency.value = 300
        const t = c.currentTime + delay
        g.gain.setValueAtTime(0.1, t)
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
        o.start(t)
        o.stop(t + 0.1)
      })
    } catch (e) {}
  }

  const playBurnout = () => {
    try {
      const c = getCtx()
      const o = c.createOscillator()
      const g = c.createGain()
      o.connect(g)
      g.connect(c.destination)
      o.type = 'sine'
      o.frequency.setValueAtTime(400, c.currentTime)
      o.frequency.exponentialRampToValueAtTime(150, c.currentTime + 0.6)
      g.gain.setValueAtTime(0.1, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.7)
      o.start(c.currentTime)
      o.stop(c.currentTime + 0.7)
    } catch (e) {}
  }

  return {
    playClick,
    playWhoosh,
    playDing,
    playTick,
    playMotivated,
    playStuck,
    playGrinding,
    playBurnout
  }
}

export default useSound
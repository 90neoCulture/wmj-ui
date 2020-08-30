const Utils = {
  handleClasses(c,a = []) {
    return a.map(i => i?`vant-${c}--${i}`:'').join(' ')
  }
}

export default Utils
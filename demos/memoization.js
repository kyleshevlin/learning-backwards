const memoize = fn => {
  const cache = {}

  return (...args) => {
    const stringifiedArgs = args.join('')

    if (cache[stringifiedArgs]) {
      return cache[stringifiedArgs]
    }

    const result - fn(...args)
    cache[stringifiedArgs] = result

    return result
  }
}

module.exports = memoize

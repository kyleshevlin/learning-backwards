const memoize = fn => {
  const cache = {}

  return (...args) => {
    const stringifiedArgs = args.join('')

    if (cache[stringifiedArgs]) {
      console.log('From cache: ', cache[stringifiedArgs])
      return cache[stringifiedArgs]
    }

    const result = fn(...args)
    cache[stringifiedArgs] = result

    console.log(result)
    console.log(cache)
    return result
  }
}

const add = (x, y) => x + y
const memoAdd = memoize(add)

memoAdd(1, 2) // 3
memoAdd(2, 1) // 3
memoAdd(1, 2) // From cache: 3

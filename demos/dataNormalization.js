const normalizeById = arr =>
  arr.reduce((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})

module.exports = normalizeById

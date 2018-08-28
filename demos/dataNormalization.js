const normalizeByID = arr =>
  arr.reduce((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})

const beings = [
  { id: 1, name: 'Kyle' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Krios' },
  { id: 4, name: 'Tali' }
]

const beingsByID = normalizeByID(beings)

console.log(beingsByID)

// const fn = x =>
// compose(
//   z => z + 1,
//   y => y + 1
// )(x)
// fn()
// 1

const propId = prop('id')
propId({id: '123', name: 'John'})

// length

// length('ABC') === 3

// Using compose write a function such that:
// const getIdLength({ id: 123456, name: 'Peter'}) === 6

// const getIdLength = x =>
// compose(
//   y => length(y),
//   x => propId(x)
// )(x)
//
// getIdLength({ id: '123456', name: 'Peter' })

// Better way to do it

const getIdLength =
compose(
  length,
  propId
)

getIdLength({ id: '123456', name: 'Peter' })

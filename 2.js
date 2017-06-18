// 2

const pathStreetAddress = path(['address', 'street'])
// pathStreetAddress

const splitAtSpace = split(' ')
// splitAtSpace('Boorea Street') === ['Boorea', 'Street']

// head(['Boorea', 'Street']) === 'Boorea'

head(['Boorea', 'Street'])

const getStreetName =
getStreetName({address: {number:'44', street: 'Dark Alley', suburb: 'Pyrmont', state: 'NSW'}, id: 123456, name: 'Peter' })

const getStreetName =
compose(
  head,
  splitAtSpace,
  pathStreetAddress
)

//
tap(console.log.bind(console)),

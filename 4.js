const add = (a,b) => a + b

add(1, 2)

const add1 = a => (b => a + b)

add1(1)(2)

// prop
// length

{name: 'Tom', surname: 'Jellylegs'}

const PropId = propId('name')
propID({name: 'Tom', surname: "Jellylegs"})

const PropId2 = propId('surname')
propID({name: 'Tom', surname: "Jellylegs"})

const getIdLength =
compose(
  length,
  propId
)

const getIdLength2 =
compose(
  length,
  propId
)

getIdLength({name: 'Tom', surname: 'Jellylegs'})


getIdLength2({name: 'Tom', surname: 'Jellylegs'})

const a = propId('surname') =>

//

const a = propName =>
compose(
  length,
  prop('name')
)

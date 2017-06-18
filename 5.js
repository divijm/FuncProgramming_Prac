map(length)(['One', 'Two', 'Three', 'Four', 'Sixteen', 'FourHundred'])
map(equals(0))({0, 1, 0})

// Write a function that adds 10 to all elements in the array
// [1,2,3,4,5,6,7,8,9]

const add10ToArray = map(add(10))([1,2,3,4,5,6,7,8,9])

const a =
compose(
  map(multiply(2))
  map(add(10))
)

// Write a function that adds the name: 'bob' to all the objects in the array
// [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]

map(assoc('name', 'bob'))([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}])

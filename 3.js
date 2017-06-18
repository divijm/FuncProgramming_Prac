const findJohn = find(propEq('name', 'John'))
// finds John in an array. like the map func
// [{ name: 'sally'}, {name: 'John'}]

const assocSurnameSmith = assoc('surname', 'Smith')
// assocSurnameSmith({ firstName: 'Sally'}) === {firstName: 'Sally', surname: 'Smith'}

const addJohnSurname =
compose(
  assocSurnameSmith,
  tap(console.log.bind(console)),
  findJohn
)

addJohnSurname([{name: 'Bob'}, {name: 'Shine'}, {name: 'John'}])

const addJohnSurname = arr => {
  var john
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === 'John')
    john = arr[i]
    break;
  }
  john.surname = 'Smith'
  return john
}

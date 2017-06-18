reduce((acc, val) => acc + val)(0)([1,2,3,4,5])
// 15

reduce((acc, val) => val > 2 ? acc : append(val, acc), [])([1,2,3,4,5])
// [1,2]

reduce((state, type) =>
type === 'addOne'
? state + 1
: type === 'addTwo'
? state + 2
: state
)(0)(['addOne'])

// Challenge 2

// Create a reducer function that takes two variables 'stateSoFar' and an object with two props {type, data}

myReduxReducer({
  user: {
    name: 'Sally'
  }
})({ type: 'UPDATE_NAME', data: {name: 'Sarah'}}) === {user: {name: 'Sarah'}}

reduce((state, type) =>
  type.type === 'UPDATE_NAME'
?  assocPath(['user', 'name'], type.data.name)(state)
: state
)({
  user:{name: 'Sally'}
})([
  {type: }
])

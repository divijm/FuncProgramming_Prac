compose(
  map(map(map)(a => [a / 12]))),
  map(map(a => [a - 1])),
  map(a => [a * 2]),
  a => [a + 1]
)(1)

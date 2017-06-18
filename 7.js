const mapByReduce = f => reduce(
  (acc, val) => append(f(cur), acc)
)([])

mapByReduce(a => a + 1)([1,2,3]) // === [2,3,4]

const service = require('../service/service')

test('init game should return array of 1 to 100', () => {
  const result = service.init()
  expect(result.length).toBe(100)
  expect(result[0]).toBe(1)
  expect(result[99]).toBe(100)
})

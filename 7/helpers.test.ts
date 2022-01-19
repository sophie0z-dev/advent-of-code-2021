import { getData } from './helpers'

describe('getData', () => {
  test('it should return formatted data', async () => {
    const lines = await getData('./7/testdata.txt')
    expect(lines).toEqual([16, 1, 2, 0, 4, 2, 7, 1, 2, 14])
  })
})

describe('helpers', () => {
  let data

  beforeEach(async () => {
    data = await getData('./7/testdata.txt')
  })
})

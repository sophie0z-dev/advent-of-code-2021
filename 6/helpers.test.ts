import { advanceTime, getData, updateFishTimer } from './helpers'

describe('getData', () => {
  test('it should return formatted data', async () => {
    const lines = await getData('./6/testdata.txt')
    expect(lines).toEqual({ '1': 1, '2': 1, '3': 2, '4': 1 })
  })
})

describe('helpers', () => {
  describe('updateFishTimer', () => {
    test.each([
      [
        { '1': 1, '2': 1, '3': 2, '4': 1 },
        { '0': 1, '1': 1, '2': 2, '3': 1, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0 },
      ],
      [
        { '0': 1, '1': 1, '2': 2, '3': 1, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0 },
        { '0': 1, '1': 2, '2': 1, '3': 0, '4': 0, '5': 0, '6': 1, '7': 0, '8': 1 },
      ],
    ])('%p should return %p', (a, expected) => {
      expect(updateFishTimer(a)).toEqual(expected)
    })
  })

  describe('advanceTime', () => {
    test.each([
      [
        { '1': 1, '2': 1, '3': 2, '4': 1 },
        1,
        { '0': 1, '1': 1, '2': 2, '3': 1, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0 },
      ],
      [
        { '1': 1, '2': 1, '3': 2, '4': 1 },
        2,
        { '0': 1, '1': 2, '2': 1, '3': 0, '4': 0, '5': 0, '6': 1, '7': 0, '8': 1 },
      ],
    ])('%p should return %p', (a, b, expected) => {
      expect(advanceTime(a, b)).toEqual(expected)
    })
  })
})

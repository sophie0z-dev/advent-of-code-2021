import { getData, getFuelForPosition } from './helpers'

describe('getData', () => {
  test('it should return formatted data', async () => {
    const lines = await getData('./7/testdata.txt')
    expect(lines).toEqual([16, 1, 2, 0, 4, 2, 7, 1, 2, 14])
  })
})

describe('helpers', () => {
  const crabs = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

  describe('getFuelForPosition', () => {
    test('returns 37 for position 2', () => {
      expect(getFuelForPosition(crabs, 2, true)).toEqual(37)
    })

    test('returns 41 for position 1', () => {
      expect(getFuelForPosition(crabs, 1, true)).toEqual(41)
    })

    test('returns 206 for position 2', () => {
      expect(getFuelForPosition(crabs, 2, false)).toEqual(206)
    })

    test('returns 168 for position 5', () => {
      expect(getFuelForPosition(crabs, 5, false)).toEqual(168)
    })
  })
})

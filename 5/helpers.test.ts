import { getCoordinates, getData, createMap, Line, Dictionary, countPoints } from './helpers'

describe('getData', () => {
  test('it should return formatted data', async () => {
    const lines = await getData('./5/testdata.txt')
    expect(lines[0]).toEqual({ x1: 0, x2: 5, y1: 9, y2: 9 })
  })
})

describe('helpers', () => {
  let data

  beforeEach(async () => {
    data = await getData('./5/testdata.txt')
  })

  test('getCoordinates - returns points on line', () => {
    expect(getCoordinates({ x1: 0, y1: 9, x2: 9, y2: 9 })).toEqual([
      { x: 0, y: 9 },
      { x: 1, y: 9 },
      { x: 2, y: 9 },
      { x: 3, y: 9 },
      { x: 4, y: 9 },
      { x: 5, y: 9 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
    ])
  })

  describe('createMap', () => {
    test('Gives you a map of all the points', () => {
      const lines: Line[] = [
        { x1: 0, y1: 1, x2: 2, y2: 1 },
        { x1: 1, y1: 2, x2: 1, y2: 0 },
      ]
      const grid: Dictionary<number> = { '0,1': 1, '1,0': 1, '1,1': 2, '1,2': 1, '2,1': 1 }

      expect(createMap(lines)).toEqual(grid)
    })
  })

  describe('countPoints', () => {
    test('returns 5', () => {
      expect(countPoints({ '0,1': 1, '1,0': 1, '1,1': 2, '1,2': 1, '2,1': 1 })).toEqual(1)
    })
  })
})

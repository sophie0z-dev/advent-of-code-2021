import { getData, getFinalPosition, getFinalPositionPart2 } from './helpers'

describe('getData', () => {
  test('it should return formatted data', async () => {
    const data = await getData('./2/testdata.txt')
    expect(data.length).toEqual(6)
    expect(data[0]).toEqual('forward 5')
  })
})

describe('getFinalPosition', () => {
  let data

  beforeEach(async () => {
    data = await getData('./2/testdata.txt')
  })

  test('it should return 7', () => {
    expect(getFinalPosition(data)).toEqual([15, 10])
  })
})

describe('getFinalPositionPart2', () => {
  let data

  beforeEach(async () => {
    data = await getData('./2/testdata.txt')
  })

  test('it should return 7', () => {
    expect(getFinalPositionPart2(data)).toEqual([15, 60])
  })
})

import { getData, countIncreasedMeasurements, getSlidingWindowSum, countIncreasedSums } from './helpers'

describe('getData', () => {
  test('it should return formatted data', async () => {
    const data = await getData('./1/testdata.txt')
    expect(data.length).toEqual(10)
    expect(data[0]).toEqual(199)
  })
})

describe('countIncreasedMeasurements', () => {
  let data

  beforeEach(async () => {
    data = await getData('./1/testdata.txt')
  })

  test('it should return 7', () => {
    expect(countIncreasedMeasurements(data)).toEqual(7)
  })
})

describe('getSlidingWindowSum', () => {
  test.each([
    [[199, 200, 208], 607],
    [[200, 208, 210], 618],
  ])(`Values %p should sum to %p`, (a, expected) => {
    expect(getSlidingWindowSum(a)).toEqual(expected)
  })
})

describe('countIncreasedSums', () => {
  let data

  beforeEach(async () => {
    data = await getData('./1/testdata.txt')
  })

  test('Should return 5', () => {
    expect(countIncreasedSums(data)).toEqual(5)
  })
})

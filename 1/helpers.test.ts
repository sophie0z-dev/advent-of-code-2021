import { getData, countIncreasedMeasurements } from "./helpers"

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
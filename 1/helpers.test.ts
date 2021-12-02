import { getData } from "./helpers"

describe('getData', () => {
    test('it should return formatted data', async () => {
        const data = await getData('./1/testdata.txt')
        expect(data.length).toEqual(10)
        expect(data[0]).toEqual(199)
    })
})
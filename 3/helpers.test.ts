import { getData, getGammaRate, getMostCommonBit, getEpsilonRate } from "./helpers"

describe('getData', () => {
    test('it should return formatted data', async () => {
        const data = await getData('./3/testdata.txt')
        expect(data.length).toEqual(12)
        expect(data[0]).toEqual('00100')
    })
})

describe('getMostCommonBit',() => {
    let data

    beforeEach(async () => {
        data = await  getData('./3/testdata.txt')
    })

    test('Should return "1" for first column in data', () => {
        expect(getMostCommonBit(0, data)).toEqual('1')
    })

    test('Should return "0" for second column in data', () => {
        expect(getMostCommonBit(1, data)).toEqual('0')
    })
})

describe('getGammaRate', () => {
    let data

    beforeEach(async () => {
        data = await  getData('./3/testdata.txt')
    })

    test('Should return "10110" for gamma rate', () => {
        expect(getGammaRate(data)).toEqual("10110")
    })
})


describe('getEpsilonRate', () => {
    let data

    beforeEach(async () => {
        data = await  getData('./3/testdata.txt')
    })

    test('Should return "01001" for gamma rate', () => {
        expect(getEpsilonRate('10110')).toEqual("01001")
    })
})
import { getData, getGammaRate, getMostCommonBit, getEpsilonRate, getOxygenGeneratorRating, getCO2ScrubberRating } from "./helpers"

describe('getData', () => {
    test('it should return formatted data', async () => {
        const data = await getData('./3/testdata.txt')
        expect(data.length).toEqual(12)
        expect(data[0]).toEqual('00100')
    })
})

describe('helpers', () => {
    let data

    beforeEach(async () => {
        data = await  getData('./3/testdata.txt')
    })

    describe('getMostCommonBit',() => {
        test('Should return "1" for first column in data', () => {
            expect(getMostCommonBit(0, data)).toEqual('1')
        })
    
        test('Should return "0" for second column in data', () => {
            expect(getMostCommonBit(1, data)).toEqual('0')
        })
    })

    describe('getGammaRate', () => {
        test('Should return "10110" for gamma rate', () => {
            expect(getGammaRate(data)).toEqual("10110")
        })
    })

    describe('getEpsilonRate', () => {
        test('Should return "01001" for epsilon rate', () => {
            expect(getEpsilonRate('10110')).toEqual("01001")
        })
    })

    describe ('getOxygenGeneratorRating', () => {
        test('Should return "10111" for oxygen generator rate', () => {
            expect(getOxygenGeneratorRating(data)).toEqual("10111")
        })
    })

    describe ('getCO2ScrubberRating', () => {
        test('Should return "01010" for CO2 scrubber rate', () => {
            expect(getCO2ScrubberRating(data)).toEqual("01010")
        })
    })
})

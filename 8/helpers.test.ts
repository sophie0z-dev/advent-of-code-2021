import { getDisplay, parseData } from './helpers'

describe('getDisplay', () => {
  const data = parseData('acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf')

  test('returns display', () => {
    expect(getDisplay(data[0])).toEqual({
      top: 'd',
      middle: 'f',
      bottom: 'c',
      topLeft: 'e',
      topRight: 'a',
      bottomLeft: 'g',
      bottomRight: 'b',
    })
  })
})

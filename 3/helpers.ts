import * as fs from 'fs'
import { PathLike } from 'graceful-fs'

export const getData = async (fileName?: PathLike): Promise<string[]> => {
  const path: PathLike = fileName || './3/data.txt'
  let rawData

  try {
    rawData = await fs.promises.readFile(path, { encoding: 'utf-8' })
  } catch (e) {
    console.log('🔥', e)
  }
  const formattedData = rawData.split('\n').filter((x) => x)

  return formattedData
}

export const getMostCommonBit = (columnIndex: number, data: string[]): string => {
  let count0Bits = 0
  let count1Bits = 0

  data.map((x) => {
    const character = x.charAt(columnIndex)

    if (character === '0') count0Bits++
    if (character === '1') count1Bits++
  })

  if (count0Bits > count1Bits) return '0'

  return '1'
}

export const getGammaRate = (data: string[]): string => {
  let columnIndex = 0
  let gammaRate = ''

  while (columnIndex < data[0].length) {
    gammaRate += getMostCommonBit(columnIndex, data)
    columnIndex++
  }

  return gammaRate
}

export const getEpsilonRate = (gammaRate: string): string => {
  return gammaRate
    .split('')
    .map((x) => switchBit(x))
    .join('')
}

export const getOxygenGeneratorRating = (data: string[]): string => {
  let columnIndex = 0
  let oxygenGeneratorRating = ''

  while (columnIndex < data[0].length) {
    if (data.filter((x) => x.startsWith(oxygenGeneratorRating)).length === 1) {
      return data.filter((x) => x.startsWith(oxygenGeneratorRating))[0]
    }

    if (oxygenGeneratorRating) {
      oxygenGeneratorRating += getMostCommonBit(
        columnIndex,
        data.filter((x) => x.startsWith(oxygenGeneratorRating)),
      )
    } else {
      oxygenGeneratorRating += getMostCommonBit(columnIndex, data)
    }

    columnIndex++
  }

  return oxygenGeneratorRating
}

export const switchBit = (bit: string): string => {
  if (bit === '0') return '1'
  return '0'
}

export const getLeastCommonBit = (columnIndex: number, data: string[]): string => {
  let count0Bits = 0
  let count1Bits = 0

  data.map((x) => {
    const character = x.charAt(columnIndex)

    if (character === '0') count0Bits++
    if (character === '1') count1Bits++
  })

  if (count1Bits < count0Bits) return '1'

  return '0'
}

export const getCO2ScrubberRating = (data: string[]): string => {
  let columnIndex = 0
  let cO2ScrubberRating = ''

  while (columnIndex < data[0].length) {
    if (data.filter((x) => x.startsWith(cO2ScrubberRating)).length === 1) {
      return data.filter((x) => x.startsWith(cO2ScrubberRating))[0]
    }

    if (cO2ScrubberRating) {
      cO2ScrubberRating += getLeastCommonBit(
        columnIndex,
        data.filter((x) => x.startsWith(cO2ScrubberRating)),
      )
    } else {
      cO2ScrubberRating += getLeastCommonBit(columnIndex, data)
    }
    columnIndex++
  }

  return cO2ScrubberRating
}

import * as fs from 'fs'
import { PathLike } from 'graceful-fs'

// this is a promise
// this is an arrow function in javascript
export const getData = async (fileName?: PathLike): Promise<number[]> => {
  const path: PathLike = fileName || 'data.txt'
  let rawData

  try {
    rawData = await fs.promises.readFile(path, { encoding: 'utf-8' })
  } catch (e) {
    console.log('🔥', e)
  }
  const formattedData = rawData
    .split('\n')
    .filter((x) => x)
    .map((x) => parseInt(x))

  return formattedData
}

export const countIncreasedMeasurements = (data: number[]): number => {
  let count = 0

  data.map((x, index) => {
    if (x < data[index + 1]) {
      count++
    }
  })

  return count
}

export const getSlidingWindowSum = (values: number[]): number => {
  return values.reduce((acc, cur) => acc + cur, 0)
}

export const countIncreasedSums = (data: number[]): number => {
  const sums = []

  data.map((x, index) => {
    sums.push(getSlidingWindowSum(data.slice(index, index + 3)))
  })

  return countIncreasedMeasurements(sums)
}

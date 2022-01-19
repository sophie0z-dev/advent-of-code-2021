import * as fs from 'fs'
import { PathLike } from 'graceful-fs'

export const getData = async (fileName?: PathLike): Promise<String[]> => {
  const path: PathLike = fileName || 'data.txt'
  let rawData

  try {
    rawData = await fs.promises.readFile(path, { encoding: 'utf-8' })
  } catch (e) {
    console.log('🔥', e)
  }
  const formattedData = rawData.split('\n').filter((x) => x)

  return formattedData
}

export const getFinalPosition = (data: String[]): number[] => {
  let horizontal = 0
  let depth = 0

  data.map((x) => {
    const direction = x.split(' ')[0]
    const value = parseInt(x.split(' ')[1])

    switch (direction) {
      case 'forward':
        horizontal += value
        break

      case 'up':
        depth -= value
        break

      case 'down':
        depth += value
        break
    }
  })

  return [horizontal, depth]
}

export const getFinalPositionPart2 = (data: String[]): number[] => {
  let horizontal = 0
  let depth = 0
  let aim = 0

  data.map((x) => {
    const direction = x.split(' ')[0]
    const value = parseInt(x.split(' ')[1])

    switch (direction) {
      case 'forward':
        horizontal += value

        if (aim > 0) {
          depth += aim * value
        }

        break

      case 'up':
        aim -= value
        break

      case 'down':
        aim += value
        break
    }
  })

  return [horizontal, depth]
}

import * as fs from 'fs'
import { PathLike } from 'graceful-fs'
import _ from 'lodash'

export type Dictionary<Type> = { [key: string]: Type }

export const getData = async (fileName?: PathLike): Promise<Dictionary<number>> => {
  const path: PathLike = fileName || './6/data.txt'
  const rawData = await fs.promises.readFile(path, { encoding: 'utf-8' })

  return _.countBy(
    rawData
      .split('\n')[0]
      .split(',')
      .map((x) => parseInt(x)),
  )
}

export const updateFishTimer = (fishTimers: Dictionary<number>): Dictionary<number> => {
  const newFishCount = fishTimers['0']

  return {
    '0': fishTimers['1'] || 0,
    '1': fishTimers['2'] || 0,
    '2': fishTimers['3'] || 0,
    '3': fishTimers['4'] || 0,
    '4': fishTimers['5'] || 0,
    '5': fishTimers['6'] || 0,
    '6': newFishCount + fishTimers['7'] || 0,
    '7': fishTimers['8'] || 0,
    '8': fishTimers['0'] || 0,
  }
}

export const advanceTime = (fishTimers: Dictionary<number>, days: number): Dictionary<number> => {
  let timers = fishTimers

  for (let i = 0; i < days; i++) {
    timers = updateFishTimer(timers)
  }

  return timers
}

import * as fs from 'fs'
import { PathLike } from 'graceful-fs'
import _ from 'lodash'

export type Dictionary<Type> = { [key: string]: Type }

interface SignalPattern {
  characterCount: number
  pattern: string
}

export interface Entry {
  uniqueSignalPatterns: SignalPattern[]
  digitOutput: [SignalPattern, SignalPattern, SignalPattern, SignalPattern]
}

export interface Display {
  top: string
  middle: string
  bottom: string
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
}

export const getData = async (fileName?: PathLike): Promise<Entry[]> => {
  const path: PathLike = fileName || './8/data.txt'
  const rawData = await fs.promises.readFile(path, { encoding: 'utf-8' })

  return parseData(rawData)
}

export const parseData = (rawData: string) =>
  rawData.split('\n').map((x): Entry => {
    const [signals, digits] = x.split(' | ')

    return {
      uniqueSignalPatterns: signals.split(' ').map(
        (signal): SignalPattern => ({
          characterCount: signal.length,
          pattern: signal,
        }),
      ),

      digitOutput: digits.split(' ').map(
        (signal): SignalPattern => ({
          characterCount: signal.length,
          pattern: signal,
        }),
      ) as [SignalPattern, SignalPattern, SignalPattern, SignalPattern],
    }
  })

export const solve = (entries: Entry[]): number => {
  let count = 0
  const characterCounts = [2, 3, 4, 7]

  for (const entry of entries) {
    count += entry.digitOutput.filter((value) => characterCounts.includes(value.characterCount)).length
  }

  return count
}

export const getDisplay = (entry: Entry): Display => {
  const display = {
    top: null,
    middle: null,
    bottom: null,
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
  }

  const one = entry.uniqueSignalPatterns.find((signal) => signal.characterCount === 2)
  const four = entry.uniqueSignalPatterns.find((signal) => signal.characterCount === 4)
  const seven = entry.uniqueSignalPatterns.find((signal) => signal.characterCount === 3)
  const eight = entry.uniqueSignalPatterns.find((signal) => signal.characterCount === 7)

  display.top = _.difference(seven.pattern.split(''), one.pattern.split(''))[0]
  display.bottom = _.difference(
    _.difference(eight.pattern.split(''), [
      ...seven.pattern.split(''),
      ...one.pattern.split(''),
      ...four.pattern.split(''),
    ]),
    four.pattern.split(''),
  )

  console.log({
    eight: eight.pattern.split(''),
    combined: [...seven.pattern.split(''), ...one.pattern.split(''), ...four.pattern.split('')],
  })

  return display
}

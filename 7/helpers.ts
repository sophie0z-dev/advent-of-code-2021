import * as fs from 'fs'
import { PathLike } from 'graceful-fs'
import _ from 'lodash'

export type Dictionary<Type> = { [key: string]: Type }

export const getData = async (fileName?: PathLike): Promise<Array<number>> => {
  const path: PathLike = fileName || './7/data.txt'
  const rawData = await fs.promises.readFile(path, { encoding: 'utf-8' })

  return rawData
    .split('\n')[0]
    .split(',')
    .map((x) => parseInt(x))
}

export const getFuelForPosition = (crabPositions: number[], position: number, simple: boolean): number => {
  return crabPositions
    .map((crab) => (simple ? Math.abs(crab - position) : calculateFuel(crab, position)))
    .reduce((prev, curr) => prev + curr, 0)
}

export const findCheapestPosition = (crabPositions: number[], simple: boolean): number | undefined => {
  const min = Math.min(...crabPositions)
  const max = Math.max(...crabPositions)

  let cheapest

  for (let i = min; i <= max; i++) {
    const fuel = getFuelForPosition(crabPositions, i, simple)

    if (!cheapest) cheapest = fuel

    if (fuel < cheapest) cheapest = fuel
  }

  return cheapest
}

export const calculateFuel = (crab: number, position: number): number => {
  const steps = Math.abs(crab - position)

  return (steps ** 2 + steps) / 2
}

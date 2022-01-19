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

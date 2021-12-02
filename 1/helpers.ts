import * as fs from "fs"
import { PathLike } from 'graceful-fs'

//this is a promise
//this is an arrow function in javascript
export const getData = async (fileName?:PathLike): Promise<number[]> => {
    const path:PathLike = fileName || './1/data.txt'
    const rawData = await fs.promises.readFile(path, {encoding:'utf-8'})
    const formattedData = rawData.split('\n').filter(x => x).map(x => parseInt(x))

    return formattedData
}


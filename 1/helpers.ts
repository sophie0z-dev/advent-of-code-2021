import * as fs from "fs"
import { PathLike } from 'graceful-fs'

//this is a promise
//this is an arrow function in javascript
export const getData = async (fileName?:PathLike): Promise<number[]> => {
    const path:PathLike = fileName || 'data.txt'
    let rawData

    try {
        rawData = await fs.promises.readFile(path, {encoding:'utf-8'})
    } catch (e) {
        console.log('🔥', e)
    }
    const formattedData = rawData.split('\n').filter(x => x).map(x => parseInt(x))

    return formattedData
}
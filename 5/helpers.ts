import * as fs from "fs"
import { PathLike } from 'graceful-fs'
import _ from 'lodash'

export interface Line {
    x1: number
    y1: number
    x2: number
    y2: number
}

export interface Point {
    x: number
    y: number
}

export type Dictionary<Type> = { [key: string]: Type }

export const getData = async (fileName?:PathLike): Promise<Line[]> => {
    const path:PathLike = fileName || './5/data.txt'
    const rawData = await fs.promises.readFile(path, {encoding:'utf-8'})

    return rawData.split('\n').map(row => {
        const [x1, y1, x2, y2] = row.replace(' -> ',',').split(',').map(x => parseInt(x))
        return {x1, y1, x2, y2}
    })
}

export const createMap = (lines:Line[]):Dictionary<number> => {
    let map: Dictionary<number> = {}

    lines.forEach((line) => {
        const coordinates = getCoordinates(line)
        
        coordinates.forEach((coordinate) => {
            const {x, y} = coordinate
            
            if (!map[`${x},${y}`]) {
                map[`${x},${y}`] = 1
            } else {
                map[`${x},${y}`]++
            }
        })

    })

    return map
}

export const getCoordinates = (line:Line):Point[] => {
    const {x1, y1, x2, y2} = line

    if (x2 - x1 === 0){
        // vertical line
        const min = Math.min(y1, y2)
        const max = Math.max(y1, y2)

        return _.range(min, max + 1).map(y => ({x:x1, y}))

    } else if (y2 - y1 === 0){
        const min = Math.min(x1, x2)
        const max = Math.max(x1, x2)

        return _.range(min, max + 1).map(x => ({x, y:y1}))

    } else {
        // diagonal line
        return []
    }
}

export const countPoints = (counts: Dictionary<number>):number => {
    return Object.values(counts).filter(count => count >= 2).length
}
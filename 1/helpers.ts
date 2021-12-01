import {readFile} from 'fs/promises'

//this is a promise
//this is an arrow function in javascript
export const getData = async (fileName) => {
    const path = fileName || './1/testdata.txt'
    const rawData = await readFile(path)
}


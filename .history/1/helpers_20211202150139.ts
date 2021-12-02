//this is a promise
import * as fs from 'fs'


//this is an arrow function in javascript
//export is there to be able to use it from anywhere else in our code and we will test it by importing it 
//into our test file
//an asyncornys function will return a promise so we will have to wait for that promise to finish 
// so we have to make sure the promise has finished
export const getData = async (fileName) => {
    //going in to testdata to get the data so we need a path
    const path = fileName || './1/testdata.txt'
    //this one is for waiting for the promise to finish
    //fs promises gets looked up with readfile when using jest
    const rawData = await fs.promises.readFile(path,{encoding:"utf-8"})
    console.log(rawData)
    //using the split function to slpit up our raw data into managable pieces
    const data = rawData.split("\n")
    return

}



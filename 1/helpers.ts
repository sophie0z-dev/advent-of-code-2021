//this is a promise
import * as fs from 'fs'
import { PathLike } from 'graceful-fs'

//this is an arrow function in javascript
//export is there to be able to use it from anywhere else in our code and we will test it by importing it 
//into our test file
//an asyncornys function will return a promise so we will have to wait for that promise to finish 
// so we have to make sure the promise has finished
export const getData = async (fileName?:PathLike):Promise<number[]> => {
    //going in to testdata to get the data so we need a path
    const path = fileName || './1/testdata.txt'
    //this one is for waiting for the promise to finish
    //fs promises gets looked up with readfile when using jest
    const rawData = await fs.promises.readFile(path,{encoding:"utf-8"})
    //using the split function to slpit up our raw data into managable pieces
    //.filter goes through every item in your array and based on some condition passed into it and if that condition is 
    //true then it makes a copy of your array long with all the values that return true
    //x=>x we are spliting and every new line and the last line is empty so it returns falsy
    //the condition that we are feeding into our filter is just if it exists. if it exists it gets copied into the array. if it is just an empty line it 
    //won't be copied into the array because it doesn't exist
    const data = rawData.split("\n").filter(x=>x).map(x=>parseInt(x));

    return data

}
//making our function
export const countIncreasedMeasurements = (data:number[]):number => {
//counting 
    let count = 0
    //for loop counting the data increases
    for(var i=0; i<= data.length -1; i++){
        //if the data number it greater than the one before it then we count one time
        if(data[i]>data[i-1]){
            count++
        }
        
    }
    return count

}



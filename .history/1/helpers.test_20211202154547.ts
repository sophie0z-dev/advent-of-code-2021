import { getData, countIncreasedMeasurements} from "./helpers"
//normally you'd want to write a function that was just in charge of doing one thing at one time
//and you just want to give it one thing at a time so to isolate problems
//a describe block is a function or a scenario depending on what you want to test
//if this block we know that this block is going to test the get data function
describe('getData', () => {
    test('it should return formatted data', async () => {
        //whenever theres an await, that means theres a promise. promising the returned data
        const data = await getData('./1/testdata.txt')
        //.length is a property that only arrays will have so that means that data is going to be an array
        //.length is the number of items in an array so we know this data will have ten items in it from .toequal
        expect(data.length).toEqual(10)
        //this will grab the first item in the array and test to make sure
        expect(data[0]).toEqual(199)
    })
})
//describe is the test, in describe blocks if you need data before you test runs
//decribe block sets up and cleans up your data before running the actual test
describe('countIncreasedMeasurements', () => {
    //this is let because its set in the describe block if we did a const then line 24 wouldn't have access to it
    let data
    // jest is what runs our tests and describe and beforeEach are part of jest
    beforeEach(async () => {
        //here we have a promise getdata
        data = await getData('./1/testdata.txt')
    })

    test('it should return 7', () => {
        //expect means that when our function runs with our test dat it should equal 7 
        expect(countIncreasedMeasurements(data)).toEqual(7)
    })
})

// describe('getSlidingWindowSum', () => {
//     test.each([
//         [[199, 200, 208], 607],
//         [[200, 208, 210], 618]
//     ])(`Values %p should sum to %p`, (a, expected) =>{
//         expect(getSlidingWindowSum(a)).toEqual(expected)
//     })
// })

// describe('countIncreasedSums', () => {
//     let data

//     beforeEach(async () => {
//         data = await getData('./1/testdata.txt')
//     })

//     test('Should return 5',() => {
//         expect(countIncreasedSums(data)).toEqual(5)
//     })
// })
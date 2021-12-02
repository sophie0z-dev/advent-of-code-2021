//we are importing things from the helpers file to run through the data
import { getData, countIncreasedMeasurements } from "./helpers"
//because we have the await, the main function is now async
const main = async() => {
    const data = await getData("")
    const answerIncrease = countIncreasedMeasurements(data)
    
    
    console.log('🧡', answerIncrease)
}

main()
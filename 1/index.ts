import { getData, countIncreasedMeasurements } from "./helpers"

const main = async () => {
    const data = await getData()
    const answerPart1 = countIncreasedMeasurements(data)
    console.log('🧡', answerPart1)
}

main()
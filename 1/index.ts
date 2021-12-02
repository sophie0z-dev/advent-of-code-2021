import { getData, countIncreasedMeasurements, countIncreasedSums } from "./helpers"

const main = async () => {
    const data = await getData()
    const answerPart1 = countIncreasedMeasurements(data)
    console.log('🧡', answerPart1)

    const answerPart2 = countIncreasedSums(data)
    console.log('🌼', answerPart2)
}

main()
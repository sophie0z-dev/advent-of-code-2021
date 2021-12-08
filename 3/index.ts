import { getCO2ScrubberRating, getData, getEpsilonRate, getGammaRate, getOxygenGeneratorRating } from "./helpers"

const main = async () => {
    const data = await getData()
    const gammaRate = getGammaRate(data)
    const epsilonRate = getEpsilonRate(gammaRate)
    const answerPart1 = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
    console.log('🧡', answerPart1)

    const answerPart2 = parseInt(getOxygenGeneratorRating(data), 2) * parseInt(getCO2ScrubberRating(data), 2)
    console.log('🍋', answerPart2)
}

main()
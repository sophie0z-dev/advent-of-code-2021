import { getData, getFinalPosition, getFinalPositionPart2 } from "./helpers"

const main = async () => {
    const data = await getData()
    const [horizontal, depth] = getFinalPosition(data)
    const answerPart1 = horizontal*depth
    console.log('🧡', answerPart1)

    const [horizontal2, depth2] = getFinalPositionPart2(data)
    const answerPart2 = horizontal2*depth2
    console.log('🍋', answerPart2)

}

main()
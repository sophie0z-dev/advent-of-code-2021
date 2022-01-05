import { advanceTime, getData } from "./helpers"

const main = async () => {
    const data = await getData()
    console.log('🌼 answer part 1 = ', Object.values(advanceTime(data, 80)).reduce((prevValue, curValue) => prevValue + curValue))
    console.log('🐟 answer part 2 = ', Object.values(advanceTime(data, 256)).reduce((prevValue, curValue) => prevValue + curValue))
}

main()
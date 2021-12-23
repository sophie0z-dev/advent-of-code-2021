import { countPoints, createMap, getCoordinates, getData} from "./helpers"

const main = async () => {
    const data = await getData()
    const count = countPoints(createMap(data))
    console.log('🌼 answer part 1 = ', count)
}

main()
import { findCheapestPosition, getData } from './helpers'

const main = async () => {
  const data = await getData()
  console.log('🦀 answer part 1 = ', findCheapestPosition(data, true))
  console.log('🦀🦀 answer part 2 = ', findCheapestPosition(data, false))
}

main()

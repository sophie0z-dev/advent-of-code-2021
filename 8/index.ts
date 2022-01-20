import { getData, solve } from './helpers'

const main = async () => {
  const data = await getData()
  console.log('🤖 answer part 1 = ', solve(data))
  console.log('🤖🤖 answer part 2 = ')
}

main()

import { findWinningBoards, getData, playBingo, Board, calculateFinalScore } from './helpers'

const main = async () => {
  const { boards: originalBoards, calledNumbers } = await getData()
  let winningBoards: Board[] = []
  let boards = originalBoards
  let i = 0

  while (winningBoards.length < originalBoards.length) {
    boards = playBingo(boards, calledNumbers[i])
    winningBoards = [...winningBoards, ...findWinningBoards(boards)]
    i++
  }

  const firstWinner = winningBoards[0] // Part 1
  const lastWinner = winningBoards[winningBoards.length - 1] // Part 2

  console.log('🧡', calculateFinalScore(firstWinner, calledNumbers[i - 1]))
  console.log('🍕', calculateFinalScore(lastWinner, calledNumbers[i - 1]))
}

main()

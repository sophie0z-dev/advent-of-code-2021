import * as fs from "fs"
import { PathLike } from 'graceful-fs'

export interface BoardNumber {
    number: number
    marked: boolean
}

export interface Board {
    boardNumbers: BoardNumber[]
    hasWon: boolean
}

export const getData = async (fileName?:PathLike): Promise<{boards: Board[], calledNumbers: number[]}> => {
    const path:PathLike = fileName || './4/data.txt'
    let rawData
    const boards = []

    try {
        rawData = await fs.promises.readFile(path, {encoding:'utf-8'})
    } catch (e) {
        console.log('🔥', e)
    }
    
    const splitData = rawData.split('\n\n').filter(x => x)
    const calledNumbers = splitData[0].split(',').map(x => parseInt(x))

    splitData.slice(1).map(x => {
        let board: Board = { boardNumbers: [], hasWon: false }
        x.split('\n').map(y => {
            y.split(' ').filter(value => value).map(z => board.boardNumbers.push({number: parseInt(z), marked: false}))
            
        })

        boards.push(board)
    })

    return {boards, calledNumbers}
}

export const markBoard = (board:Board, value:number): Board => {
    const index = board.boardNumbers.findIndex(boardNumber => boardNumber.number === value)

    if (index >= 0) {
        board.boardNumbers[index].marked = true
    }

    return board
}

export const checkBoard = (board:Board): boolean => {
    for (let i=0; i<5; i++) {
        const row = board.boardNumbers.slice(i*5, i * 5 + 5)
        const marked = row.filter(x => x.marked === true).length
        if(marked === 5) return true
    }

    for (let i=0; i<5; i++) {
        const column = [board.boardNumbers[i], board.boardNumbers[i+5], board.boardNumbers[i+10], board.boardNumbers[i+15], board.boardNumbers[i+20]]
        const marked = column.filter(x => x.marked === true).length
        if(marked === 5) return true
    }

    return false
}

export const findWinningBoards = (boards:Board[]): Board[] => {
    const newWinners = []
    
    boards.forEach(board => {
        if (!board.hasWon && checkBoard(board)) {
            board.hasWon = true
            newWinners.push(board)
        }
    })

    return newWinners

    // const boardsThatHaveNotAlreadyWon = boards.filter(board => !board.hasWon)
    // const boardsThatHaveNowWon = boardsThatHaveNotAlreadyWon.filter(checkBoard)
    
    // return boardsThatHaveNowWon
}

export const playBingo = (boards:Board[], calledNumber:number): Board[] => {
    return boards.map(board => markBoard(board, calledNumber))
}

export const calculateFinalScore = (board:Board, lastCalled:number): number => {
    const unmarkedNumbers = board.boardNumbers.filter(x => x.marked === false).map(boardNumber => boardNumber.number)

    return unmarkedNumbers.reduce((acc, cur) => acc + cur, 0) * lastCalled
}

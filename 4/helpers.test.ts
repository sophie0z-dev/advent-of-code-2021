import { getData, markBoard, Board, BoardNumber, checkBoard } from "./helpers"

describe('getData', () => {
    test('it should return formatted data', async () => {
        const {boards, calledNumbers} = await getData('./4/testdata.txt')
        expect(calledNumbers).toEqual([7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1])
        expect(boards[0][0]).toEqual({number: 22, marked:false})
    })
})

describe('helpers', () => {
    let data

    beforeEach(async () => {
        data = await getData('./4/testdata.txt')
    })

   describe('markBoard', () => {
       test('should update marked value if board has boardNumber', () => {
            const board:Board = {boardNumbers:[{number:22, marked: false}], hasWon: false}

            expect(markBoard(board, 22)).toEqual([{number:22, marked: true}])
       })

       test('should NOT update marked value if board doesnt have boardNumber', () => {
        const board:Board = {boardNumbers:[{number:33, marked: false}], hasWon: false}

        expect(markBoard(board, 22)).toEqual({boardNumbers:[{number:33, marked: false}], hasWon:false})
       })
   })

   describe('checkBoard', () => {
       test('should return true if board has a marked row', () => {
           const board:Board = {boardNumbers:new Array(25).fill(null).map((x:BoardNumber, i:number) => ({number: i, marked: i < 5})), hasWon: false}
           
           expect(checkBoard(board)).toEqual(true)
       })
       
       test('should return false if board does not have a marked row', () => {
           const board:Board = {boardNumbers:new Array(25).fill(null).map((x:BoardNumber, i:number) => ({number: i, marked: false})), hasWon: false}
           
           expect(checkBoard(board)).toEqual(false)
        })

        test('should return true if board has a marked column', () => {
            const board:Board = {boardNumbers:new Array(25).fill(null).map((x:BoardNumber, i:number) => ({number: i, marked: i%5 === 0})), hasWon: false}
            
            expect(checkBoard(board)).toEqual(true)
        })
        
        test('should return false if board does not have a marked column', () => {
            const board:Board = {boardNumbers:new Array(25).fill(null).map((x:BoardNumber, i:number) => ({number: i, marked: false})), hasWon: false}
            
            expect(checkBoard(board)).toEqual(false)
         })
   })
})

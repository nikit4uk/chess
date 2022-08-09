import Pieces from "./Pieces";
import Tile from "../components/Board/Tile/Tile"
import Board from "../components/Board/Board";
import availableMove from "../assets/move.png"
import moveAtack from "../assets/moveAtack.png"

function pieceAvailableMove(availableMoveX, availableMoveY) {
    const tileHasPiece = Pieces.some(p => p.x === availableMoveX && p.y === availableMoveY);
    if(!tileHasPiece) {
        Pieces.push({name: 'availableMove', x: availableMoveX, y: availableMoveY, icon2: availableMove});                
    }
}

function pieceAvailableAtack(availableAtackX, availableAtackY) {
    const tileHasPiece = Pieces.some(p => p.x === availableAtackX && p.y === availableAtackY);
    if(tileHasPiece) {
        let image = undefined;
        Pieces.forEach(p => {
            if(p.x === availableAtackX && p.y === availableAtackY) {
                image = p.icon
            }
        })
        Pieces.push({name: 'moveAtack', x: availableAtackX, y: availableAtackY, icon: image, icon2: moveAtack});                
    }
}

function pieceNewPosition(e, i, j){
    // const currentTile = document.querySelector('.cursor').parentElement;
    // const tileImg = currentTile.querySelector('img');

    // if(tileImg.alt == 'availableMove'){
    //     console.log(e, i, j)
    //     const startPieceX = i;
    //     const startPieceY = j;
    //     if(e.keyCode === 0x0D) {
    //         Pieces.forEach(p => {
    //             if(p.x === startPieceX && p.y === startPieceY) {
    //                 startPieceX++
    //             }
    //         })
    //     }
    // }
    console.log(i, j )
    j++
}

function wPawnMovement(x, y) {

    let availableMoveCursorX = x;
    let availableMoveCursorY1 = y + 1;
    let availableMoveCursorY2 = y + 2;
    let availableMoveAtackCursorX1 = x - 1;
    let availableMoveAtackCursorX2 = x + 1;
    let availableMoveAtackCursorY = y + 1;
    
    
    Pieces.forEach(p => {
        if(p.x === x && p.y === y) {
            pieceAvailableMove(availableMoveCursorX, availableMoveCursorY1);
            pieceAvailableMove(availableMoveCursorX, availableMoveCursorY2);
            pieceAvailableAtack(availableMoveAtackCursorX1, availableMoveAtackCursorY);
            pieceAvailableAtack(availableMoveAtackCursorX2, availableMoveAtackCursorY);
            let startPieceX = p.x;
            let startPieceY = p.y;
            pieceNewPosition("keydown", startPieceX, startPieceY);

        }
    })
}

function bPawnMovement(x, y) {
    
    Pieces.forEach(p => {
        if(p.x === x && p.y === y) {
            p.y--
        }
    })
}

export {wPawnMovement, bPawnMovement, pieceNewPosition};
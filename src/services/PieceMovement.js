import Pieces from "./Pieces";
import availableMove from "../assets/move.png";
import moveAtack from "../assets/moveAtack.png";

function pieceAvailableMove(availableMoveX, availableMoveY) {
    const tileHasPiece = Pieces.some(p => p.x === availableMoveX && p.y === availableMoveY);
    if(!tileHasPiece) {
        Pieces.push({name: 'availableMove', x: availableMoveX, y: availableMoveY, icon2: availableMove});
        return true;              
    } else {
        return false;
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
        });
        Pieces.push({name: 'moveAtack', x: availableAtackX, y: availableAtackY, icon: image, icon2: moveAtack});                
    }
}

function pieceNewPosition(newPositionX, newPositionY){
    Pieces.splice(20); // Remove image move

    Pieces.forEach((p, index) => { // Remove atack piece
        if(p.x === newPositionX && p.y === newPositionY){
            delete Pieces[index];
        }
    });

    Pieces.forEach(p => { // New position
        if(p.active === true){
            p.x = newPositionX;
            p.y = newPositionY;

            Pieces.slice(p);
            Pieces.push(p);
        }
        
        p.active = false;
    });
}

function wPawnMovement(x, y) {

    let availableMoveCursorX = x;
    let availableMoveCursorY1 = y + 1;
    let availableMoveCursorY2 = y + 2;
    let availableMoveAtackCursorX1 = x - 1;
    let availableMoveAtackCursorX2 = x + 1;
    let availableMoveAtackCursorY = y + 1;

    Pieces.splice(20);
    
    Pieces.forEach(p => {
        p.active = false;
        if(p.x === x && p.y === y) {
            p.active = true;
            pieceAvailableMove(availableMoveCursorX, availableMoveCursorY1);
            if(p.movementCount === 0){
                if(pieceAvailableMove(availableMoveCursorX, availableMoveCursorY1) === true){
                    console.log(pieceAvailableMove(availableMoveCursorX, availableMoveCursorY1))
                    pieceAvailableMove(availableMoveCursorX, availableMoveCursorY2);
                }
            }
            pieceAvailableAtack(availableMoveAtackCursorX1, availableMoveAtackCursorY);
            pieceAvailableAtack(availableMoveAtackCursorX2, availableMoveAtackCursorY);
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
import BP from "../assets/bp.png"
import BK from "../assets/bk.png"
import BN from "../assets/bn.png"
import BB from "../assets/bb.png"
import WP from "../assets/wp.png"
import WK from "../assets/wk.png"
import WN from "../assets/wn.png"
import WB from "../assets/wb.png"

const Pieces = [];

for(let i = 0; i < 5; i++){
      Pieces.push({name: 'wPawn', pieceColor: 'white', x: i, y: 1, icon: WP, active: false, movementCount: 0})
  }
  for(let i = 0; i < 5; i++){
      Pieces.push({name: 'bPawn', pieceColor: 'black', x: i, y: 3, icon: BP, active: false, movementCount: 0})
  }

  Pieces.push({name: 'wKing', pieceColor: 'white', x: 2, y: 0, icon: WK, active: false, movementCount: 0})
  Pieces.push({name: 'wKnight', pieceColor: 'white', x: 0, y: 0, icon: WN, active: false, movementCount: 0})
  Pieces.push({name: 'wKnight', pieceColor: 'white', x: 4, y: 0, icon: WN, active: false, movementCount: 0})
  Pieces.push({name: 'wBishop', pieceColor: 'white', x: 1, y: 0, icon: WB, active: false, movementCount: 0})
  Pieces.push({name: 'wBishop', pieceColor: 'white', x: 3, y: 0, icon: WB, active: false, movementCount: 0})
  Pieces.push({name: 'bKing', pieceColor: 'black', x: 2, y: 4, icon: BK, active: false, movementCount: 0})
  Pieces.push({name: 'bKnight', pieceColor: 'black', x: 0, y: 4, icon: BN, active: false, movementCount: 0})
  Pieces.push({name: 'bKnight', pieceColor: 'black', x: 4, y: 4, icon: BN, active: false, movementCount: 0})
  Pieces.push({name: 'bBishop', pieceColor: 'black', x: 1, y: 4, icon: BB, active: false, movementCount: 0})
  Pieces.push({name: 'bBishop', pieceColor: 'black', x: 3, y: 4, icon: BB, active: false, movementCount: 0})

export default Pieces; 
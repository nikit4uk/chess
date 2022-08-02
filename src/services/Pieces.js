import BP from "../assets/bp.png"
import BK from "../assets/bk.png"
import BN from "../assets/bn.png"
import BB from "../assets/bb.png"
import WP from "../assets/wp.png"
import WK from "../assets/wk.png"
import WN from "../assets/wn.png"
import WB from "../assets/wb.png"
import Piece from '../components/Pieces/Pieces';

const Pieces = [];

for(let i = 0; i < 5; i++){
      Pieces.push({name: 'wPawn', x: i, y: 1, icon: WP})
  }
  for(let i = 0; i < 5; i++){
      Pieces.push({name: 'bPawn', x: i, y: 3, icon: BP})
  }

  Pieces.push({name: 'wKing', x: 2, y: 0, icon: WK})
  Pieces.push({name: 'wKnight', x: 0, y: 0, icon: WN})
  Pieces.push({name: 'wKnight', x: 4, y: 0, icon: WN})
  Pieces.push({name: 'wBishop', x: 1, y: 0, icon: WB})
  Pieces.push({name: 'wBishop', x: 3, y: 0, icon: WB})
  Pieces.push({name: 'bKing', x: 2, y: 4, icon: BK})
  Pieces.push({name: 'bKnight', x: 0, y: 4, icon: BN})
  Pieces.push({name: 'bKnight', x: 4, y: 4, icon: BN})
  Pieces.push({name: 'bBishop', x: 1, y: 4, icon: BB})
  Pieces.push({name: 'bBishop', x: 3, y: 4, icon: BB})

export default Pieces; 
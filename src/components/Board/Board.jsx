// import React, {Component} from "react";
// import "./board.css";
// import Tile from "./Tile/Tile";
// import pieces from "../../services/Pieces"


// const verticalAxis = ["1", "2", "3", "4", "5",]
// const horisontalAxis = ["a", "b", "c", "d", "e",]

// export default class Board extends Component {
//     render() {
//         console.log(pieces)

//         let board = [];

//         for(let i = verticalAxis.length - 1; i >= 0; i--){
//             for(let j = horisontalAxis.length - 1; j >= 0; j--){
//                 const number = i + j + 2;
//                 let image = undefined

//                 console.log(`${j} + ${i}`);

//                 pieces.forEach(p => {
//                     console.log(p);
//                     if(j === 0 && i === 2) {
//                         image = p.icon
//                     }
//                 })

//                 board.push(
//                     <Tile image={image} number={number} id={`tile-${i}-${j}`} key={`${i} + ${j}`}/>
//                 )
//             }
//         }
//         return (
//             <div className='board'>{board}</div>
//         );
//     }
// }

import React, {Component} from "react";
import "./board.css";
import Tile from "./Tile/Tile";
import Pieces from "../../services/Pieces"
import BP from "../../assets/bp.png"
import BK from "../../assets/bk.png"
import BN from "../../assets/bn.png"
import BB from "../../assets/bb.png"
import WP from "../../assets/wp.png"
import WK from "../../assets/wk.png"
import WN from "../../assets/wn.png"
import WB from "../../assets/wb.png"

const verticalAxis = ["1", "2", "3", "4", "5",]
const horisontalAxis = ["a", "b", "c", "d", "e",]

export default class Board extends Component {
    render() {
        

        let board = [];

        for(let i = verticalAxis.length - 1; i >= 0; i--){
            for(let j = horisontalAxis.length - 1; j >= 0; j--){
                const number = i + j + 2;
                let image = undefined
                let alt = undefined

                Pieces.forEach(p => {
                    if(p.x === j && p.y === i) {
                        image = p.icon
                        alt = p.name
                    }
                })

                board.push(
                    <Tile image={image} alt={alt} number={number} key={`${i} + ${j}`} />
                )
            }
        }
        return (
            <div className='board'>{board}</div>
        );
    }
}
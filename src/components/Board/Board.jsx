import React, {Component} from "react";
import "./board.css";
import Tile from "./Tile/Tile";
import Piece from '../Pieces/Pieces';
import BP from "../../assets/bp.png"

const verticalAxis = ["1", "2", "3", "4", "5",]
const horisontalAxis = ["a", "b", "c", "d", "e",]

export default class Board extends Component {
    render() {
        const pieces = [];
        const dPawn = {
            x: 0, 
            y: 1,
            img: BP
        }
        pieces.push({dPawn})

        let board = [];

        for(let i = verticalAxis.length - 1; i >= 0; i--){
            for(let j = horisontalAxis.length - 1; j >= 0; j--){
                const number = i + j + 2;
                let image = undefined

                pieces.forEach(p => {
                    if(p.dPawn.x === j && p.dPawn.y === i) {
                        image = p.dPawn.img
                    }
                })

                board.push(
                    <Tile image={image} number={number} />
                )
            }
        }
        return (
            <div className='board'>{board}</div>
        );
    }
}

// import React, {Component} from "react";
// import "./board.css"

// const verticalAxis = ["1", "2", "3", "4", "5",]
// const horisontalAxis = ["a", "b", "c", "d", "e",]

// export default class Board extends Component {
//     render() {
//         let board = [];

//         for(let i = verticalAxis.length - 1; i >= 0; i--){
//             for(let j = horisontalAxis.length - 1; j >= 0; j--){
//                 const number = i + j + 2;

//                 if(number % 2 === 0){
//                     board.push(
//                         <div className='tile dark-tile'></div>
//                     )
//                 } else {
//                     board.push(
//                         <div className='tile light-tile'></div>
//                     )
//                 }
//             }
//         }
//         return (
//             <div className='board'>{board}</div>
//         );
//     }
// }
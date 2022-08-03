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
import Cursor from "./Cursor/Cursor";

const verticalAxis = ["1", "2", "3", "4", "5",]
const horisontalAxis = ["a", "b", "c", "d", "e",]

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            CursorX: 0,
            CursorY: 0
        }
        this.keyFunction = this.keyFunction.bind(this);
    }

    keyFunction(event){
        if(event.keyCode === 0x0D) {
            console.log('Enter')
        }
        if(event.keyCode === 0x25) {
            this.setState((state) => {
                console.log(`CursorX: ${this.state.CursorX}`)
                return {counter: state.CursorX++};
              });
            console.log('Left')
            console.log(`CursorX: ${this.state.CursorX}`)
        }
        if(event.keyCode === 0x27) {
            this.setState((state) => {
                return {counter: state.CursorX--};
              });
            console.log('Right')
            console.log(`CursorX: ${this.state.CursorX}`)
        }
        if(event.keyCode === 0x26) {
            this.setState((state) => {
                return {counter: state.CursorY++};
              });
            console.log('Up')
            console.log(`CursorY: ${this.state.CursorY}`)
        }
        if(event.keyCode === 0x28) {
            this.setState((state) => {
                return {counter: state.CursorY--};
              });
            console.log('Down')
            console.log(`CursorY: ${this.state.CursorY}`)
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keyFunction);
    }

    render() {
        let board = [];

        for(let i = verticalAxis.length - 1; i >= 0; i--){
            for(let j = horisontalAxis.length - 1; j >= 0; j--){
                const number = i + j + 2;
                let image = undefined
                let alt = undefined
                let tileID = `${i} + ${j}`;

                Pieces.forEach(p => {
                    if(p.x === j && p.y === i) {
                        image = p.icon
                        alt = p.name
                    }
                })

                board.push(
                    <Tile 
                        image={image}
                        alt={alt}
                        number={number}
                        id={tileID}
                        CursorX={this.state.CursorX}
                        CursorY={this.state.CursorY} 
                        key={`${i} + ${j}`} 
                    />
                )
            }
        }
        return (
            <div className='board'>{board}</div>
        );
    }
}
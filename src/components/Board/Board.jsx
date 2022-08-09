import React, {Component} from "react";
import "./board.css";
import Tile from "./Tile/Tile";
import Pieces from "../../services/Pieces";
import BP from "../../assets/bp.png";
import BK from "../../assets/bk.png";
import BN from "../../assets/bn.png";
import BB from "../../assets/bb.png";
import WP from "../../assets/wp.png";
import WK from "../../assets/wk.png";
import WN from "../../assets/wn.png";
import WB from "../../assets/wb.png";
import Cursor from "./Cursor/Cursor";
import { wPawnMovement, bPawnMovement, pieceNewPosition} from "../../services/PieceMovement";

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
        if(event.keyCode === 0x25) { // LeftArrow Key 
            if(this.state.CursorX < 4){
                this.setState((state) => {
                    return {counter: state.CursorX++};
                });
            }
            else {
                this.setState((state) => {
                    return {counter: state.CursorX};
                });
            }
        }
        if(event.keyCode === 0x27) { // RightArrow Key 
            if(this.state.CursorX > 0){
                this.setState((state) => {
                    return {counter: state.CursorX--};
                });
            } else {
                this.setState((state) => {
                    return {counter: state.CursorX};
                });
            }
        }
        if(event.keyCode === 0x26) { // UpArrow Key 
            if(this.state.CursorY < 4){
                this.setState((state) => {
                    return {counter: state.CursorY++};
                });
            } else {
                this.setState((state) => {
                    return {counter: state.CursorY};
                });
            }
        }
        if(event.keyCode === 0x28) { // DownArrow Key
            if(this.state.CursorY > 0){
                this.setState((state) => {
                    return {counter: state.CursorY--};
                });
            } else {
                this.setState((state) => {
                    return {counter: state.CursorY};
                });
            }
        }
        if(event.keyCode === 0x0D) { //Enter Key
            const currentTile = document.querySelector('.cursor').parentElement;
            const tileImg = currentTile.querySelector('img');

            if(tileImg.alt == 'wPawn'){
                this.setState((state) => {
                    wPawnMovement(this.state.CursorX, this.state.CursorY);
                    return {state};
                });
            }

            if(tileImg.alt == 'bPawn'){
                this.setState((state) => {
                    bPawnMovement(this.state.CursorX, this.state.CursorY);
                    return {state};
                });
            }
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keyFunction);
        document.addEventListener("keydown", pieceNewPosition);
    }

    render() {
        let board = [];

        for(let i = verticalAxis.length - 1; i >= 0; i--){
            for(let j = horisontalAxis.length - 1; j >= 0; j--){
                const number = i + j + 2;
                let image = undefined
                let image2 = undefined
                let alt = undefined
                let tileID = `${i} + ${j}`;

                Pieces.forEach(p => {
                    if(p.x === j && p.y === i) {
                        image = p.icon
                        image2 = p.icon2
                        alt = p.name
                    }
                })

                board.push(
                    <Tile 
                        image={image}
                        image2={image2}
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
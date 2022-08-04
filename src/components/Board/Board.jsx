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
        if(event.keyCode === 0x0D) {
            const currentTile = document.querySelector('.cursor').parentElement;
            const tileImg = currentTile.querySelector('img');
            console.log(`Enter to ${tileImg.alt}`)

            if(tileImg.alt == 'wPawn'){
                this.setState((state) => {
                    console.log(`wPawn move to 1 tile up`)

                    Pieces.forEach(p => {
                        if(p.x === this.state.CursorX && p.y === this.state.CursorY) {
                            p.y++
                        }
                    })
                    return {counter: state};
                });
            }
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
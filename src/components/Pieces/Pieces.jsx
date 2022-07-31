import React, {Component} from "react";
import BB from "../../assets/bb.png"

export default class ChessPieces extends Component{
    state = {
        x: null,
        y: null,
        icon: BB,
        active: false
    }

    render() {
        return(
            <img src={this.state.icon}/>
        )
    }
}


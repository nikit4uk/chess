import React, {Component} from "react";
import "./tile.css";
import BB from "../../../assets/bb.png"

export default class Board extends Component {    
    render() {
        return (
            <div className={this.props.number % 2 === 0 && 'tile dark-tile' || 'tile light-tile'}>
                <img src={this.props.image} alt="" />
            </div>
        );
    }
}
import React, {Component} from "react";
import "./tile.css";
import BB from "../../../assets/bb.png"

export default class Board extends Component {    
    render() {
        return (
            <div id={this.props.id} className={this.props.number % 2 === 0 && 'tile dark-tile' || 'tile light-tile'}>
                {this.props.image && <img src={this.props.image} alt={this.props.alt} />}
            </div>
        );
    }
}
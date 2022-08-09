import React, {Component} from "react";
import "./tile.css";
import Cursor from "../Cursor/Cursor";

export default class Tile extends Component {    
    render() {
        return (
            <div className={this.props.number % 2 === 0 && 'tile dark-tile' || 'tile light-tile'}>
                {this.props.id === `${this.props.CursorY} + ${this.props.CursorX}` && <Cursor />}
                {this.props.image && <img src={this.props.image} alt={this.props.alt} />}
                {this.props.image2 && <img className="moveAtack" src={this.props.image2} alt={this.props.alt} />}
            </div>
        );
    }
}
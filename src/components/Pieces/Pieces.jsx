import React, {Component} from "react";

export default class ChessPieces extends Component{
    constructor(props) {
        super(props);
        this.x = null;
        this.y = null;
        this.icon = undefined;
        this.active = false;
    }
}


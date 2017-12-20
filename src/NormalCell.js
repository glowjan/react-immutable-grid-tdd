import React from "react";

class NormalCell extends React.Component {

    constructor(props){
        super(props);
        this.onCellClick = this.onCellClick.bind(this);
    }

    get classNames() {
        return [
            this.props.active ? 'cell active' : 'cell'
        ].join(' ');
    }

    onCellClick(event) {
        event.preventDefault();

        this.props.onCellClick && this.props.onCellClick();
    }

    render() {
        return (
            <div className={this.classNames} onClick={this.onCellClick}>
            </div>
        );
    }
}

export default NormalCell;
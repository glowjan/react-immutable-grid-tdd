import React from "react";

class NormalCell extends React.Component {

    get classNames() {
        return [
            this.props.active ? 'cell active' : 'cell'
        ].join(' ');
    }

    render() {
        return (
            <div className={this.classNames}>
            </div>
        );
    }
}

export default NormalCell;
import React from "react";

class History extends React.Component {
    render() {
        return (
            <div className="history">
                <button onClick={this.props.clearAction} >
                Clear
                </button>
                <button onClick={this.props.undoAction} disabled={this.props.history.isEmpty()}>
                    Undo
                </button>
                <button onClick={this.props.redoAction} disabled={this.props.future.isEmpty()}>
                    Redo
                </button>
            </div>


        );
    }
}

export default History;
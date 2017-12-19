import React from "react";

class TitleCell extends React.Component {

    render() {
        return (
            <div className="cell-title">
                {this.props.title}
            </div>
        );
    }
}

export default TitleCell;
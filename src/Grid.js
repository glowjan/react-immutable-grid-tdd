import React from "react";
import Row from "./Row";

class Grid extends React.Component {

    renderRows(rows) {
        return rows.map((row, index) => {
            return (<Row key={index} row={row}/>)
        });
    }

    render() {
        return (
            <div className={'grid'}>
                {this.renderRows(this.props.grid)}
            </div>
        );
    }
}

export default Grid;
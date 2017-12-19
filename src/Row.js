import React from "react";
import TitleCell from "./TitleCell";
import NormalCell from "./NormalCell";

class Row extends React.Component {

    render() {
        return (
            <div className={'row'}>
                <TitleCell title={this.props.row.title}/>
                {this.props.row.cells.map((cell, index) => {
                    return (<NormalCell key={index} id={cell.id}/>)
                })}
            </div>
        );
    }
}

export default Row;
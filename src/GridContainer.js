import React from "react";
import Grid from "./Grid";
import Immutable from "immutable";

class GridContainer extends React.Component {

    createGrid(cols, rows) {
        return rows.map((row, index) => {
            return {
                title: row,
                cells: this.createRow(row, cols),
                onCellClick: this.onCellClick(index)
            }
        });
    }

    createRow(col, rows) {
        let cells = [];
        for (var i = 0; i < rows; i++) {
            cells.push({id: i, active: false})
        }
        return cells;
    }

    constructor(props) {
        super(props);

        this.state = {
            grid: this.createGrid(props.columns, props.rows)
        }

        this.onCellClick = this.onCellClick.bind(this);
    }

    onCellClick(rowId) {
        return function (columnId) {
            return function () {
                const immutableGrid = Immutable.fromJS(this.state.grid);
                const newGrid = immutableGrid.updateIn([rowId, 'cells', columnId, 'active'], active => !active).toJS();

                this.setState({
                    grid: newGrid,
                });
            }.bind(this)
        }.bind(this)
    }

    render() {
        return (
            <div>
                <Grid grid={this.state.grid}/>
            </div>
        );
    }
}

export default GridContainer;
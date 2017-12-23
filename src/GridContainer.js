import React from "react";
import Grid from "./Grid";
import Immutable from "immutable";
import History from "./History";

class GridContainer extends React.Component {

    createGrid(cols, rows) {
        return rows.map((row, index) => {
            return {
                title: row,
                cells: this.createRow(row, cols),
                onCellClick: this.onCellClick.bind(null, index)

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

        this.onCellClick = this.onCellClick.bind(this);
        this.undoAction = this.undoAction.bind(this);
        this.redoAction = this.redoAction.bind(this);
        this.clearAction = this.clearAction.bind(this);

        this.state = {
            grid: this.createGrid(props.columns, props.rows),
            history: Immutable.List(),
            future: Immutable.List()
        }
    }

    onCellClick(rowId, columnId) {
        const immutableGrid = Immutable.fromJS(this.state.grid);
        const newGrid = immutableGrid.updateIn([rowId, 'cells', columnId, 'active'], active => !active).toJS();

        this.setState({
            grid: newGrid,
            history: this.state.history.push(this.state.grid),
            future: Immutable.List()
        });
    }

    undoAction() {
        this.setState({
            grid: this.state.history.last(),
            history: this.state.history.pop(),
            future: this.state.future.push(this.state.grid)
        });
    }

    clearAction() {
        this.setState({
            grid: this.createGrid(this.props.columns, this.props.rows),
            history: Immutable.List(),
            future: Immutable.List()
        });
    }

    redoAction() {
        this.setState({
            grid: this.state.future.last(),
            future: this.state.future.pop(),
            history: this.state.history.push(this.state.grid)
        });
    }

    render() {
        return (
            <div>
                <Grid grid={this.state.grid}/>
                <History history={this.state.history}
                         future={this.state.future}
                         undoAction={this.undoAction}
                         redoAction={this.redoAction}
                         clearAction={this.clearAction}/>
            </div>
        );
    }
}

export default GridContainer;
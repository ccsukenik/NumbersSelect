import React from "react";
import NumberRow from "./NumberRow";
import SelectedNumbers from "./SelectedNumbers";
import {produce} from 'immer';

let id = 0;

class NumbersTable extends React.Component {

    state = { numbers: [], selectedNumbers: [], lockedNumbers: [] };

    getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

    onAddNumberClick = () => {
        const { numbers } = this.state;
        const number = this.getRandomNumber();
        id++;
        this.setState({ numbers: [...numbers, { id, number }] });
    }

    onAddToSelectedClick = number => {
        const { selectedNumbers } = this.state;
        this.setState({ selectedNumbers: [...selectedNumbers, number] });
    }

    onRemoveFromSelectedClick = ({ id }) => {
        const { selectedNumbers } = this.state;
        this.setState({ selectedNumbers: selectedNumbers.filter(s => s.id !== id) });
    }

    onLockChangeClick = id => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(id)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(s => s.id !== id) });
        }
        else {
            this.setState({ lockedNumbers: [...lockedNumbers], id });
        }
    }

    render() {
        const {numbers, selectedNumbers, lockedNumbers} = this.state;
        return (         
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-lg btn-block" onClick={this.onAddNumberClick}>Add
                        </button>
                    </div>
                </div>
                <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map(obj => {
                                let { number, id } = obj;
                                let { lockedNumbers } = this.state;
                                return <NumberRow
                                    key={id}
                                    number={number}
                                    locked={lockedNumbers.includes(id)}
                                    isAdd={!selectedNumbers.map(s => s.id).includes(id)}
                                    onAddClick={() => this.onAddToSelectedClick(obj)}
                                    onRemoveClick={() => this.onRemoveFromSelectedClick(obj)}
                                />
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                {!!selectedNumbers.length && <SelectedNumbers
                    numbers={selectedNumbers}
                    lockedNumbers={lockedNumbers}
                    onLockChangeClick={this.onLockChangeClick}
                />}
            </div>
        );
    }
}

export default NumbersTable;
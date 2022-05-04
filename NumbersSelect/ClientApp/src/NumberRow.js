import React from "react";

class NumberRow extends React.Component {
    render() {
        const { number, isAdd, onAddClick, onRemoveClick, locked } = this.props;
        return (
            <tr>
                <td>{number}</td>
                <td>
                    {isAdd ? <button className="btn btn-primary" onClick={onAddClick}>Add to Selected</button> :
                        <button disabled={locked} className="btn btn-danger" onClick={onRemoveClick}>Remove from Selected</button>}
                </td>
            </tr>
        )
    }
}

export default NumberRow;
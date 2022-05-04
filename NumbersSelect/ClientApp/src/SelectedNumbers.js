import React from "react";

class SelectedNumbers extends React.Component {
    render() {
        const { numbers, onLockChangeClick, lockedNumbers } = this.props;
        return (
            <div className="row jumbotron">
                <div className="col-md-6 col-md-offset-3">
                    {!!numbers.length && <h3>Selected Numbers</h3>}
                    <ul className="list-group">
                        {numbers.map((n, i) => <li className="list-group-item" key={i}>
                            {n.number}
                            <button className="ml-3 btn btn-primary" onClick={() => onLockChangeClick(n.id)}>
                                {lockedNumbers.includes(n.id) ? "Unlock" : "Lock"}</button>
                        </li>)}
                    </ul>
                </div>
            </div>
        );
    }

}

export default SelectedNumbers;
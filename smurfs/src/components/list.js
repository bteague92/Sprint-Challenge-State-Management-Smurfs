import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "./../actions/actions";

const List = (props) => {
    return (
        <div>
            <button onClick={() => props.dispatch(getSmurfs())}>LoadSmurfs</button>
            <br />
            <h1>List</h1>
            <ul>
                {props.smurfs.map((i) => {
                    return <li>Name: {i.name}, Age: {i.age}, Height: {i.height}</li>
                })}
            </ul>
        </div>
    );
}

export default connect(state => state, null)(List);
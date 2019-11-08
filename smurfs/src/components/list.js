import React from "react";
import { connect } from "react-redux";

const List = () => {
    return (
        <div>
            <h1>List</h1>
        </div>
    );
}

export default connect(state => state, null)(List);
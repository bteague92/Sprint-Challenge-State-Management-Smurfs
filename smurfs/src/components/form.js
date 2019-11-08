import React from "react";
import { connect } from "react-redux";

const Form = (props) => {
    return (
        <div>
            <h2>ADD A SMURF!!!</h2>
            <form>
                <label> Name: </label>
                <input placeholder="name" />

                <label> Age: </label>
                <input placeholder="age" />

                <label> Height: </label>
                <input placeholder="height" />
                <br />
                <button type="submit">Add Smurf</button>
            </form>
        </div >
    );
}

export default connect(state => state, null)(Form);
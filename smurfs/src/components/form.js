import React from "react";
import { connect } from "react-redux";

const Form = (props) => {
    return (
        <div>
            <h2>ADD A SMURF!!!</h2>
            <form>
                <label htmlFor="name"> Name: </label>
                <input
                    placeholder="name"
                    id='name'
                    type="text"
                    placeholder="Name"
                    name="name"
                // onChange={}
                // value={}
                />

                <label htmlFor="age"> Age: </label>
                <input
                    placeholder="age"
                    id='age'
                    type="text"
                    placeholder="Age"
                    name="age"
                // onChange={}
                // value={}
                />

                <label htmlFor="height"> Height: </label>
                <input
                    placeholder="height"
                    id='height'
                    type="text"
                    placeholder="Height"
                    name="height"
                // onChange={}
                // value={}
                />
                <br />
                <button type="submit">Add Smurf</button>
            </form>
        </div >
    );
}

export default connect(state => state, null)(Form);
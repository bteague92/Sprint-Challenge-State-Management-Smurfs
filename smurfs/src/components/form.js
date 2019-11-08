import React from "react";

const Form = (props) => {
    return (
        <div>
            <h2>ADD A SMURF!!!</h2>
            <form>
                <label>Name: </label>
                <input placeholder="name" />

                <label>Age: </label>
                <input placeholder="age" />

                <label>Height: </label>
                <input placeholder="height" />
            </form>
        </div>
    );
}

export default Form;
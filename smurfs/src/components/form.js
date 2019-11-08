import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const Form = () => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    });

    const handleChange = event => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        axios
            .post("http://localhost:3333/smurfs", smurf)

            .then(res => {
                console.log("is posting");
                setSmurf({
                    ...smurf,
                    name: '',
                    age: '',
                    height: '',
                    id: Date.now()
                });
            })
            .catch(err => console.log("it did not work", err));
    };


    return (
        <div>
            <h2>ADD A SMURF!!!</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="name"> Name: </label>
                <input
                    placeholder="name"
                    id='name'
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={smurf.name}
                />

                <label htmlFor="age"> Age: </label>
                <input
                    placeholder="age"
                    id='age'
                    type="text"
                    placeholder="Age"
                    name="age"
                    onChange={handleChange}
                    value={smurf.age}
                />

                <label htmlFor="height"> Height: </label>
                <input
                    placeholder="height"
                    id='height'
                    type="text"
                    placeholder="Height"
                    name="height"
                    onChange={handleChange}
                    value={smurf.height}
                />
                <br />
                <button type="submit">Add Smurf</button>
            </form>
        </div >
    );
}

export default connect(state => state, null)(Form);
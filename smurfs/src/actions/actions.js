import axios from "axios";
export const SMURF_LOADING = "SMURF_LOADING";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAILED = "SMURF_FAILED";


export const smurfLoading = () => ({ type: SMURF_LOADING });

export const smurfSuccess = data => ({
    type: SMURF_SUCCESS,
    payload: data
});

export const smurfFailure = error => ({
    type: SMURF_FAILED,
    payload: error
});

export function getSmurfs() { ///Launches the attempt to API pull

    return function (dispatch) {

        dispatch(smurfLoading()); ///Loading 

        return axios.get(`http://localhost:3333/smurfs`)
            .then(response => {
                console.log(response);
                dispatch(smurfSuccess(response.data)) /// Successfully got data
            })
            .catch(error => {
                console.log("the data was not return", error);
                dispatch(smurfFailure());
            });
    }
}
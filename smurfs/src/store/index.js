import { SMURF_LOADING, SMURF_SUCCESS, SMURF_FAILED } from "./../actions/actions";

export const initialState = {
    smurfs: [],
    error: null,
    isLoading: false
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURF_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: null
            };
        case SMURF_FAILED:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
export const state = () => ({
    snackbar: {},
    loader: false,
    stepper: 1
});

export const mutations = {
    loader( state, payload ){
        state.loader = payload;
    },
    snackbar( state, payload ){
        state.snackbar = payload;
    },
    stepper( state, number ){
        state.stepper = number
    }
}

export const getters = {
    getLoader: ( state ) => state.loader,
    getSnackbar: ( state ) => state.snackbar,
    getStepper: ( state ) => state.stepper
}

export const actions = {

}
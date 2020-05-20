export const state = () => ({
    snackbar: {},
    loader: false,
    stepper: 1,
    clean_stepper: 0,
    tab: 0,
});

export const mutations = {
    loader( state, payload ){
        state.loader = payload;
    },
    snackbar( state, payload ){
        state.snackbar = payload;
    },
    stepper( state, payload ){
        state.stepper = payload
    },
    cleanStepper( state ){
        ++state.clean_stepper;
        state.stepper = 1;
    },
    tabs( state, payload ){
        state.tab = payload
    }
}

export const getters = {
    getLoader: ( state ) => state.loader,
    getSnackbar: ( state ) => state.snackbar,
    getStepper: ( state ) => state.stepper,
    getCleanStepper: ( state ) => state.clean_stepper,
    getTab: ( state ) => state.tab,
}

export const actions = {

}
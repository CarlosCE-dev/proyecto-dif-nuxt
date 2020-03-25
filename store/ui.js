export const state = () => ({
    snackbar: {},
    loader: false
});

export const mutations = {
    loader( state, payload ){
        state.loader = payload;
    },
    snackbar( state, payload ){
        state.snackbar = payload;
    },
}

export const getters = {
    getLoader: ( state ) => state.loader,
    getSnackbar: ( state ) => state.snackbar
}

export const actions = {

}
export const state = () => ({
    director: {},
    escuela: {},
    suscripcion: {}
});

export const mutations = {
    setDirector( state, payload ){
        state.director = payload
    },
    setEscuela( state, payload ){
        state.escuela = payload
    },
    setSuscripcion( state, payload ){
        state.suscripcion = payload
    },
}

export const getters = {
    getDirector: ( state ) => state.director,
    getEscuela: ( state ) => state.escuela,
    getSuscripcion: ( state ) => state.suscripcion,
}
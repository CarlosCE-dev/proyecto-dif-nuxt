

export const state = () => ({
    escuelas: [ { id: Math.random().toString(36).substring(7), name: Math.random().toString(36).substring(7) },
                { id: 1, name: Math.random().toString(36).substring(7) } 
                ],
    escuela: {}
});

export const mutations = {
    add( state, payload ){
        state.escuelas.push( payload );
    },
    remove( state, id ){
        state.escuelas = state.escuelas.filter( e => e.id !== id );
    },
    edit( state, payload ){
        const escuela = state.escuelas.find( e => e.id === payload.id );
        escuela.name = payload.name;
    },
    set( state, payload ){
        state.escuela = payload;
    },
    find( state, id ){
        const escuela = state.escuelas.find( e => e.id === id );
        state.escuela = escuela;
    }
}
export const getters = {
    getEscuelas: ( state ) => state.escuelas,
    getEscuela: ( state ) => state.escuela
}

export const actions = {

}
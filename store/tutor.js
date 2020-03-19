export const state = () => ({
    tutores: [ { id: Math.random().toString(36).substring(7), name: Math.random().toString(36).substring(7) } ],
    tutor: {}
});

export const mutations = {
    add( state, payload ){
        state.tutores.push( payload );
    },
    remove( state, id ){
        state.tutores = state.tutores.filter( t => t.id !== id )
    },
    edit( state, payload ){
        const tutor = state.tutores.find(t => t.id === payload.id );
        tutor.name = payload.name;
    },
    set( state, payload ){
        state.tutor = payload;
    }
}

export const getters = {
    getTutores: ( state ) => state.tutores,
    getTutor: ( state ) => state.tutor
}

export const actions = {

}
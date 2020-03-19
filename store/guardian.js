


export const state = () => ({
    guardianes: [ { id: Math.random().toString(36).substring(7), name: Math.random().toString(36).substring(7) } ],
    guardian: {}
});

export const mutations = {
    add( state, payload ){
        state.guardianes.push( payload );
    },
    remove( state, id ){
        state.guardianes = state.guardianes.filter( s => s.id !== id )
    },
    edit( state, payload ){
        const guardian = state.guardianes.find( g => g.id === payload.id );
        guardian.name = payload.name;
    },
    set( state, payload ){
        state.guardian = payload;
    }
}
export const getters = {
    getGuardianes: ( state ) => state.guardianes,
    getGuardian: ( state ) => state.guardian
}

export const actions = {

}
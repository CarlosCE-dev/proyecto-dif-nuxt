


export const state = () => ({
    guardianes: [ { id: Math.random().toString(36).substring(7), name: Math.random().toString(36).substring(7) } ],
    guardian: {}
});

export const mutations = {
    addGuardian( state, guardian ){
        state.guardianes.push( guardian );
    },
    removeGuardian( state, id ){
        state.guardianes = state.guardianes.filter( s => s.id !== id )
    },
    editGuardian( state, guardian ){
        const guar = state.guardianes.find( g => g.id === guardian.id );
        guar.name = guardian.name;
    },
    setGuardian( state, guardian ){
        state.guardian = guardian;
    }
}
export const getters = {
    getGuardianes: ( state ) => state.guardianes,
    getGuardian: ( state ) => state.guardian
}

export const actions = {

}
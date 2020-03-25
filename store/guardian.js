import { Guardian } from '~/models/guardian.js';

export const state = () => ({
    guardianes: [],
    guardian: {}
});

export const mutations = {
    add( state, payload ){
        state.guardianes.push( payload );
    },
    remove( state, userId ){
        state.guardianes = state.guardianes.filter( g => g.userId !== userId )
    },
    edit( state, payload ){
        const index = state.guardianes.findIndex(  g => g.userId === payload.userId );
        state.guardianes[index] = payload;
    },
    set( state, payload ){
        state.guardian = payload;
    },
    load( state, payload ){
        for (let i = 0; i < payload.length; i++) {
            payload[i] = new Guardian( payload[i] );
        }
        state.guardianes = payload
    }
}
export const getters = {
    getGuardianes: ( state ) => state.guardianes,
    getGuardian: ( state ) => state.guardian
}

export const actions = {

}
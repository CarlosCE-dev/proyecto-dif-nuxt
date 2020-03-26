import { Advisor } from '~/models/advisor.js';

export const state = () => ({
    tutores: [],
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
    },
    load( state, payload ){
        for (let i = 0; i < payload.length; i++) {
            payload[i] = new Advisor( payload[i] );
        }
        state.tutores = payload
    }
}

export const getters = {
    getTutores: ( state ) => state.tutores,
    getTutor: ( state ) => state.tutor
}

export const actions = {

}
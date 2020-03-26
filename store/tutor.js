import { Advisor } from '~/models/advisor.js';

export const state = () => ({
    tutores: [],
    tutor: {}
});

export const mutations = {
    add( state, payload ){
        state.tutores.push( payload );
    },
    remove( state, advisorId ){
        state.tutores = state.tutores.filter( t => t.advisorId !== advisorId )
    },
    edit( state, payload ){
        const index = state.tutores.findIndex(  t => t.advisorId === payload.advisorId );
        state.tutores[index] = payload;
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
import { Student } from '~/models/student.js';

export const state = () => ({
    alumnos: [],
    alumno: {}
});

export const mutations = {
    add( state, payload ){
        state.alumnos.push( payload );
    },
    remove( state, id ){
        state.alumnos = state.alumnos.filter( a => a.id !== id )
    },
    edit( state, payload ){
        const alumno = state.alumnos.find( a => a.id === payload.id );
        alumno.name = payload.name;
    },
    set( state, payload ){
        state.alumno = payload;
    },
    load( state, payload ){
        for (let i = 0; i < payload.length; i++) {
            payload[i] = new Student( payload[i] );
        }
        state.alumnos = payload;
    }
}

export const getters = {
    getAlumnos: ( state ) => state.alumnos,
    getAlumno: ( state ) => state.alumno
}

export const actions = {

}
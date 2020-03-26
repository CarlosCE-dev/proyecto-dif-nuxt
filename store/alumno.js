import { Student } from '~/models/student.js';

export const state = () => ({
    alumnos: [],
    alumno: {}
});

export const mutations = {
    add( state, payload ){
        state.alumnos.push( payload );
    },
    remove( state, studentId ){
        state.alumnos = state.alumnos.filter( a => a.studentId !== studentId )
    },
    edit( state, payload ){
        const index = state.alumnos.findIndex( a => a.studentId === payload.studentId );
        state.alumnos[index] = payload;
        state.alumno = payload;
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

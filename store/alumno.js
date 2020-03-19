export const state = () => ({
    alumnos: [ { id: Math.random().toString(36).substring(7), name: Math.random().toString(36).substring(7) } ],
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
    }
}

export const getters = {
    getAlumnos: ( state ) => state.alumnos,
    getAlumno: ( state ) => state.alumno
}

export const actions = {

}
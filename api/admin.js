// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
const URL = `${process.env.URL}${process.env.API}`;

const token = localStorage.getItem('token');

//Se obtiene el token para mandarlo a cada petición
const headers = { Authorization: `Bearer ${ token }` }

export default $axios => resource => ({
    addNewClassRoom( payload ) {
        return $axios.$post(`${ URL }${ resource }/addNewClassRoom`, payload, headers );
    }
});
// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
const URL = `${process.env.url}`;
// const token = localStorage.getItem('token');

export default $axios => resource => ({
    getUserProfiles() {
        return $axios.$get(`${ URL }${ resource }/getUserProfiles`);
    }
});
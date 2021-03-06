// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
const URL = `${process.env.URL}`;
const token = localStorage.getItem('token');

//Se obtiene el token para mandarlo a cada petición
let headers = { Authorization: 'Bearer ' + token }

export default $axios => resource => ({
  
  login( payload ){
    return $axios.$post(`${ URL }/session/login`, payload );
  }

});
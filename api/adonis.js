// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
const URL = `${process.env.URL}${process.env.API}`;
const token = localStorage.getItem('token');

//Se obtiene el token para mandarlo a cada petición
let headers = {
    Authorization: 'Bearer ' + token
}

export default $axios => resource => ({
  
  index() {
    return $axios.$get(`${ URL }${ resource }`, headers);
  },

  show(data) {
    return $axios.$post(`${ URL }${ resource }/show`, data, headers);
  },

  create(payload) {
    return $axios.$post(`${ URL }${ resource }`, payload, headers);
  },

  update(id, payload) {
    return $axios.$put(`${ URL }${ resource }/${ id }`, payload, headers);
  },

  delete(id) {
    return $axios.$delete(`${ URL }${ resource }/${id}`, headers);
  },

});
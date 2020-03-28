import axios from 'axios'
import moment from 'moment'
export default function ({ store, route, redirect }) {
    
  const token = localStorage.getItem('token');
    
    const router = route.fullPath;

    if ( !localStorage.hasOwnProperty('token') && router !== '/auth/login' ) {
        redirect('/auth/login')
    }

//   /* ------------------------------- Validación ------------------------------- */
//   /** Cuando el usuario se ha deslogeado se verifica una vez mas para evitar posibles bugs */
//   if ( !localStorage.hasOwnProperty('eventId') && localStorage.hasOwnProperty('token') ) {
//     localStorage.clear();
//     redirect('/auth/login');
//   }
  
//   /* ------------------------------- Validación ------------------------------- */
//   /** Si el usuario se encontraba logeado se debe verificar si la session aun sigue activa */
//   if( localStorage.hasOwnProperty('token') && ( route.fullPath !== "/auth/login" && route.fullPath !== '/auth/login/') ){
    
//     let config = { headers: { Authorization: 'Bearer ' + token } }

//     // Dejamos la fecha de refresco del token en 2 horas
//     //Si dejamos esta condicion, el usuario puede editar el tiempo y nuxt nuca va a verificar el token.
//     //if(moment(parseInt(expireToken)).add('2', 'h').valueOf() < moment.now()){
//     axios.get(`${process.env.URL}${process.env.API}auth/verifyToken`, config)
//       .then((response) => {
        
//         localStorage.setItem('token',    response.data.token);
//         localStorage.setItem('expToken', moment.now());
        
//       }).catch((error) => {
//         localStorage.clear();
//         redirect('/auth/login')
//     });
//     //}
  }

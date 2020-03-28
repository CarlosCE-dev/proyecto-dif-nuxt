<template>
  <v-app dark>
    

    <Sidebar class="sidebar" v-model="drawer" :fixed="fixed" :items="items"/>

    <Appbar class="appbar" @action="drawerController"/>

    <v-content class="main-content custom-scroll">
      
      <ModalSnackbar v-model="modal_snackbar.state" :snackbar="modal_snackbar"/>
      <ModalLoader v-model="loader"/>
      
      <v-card color="fondo" height="100%" class="px-2 mx-4 fondo-tarjeta" elevation="0">
        <nuxt />
      </v-card>
       
    </v-content>

  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

// Helpers
import { orientationType } from '~/helpers/orientation';
// Components
import Sidebar from "~/components/sidebar/sidebar.vue";
import Appbar from "~/components/appbar/appbar.vue";

// Ui Components 
import ModalLoader from '~/components/ui/loader.vue';
import ModalSnackbar from '~/components/ui/snackbar.vue';

export default ({
    components: {
      Sidebar,
      Appbar,
      ModalLoader,
      ModalSnackbar
    },
    data: () => ({
        mobil: false,
        drawer: true,
        fixed: true,
        items: [
        { name: 'Dashboard', route: "/", icon: 'mdi-home' },
        { name: 'Guardianes',  route: "/guardian", icon: 'mdi-account-circle' },
        { name: 'Alumnos',  route: "/alumnos", icon: 'mdi-face' }, 
        { name: 'Reportes',  route: "/reporte", icon: 'mdi-poll-box' }, 
        { name: 'Configuración',  route: "/configuracion", icon: 'mdi-cog' },
        { name: 'Administrador',  route: "/administrador", icon: 'mdi-tools' },  
        ],
        modal_snackbar: { color: 'orange', timeout: 3000, state: false , text: 'Porfavor de rellenar todos los campos requeridos', top: true }
    }),
    computed: {
      ...mapGetters("ui", [
          "getLoader",
          "getSnackbar"
      ]),
      loader(){
          return this.getLoader
      }, 
      snackbar(){
        return this.getSnackbar
      }
    },
    watch: {
      snackbar( sb ){
        this.modal_snackbar = { color: sb.color, timeout: sb.timeout, state: sb.state, text: sb.text , top: sb.top };
      }
    },
    beforeMount () {
        this.mobil = orientationType();
        this.$store.commit('window/isMobil', this.mobil); 

        if ( this.mobil ) {
          this.drawer = false;
        }
    },
    methods: {
      drawerController() {
        this.drawer = !this.drawer;
      }
    },
})
</script>

<style>
.appbar{
  position: relative;
  z-index: 20;
}
.sidebar{
  position: relative;
  z-index: 21;
}
.fondo-tarjeta{
  border-top-left-radius: 10px  !important;
  border-top-right-radius: 10px !important;
}
.side-bar-icon{
  position: absolute;
  top: 0px;
  right: 0px;
}
.spacer{
  height: 80px;
}
.main-card{
   height: 100%;
}
.main-content{
  background: #F7FAFF;
}
</style>

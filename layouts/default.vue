<template>
  <v-app dark>
    
    <Sidebar v-model="drawer" :fixed="fixed" :items="items"/>

    <Appbar @action="drawerController"/>

    <v-content class="main-content custom-scroll">
      
       <v-card color="fondo" height="100%" class="px-2 mx-4 fondo-tarjeta" elevation="0">
        <nuxt />
       </v-card>
       
    </v-content>

  </v-app>
</template>

<script>
// Helpers
import { orientationType } from '~/helpers/orientation';
// Components
import Sidebar from "~/components/sidebar/sidebar.vue";
import Appbar from "~/components/appbar/appbar.vue";

export default ({
    components: {
      Sidebar,
      Appbar
    },
    data: () => ({
        mobil: false,
        drawer: true,
        fixed: true,
        items: [
        { name: 'Dashboard', route: "/", icon: 'mdi-home' },
        { name: 'Guardianes',  route: "/guardian", icon: 'mdi-account-circle' },
        { name: 'Alumnos',  route: "/alumnos", icon: 'mdi-face' }, 
        { name: 'Reportes',  route: "/", icon: 'mdi-poll-box' }, 
        { name: 'Configuración',  route: "/configuracion", icon: 'mdi-cog' },
        { name: 'Administrador',  route: "/administrador", icon: 'mdi-tools' },  
        ]
    }),
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

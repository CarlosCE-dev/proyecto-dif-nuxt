<template>
  <v-app dark>
    <v-navigation-drawer color="ligero-2" width="320" right app fixed floating persistent v-model='drawer'>
      
      <v-list>
        
        <!-- Avatar -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-right font-weight-bold title">Fernado Felix</v-list-item-title>
            <v-list-item-subtitle  class="text-right">Super admin</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <!-- Spacer -->
        <div class="spacer"></div>

        <!-- Titulo -->
        <v-list-item-title class="text-center py-1 morado--text">
          <strong class="headline font-weight-bold">Custo Kids Panel</strong>
        </v-list-item-title>
        
        <!-- Cards -->
        <div class="d-flex align-center justify-center" v-for="(item, index) in items" :key="index">
          <Card :item="item"/>
        </div>

      </v-list>

      <!-- Log out -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn text block color="morado">
            Logout
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </template>
   
    </v-navigation-drawer>
    <v-app-bar absolute color="transparent" dense elevation=0 fixed app>
      <v-spacer/>
      <v-app-bar-nav-icon color="morado" @click="drawer = !drawer"/>
    </v-app-bar>
     <v-content class="main-content custom-scroll">
       <v-card color="fondo" height="100%" class="px-2 mx-4 fondo-tarjeta" elevation="0">
        <nuxt />
       </v-card>
       
    </v-content>

  </v-app>
</template>

<script>
// Components
import Card from "~/components/sidebar/card.vue";

export default ({
    components: {
        Card
    },
    data: () => ({
        drawer: true,
        fixed: true,
        items: [
        { name: 'Dashboard', route: "/", icon: 'mdi-home' },
        { name: 'Guardianes',  route: "/guardian", icon: 'mdi-account-circle' },
        { name: 'Alumnos',  route: "/", icon: 'mdi-face' }, 
        { name: 'Reportes',  route: "/", icon: 'mdi-poll-box' }, 
        { name: 'Configuración',  route: "/", icon: 'mdi-cog' },
        { name: 'Administrador',  route: "/", icon: 'mdi-tools' },  
        ]
    }),
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

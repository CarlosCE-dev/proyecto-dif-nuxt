<template>
    <div>

        <!-- UiComponents -->
        <ModalSnackbar v-model="modal_snackbar.state" :snackbar="modal_snackbar"/>

        <h1 class="pa-1">Administrador</h1>

        <div class="d-flex justify-end px-1 py-3">
            <v-btn color="success" @click="crear">
                <v-icon left>mdi-plus</v-icon>
                Crear nueva suscripción 
            </v-btn>
        </div>

        <v-container fluid class="pa-0">
            <v-row no-gutters>
                <v-col class="pa-1" cols="12" md="6" v-for="( escuela, index ) in escuelas" :key="index">
                    <CardEscuela :escuela="escuela"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// Components
import CardEscuela from "~/components/administrador/card_escuela.vue";
import ModalSnackbar from "~/components/ui/snackbar.vue";

export default {
    components: {
        CardEscuela,
        ModalSnackbar
    },
    data: () => ({
        modal_snackbar: { color: 'red', timeout: 3000, state: false, text: '' },
        LatLng: null,
    }),
    computed: {
        ...mapGetters("escuela", [
            "getEscuelas",
        ]),
        escuelas(){
            return this.getEscuelas
        }  
    },
    methods: {
        crear() {
            this.$router.push({ path: '/administrador/crear' });
        }
    },
    created () {

        // Obtener LatLng
        // if ( "geolocation" in navigator ) {
        //    return this.snackbar = { color: 'orange', timeout: 3000, state: true , text: 'No se pudo obtener las coordenadas' }
        // }
        
        // navigator.geolocation.getCurrentPosition( resp => {
        //     const { latitude, longitude } = resp.coords
        //     this.LatLng = { latitude, longitude }
        // }, ( err ) => {
        //     console.log(err);
        //     return this.snackbar = { color: 'orange', timeout: 3000, state: true , text: 'No se pudo obtener las coordenadas' }
        // },);
        
    },
}
</script>

<style scoped>
</style>
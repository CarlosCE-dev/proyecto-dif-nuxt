<template>
    <div>

        <!-- UiComponents -->
        <Snackbar v-model="snackbar.state" :snackbar="snackbar"/>

        <h1>Administrador</h1>
        <v-container fluid class="pa-0">
            <v-row no-gutters>
                <v-col class="pa-1" cols="12" v-for="(item, index) in 20" :key="index">
                    <CardEscuela/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// Components
import CardEscuela from "~/components/administrador/card_escuela.vue";
import Snackbar from "~/components/ui/snackbar.vue";

export default {
    components: {
        CardEscuela,
        Snackbar
    },
    data: () => ({
        snackbar: { color: 'red', timeout: 3000, state: false, text: '' },
        LatLng: null,
    }),
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
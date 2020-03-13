<template>
    <div class="pa-2">
        <h1> Configuración</h1>
        
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="pa-2">
                    <FotoPerfil/>
                </v-col>
                <v-col cols="12" md="6" class="pa-2">
                    <Suscripcion/>
                </v-col>
            </v-row>
        </v-container>  

        
    </div>
</template>

<script>
import FotoPerfil from "~/components/configuracion/foto_perfil.vue";
import Suscripcion from "~/components/configuracion/suscripcion.vue";

export default {
    components: {
        FotoPerfil,
        Suscripcion
    }
}
</script>

<style scoped>

</style>
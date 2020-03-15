<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="pa-2">
                    <FotoPerfil/>
                </v-col>
                <v-col cols="12" md="6" class="pa-2">
                    <Suscripcion/>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <FormEscuela/>
                </v-col>
            </v-row>
        </v-container>  

        
    </div>
</template>

<script>
// Componentes
import FotoPerfil from "~/components/configuracion/foto_perfil.vue";
import Suscripcion from "~/components/configuracion/suscripcion.vue";
import FormEscuela from "~/components/configuracion/form_escuela.vue";

export default {
    components: {
        FotoPerfil,
        Suscripcion,
        FormEscuela
    }
}
</script>

<style scoped>

</style>
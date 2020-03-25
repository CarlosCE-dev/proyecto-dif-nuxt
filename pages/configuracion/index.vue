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
import { mapGetters } from "vuex";
// Componentes
import FotoPerfil from "~/components/configuracion/foto_perfil.vue";
import Suscripcion from "~/components/configuracion/suscripcion.vue";
import FormEscuela from "~/components/configuracion/form_escuela.vue";

export default {
    components: {
        FotoPerfil,
        Suscripcion,
        FormEscuela
    },
    computed: {
        ...mapGetters("escuela", [
            "getEscuela",
        ]),
        escuela(){
            return this.getEscuela
        }  
    },
    created(){
        this.$store.commit('escuela/find', 1 );
    }
}
</script>

<style scoped>

</style>
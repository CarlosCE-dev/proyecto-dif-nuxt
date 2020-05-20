<template>
    <div>
        
        <v-dialog v-model="modal_alert" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">Atención!</v-card-title>
                <v-card-text class="black--text">Estas a punto de limpiar todos los campos de registro. Estas seguro que quieres realizar esta accion?</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="modal_alert = false">Cancelar</v-btn>
                <v-btn color="green darken-1" text @click="limpiar">Estoy Seguro</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <div class="d-flex pa-1 align-center">
            <v-spacer></v-spacer>
             <v-btn text @click="modal_alert = true">
                <v-icon color="info" left>mdi-broom</v-icon>
                Limpiar registro
            </v-btn>
            <v-btn text @click="cancelar">
                <v-icon color="orange" left>mdi-cancel</v-icon>
                Cancelar registro
            </v-btn>
        </div>
        <Stepper/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import Stepper from "~/components/administrador/crear/stepper.vue";

export default {
    components: {
        Stepper
    },
    data: () => ({
        modal_alert: false
    }),
    computed: {
      ...mapGetters("ui", [
        "getCleanStepper",
      ]),
      clean(){
        return this.getCleanStepper
      } 
    },
    methods: {
        cancelar() {
            this.$router.push({ path: '/administrador' });
        },
        limpiar(){
            this.$store.commit('ui/cleanStepper');
            this.modal_alert = false;
        }
    },
}
</script>

<style scoped>

</style>
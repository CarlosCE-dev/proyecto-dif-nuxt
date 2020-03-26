<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Atención!</v-card-title>
        <v-card-text class="black--text">
          Estas seguro que quieres desactivar a este tutor del registro?
          <br><br>
          <span class="advertencia orange"> 
            {{ tutor.firstName }} {{ tutor.lastName }} {{ tutor.secondLastName }}  
          </span>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="red darken-1" text @click="show = false">Cancelar</v-btn>
          <v-btn color="green darken-1" text @click="eliminar">Estoy seguro</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default ({
    props: ['value'],
    computed: {
        show: {
            get () {
                return this.value;
            },
            set (value) {
                this.$emit('input', value)
            }
        },
        ...mapGetters("tutor", [
            "getTutor",
        ]),
        tutor(){
            return this.getTutor
        },
    }, 
    methods: {
        eliminar() {
            this.$store.commit('tutor/remove', this.tutor.advisorId ); 
            this.show = false;
            this.$emit('borrado', true );
        }
    }, 
});
</script>

<style scoped>

</style>
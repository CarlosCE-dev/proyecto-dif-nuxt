<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Atención!</v-card-title>
        <v-card-text class="black--text">
          Estas seguro que quieres desactivar a este guardian del registro? 
          <br> <br>
          <span class="advertencia orange"> 
            {{ guardian.firstName }} {{ guardian.lastName }} {{ guardian.secondLastName }}  
          </span>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="red darken-1" text @click="show = false">Cancelar</v-btn>
          <v-btn color="green darken-1" text @click="eliminar">Desactivar</v-btn>
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
      ...mapGetters("guardian", [
          "getGuardian",
      ]),
      guardian(){
          return this.getGuardian
      }  
  }, 
  methods: {
    eliminar() {
      this.$store.commit('guardian/remove', this.guardian.userId ); 
      this.show = false;
    }
  }, 
});
</script>

<style scoped>

</style>
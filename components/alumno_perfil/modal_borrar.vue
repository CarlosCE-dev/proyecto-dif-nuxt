<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Atención!</v-card-title>
        <v-card-text class="black--text">Estas seguro que quieres borrar este alumno del registro?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="show = false">Cancelar</v-btn>
          <v-btn color="green darken-1" text @click="eliminar">Eliminar</v-btn>
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
      ...mapGetters("alumno", [
          "getAlumno",
      ]),
      alumno(){
          return this.getAlumno
      },
  }, 
  methods: {
      eliminar() {
          this.$store.commit('alumno/remove', this.alumno.studentId ); 
          this.show = false;
          this.$router.push({ path: '/alumnos/' });
      }
  },  
});
</script>

<style scoped>

</style>
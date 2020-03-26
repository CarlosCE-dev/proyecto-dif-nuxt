<template>
    <div>
      <v-row justify="center">
        <v-dialog v-model="show" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Editar un nuevo alumno</span>
            </v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Nombre*" 
                                  required 
                                  v-model="alumno.firstName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Apellido paterno*" 
                                  required 
                                  v-model="alumno.lastName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Apellido materno*" 
                                  required 
                                  v-model="alumno.secondLastName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-checkbox v-model="alumno.active"
                                required 
                                label="Active*">
                    </v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="alumno.birthdate"
                                  label="Birthdate*"
                                  prepend-icon="mdi-calendar"
                                  readonly
                                  :rules="requiredRule"
                                  @click="modal_datepicker = true"
                    ></v-text-field>
                    <ModalDatePicker v-model="modal_datepicker" @date="date"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    Genero*
                    <v-radio-group v-model="alumno.gender" 
                                  dense 
                                  class="radio-group" 
                                  required
                                  :rules="radioRule()">
                      <v-radio v-for="n in genero" :key="n" :label="`${n}`" :value="n"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-container>
              <small>*Indica los campos requeridos</small>
            </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="show = false">Cancelar</v-btn>
              <v-btn color="green darken-1" text :disabled="!valid" @click="edit">Actualizar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Helpers
import { required, email, genero } from '~/helpers/rules_validate';

// Models
import { Student } from '~/models/student.js';

// Components
import ModalDatePicker from '~/components/ui/datepicker.vue';

export default ({
    props: ['value'],
    components: {
      ModalDatePicker,
    },
    data: () => ({
      valid: true,
      alumno: new Student(),
      modal_datepicker: false,
      genero: genero(),
      requiredRule: required(),
    }),
    watch: {
      Alumno ( data ) {
        const alumno = Object.assign( {}, data );
        this.alumno = new Student( alumno );
      },
    },
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
      Alumno(){
        return this.getAlumno
      },
    },
    methods: {
      radioRule(){
        return [ this.alumno.gender !== "" || "At least one should be selected" ];
      },
      edit() {
        
        if ( !this.$refs.form.validate() ) {
          const snackbar = { color: 'orange', timeout: 3000, state: true , text: 'Porfavor de rellenar todos los campos requeridos', top: true };
          return this.$store.commit('ui/snackbar', snackbar );
        }
        
        this.$store.commit('ui/loader', true );
        
        this.$store.commit('alumno/edit', this.alumno );
        this.$store.commit('ui/loader', false );
        this.show = false; 
      },
      date( date ){
        this.alumno.birthdate = date;
      }
    },   
});
</script>

<style scoped>

</style>
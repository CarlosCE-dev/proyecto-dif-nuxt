<template>
    <div>
      <v-row justify="center">
        <v-dialog v-model="show" persistent max-width="600px">
          <v-card>
             <v-card-title class="pa-2 azul">
                <v-icon color="white" class="pr-1">mdi-account</v-icon>
                <span class="headline white--text"> 
                  {{ tutor.firstName }} {{ tutor.lastName }} {{ tutor.secondLastName }}
                </span>
            </v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Nombre*" 
                                  required 
                                  v-model="tutor.firstName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Apellido paterno*" 
                                  required 
                                  v-model="tutor.lastName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Apellido materno*" 
                                  required 
                                  v-model="tutor.secondLastName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Username*" 
                                  required 
                                  v-model="tutor.username"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select v-model="tutor.profileId" 
                              item-text="profileName" 
                              item-value="profileId"
                              :items="profiles"
                              label="Profile*"
                              :rules="itemRule()"
                              required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-checkbox v-model="tutor.active"
                                required 
                                label="Active">
                    </v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="tutor.birthdate"
                                  label="Birthdate*"
                                  prepend-icon="mdi-calendar"
                                  readonly
                                  :rules="requiredRule"
                                  @click="modal_datepicker = true"
                    ></v-text-field>
                    <ModalDatePicker v-model="modal_datepicker" @date="date"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Numero de celular*" 
                                  required 
                                  :rules="requiredRule"
                                  v-model="tutor.phoneNumber">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    Genero*
                    <v-radio-group v-model="tutor.gender" 
                                  dense 
                                  class="radio-group" 
                                  required
                                  :rules="radioRule()">
                      <v-radio v-for="n in genero" :key="n" :label="`${n}`" :value="n"></v-radio>
                    </v-radio-group>
                  </v-col>
                  
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Relationship*" 
                                  required 
                                  v-model="tutor.relationship"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Dirección*" 
                                  required 
                                  v-model="tutor.address"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Comments*" 
                                  required 
                                  v-model="tutor.comments"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*Indica los campos requeridos</small>
            </v-card-text>
            </v-form>
            <v-card-actions>
              <v-btn color="orange darken-1" text @click="show = false">Cerrar</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="borrar">Desactivar</v-btn>
              <v-btn color="green darken-1" text @click="editar">Actualizar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Helpers
import { required, genero } from '~/helpers/rules_validate';

// Models
import { Advisor } from '~/models/advisor.js';
import { Profile } from '~/models/profile.js';

// Components
import ModalDatePicker from '~/components/ui/datepicker.vue';

export default {
  props: ['value'],
  components: { ModalDatePicker },
  data: () => ({
    valid: true,
    tutor: new Advisor(),
    modal_datepicker: false,
    genero: genero(),
    requiredRule: required(),
  }),
  computed: {
    show: {
      get () {
          return this.value;
      },
      set (value) {
          this.$emit('input', value)
      }
    },
    ...mapGetters("profile", [
        "getProfiles",
      ]),
    profiles(){
        return this.getProfiles
    },
    ...mapGetters("tutor", [
      "getTutor",
    ]),
    Tutor(){
      return this.getTutor
    } 
  },
  watch: {
    Tutor ( data ) {
      const tutor = Object.assign( {}, data );
      this.tutor = new Advisor( tutor );
    },
  },
  methods: {
    itemRule(){
      return [ this.tutor.profileId !== -1 || "At least one should be selected" ];
    },
    radioRule(){
      return [ this.tutor.gender !== "" || "At least one should be selected" ];
    },
    date( date ){
      this.tutor.birthdate = date;
    },
    borrar() {
      this.$emit('borrar', true );
    },
    editar(){
       if ( !this.$refs.form.validate() ) {
          const snackbar = { color: 'orange', timeout: 3000, state: true , text: 'Porfavor de rellenar todos los campos requeridos', top: true };
          return this.$store.commit('ui/snackbar', snackbar );
        }
        
        this.$store.commit('ui/loader', true );
        
        this.$store.commit('tutor/edit', this.tutor );
        this.$store.commit('ui/loader', false );
        
        this.show = false; 
    }
  },
}
</script>

<style scoped>

</style>
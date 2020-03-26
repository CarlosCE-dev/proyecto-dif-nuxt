<template>
    <div>
      <v-row justify="center">
        <v-dialog v-model="show" persistent max-width="600px">

          <v-card>
            <v-card-title>
              <span class="headline">Agregar un nuevo guardian</span>
            </v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Nombre*" 
                                  required 
                                  v-model="guardian.firstName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Apellido paterno*" 
                                  required 
                                  v-model="guardian.lastName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Apellido materno*" 
                                  required 
                                  v-model="guardian.secondLastName"
                                  :rules="requiredRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="9">
                    <v-text-field label="Email*" 
                                  required 
                                  v-model="guardian.email"
                                  :rules="emailRule">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-checkbox v-model="guardian.active"
                                required 
                                label="Active">
                    </v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="guardian.birthdate"
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
                                  v-model="guardian.phoneNumber">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    Genero*
                    <v-radio-group v-model="guardian.gender" 
                                  dense 
                                  class="radio-group" 
                                  required
                                  :rules="radioRule()">
                      <v-radio v-for="n in genero" :key="n" :label="`${n}`" :value="n"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-select v-model="guardian.profileId" 
                              item-text="profileName" 
                              item-value="profileId"
                              :items="profiles"
                              label="Profile*"
                              :rules="itemRule()"
                              required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
              <small>*Indica los campos requeridos</small>
            </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="show = false">Cancelar</v-btn>
              <v-btn color="green darken-1" text :disabled="!valid" @click="editar">Actualizar</v-btn>
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
import { Guardian } from '~/models/guardian.js';
import { Profile } from '~/models/profile.js';

// Components
import ModalDatePicker from '~/components/ui/datepicker.vue';

export default ({
  props: ['value'],
  components: { ModalDatePicker },
  data: () => ({
      valid: true,
      guardian: new Guardian(),
      modal_datepicker: false,
      genero: genero(),
      requiredRule: required(),
      emailRule: email(),
  }),
  watch: {
      Guardian ( data ) {
        const guardian = Object.assign( {}, data );
        this.guardian = new Guardian( guardian );
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
      ...mapGetters("guardian", [
          "getGuardian",
      ]),
      Guardian(){
          return this.getGuardian
      },
      ...mapGetters("profile", [
        "getProfiles",
      ]),
      profiles(){
        return this.getProfiles
      }  
  },
  methods: {
    itemRule(){
      return [ this.guardian.profileId !== -1 || "At least one should be selected" ];
    },
    radioRule(){
      return [ this.guardian.gender !== "" || "At least one should be selected" ];
    },
    editar() {
      
      if ( !this.$refs.form.validate() ) {
        const snackbar = { color: 'orange', timeout: 3000, state: true , text: 'Porfavor de rellenar todos los campos requeridos', top: true };
        return this.$store.commit('ui/snackbar', snackbar );
      }

      this.$store.commit('ui/loader', true );
      
      this.$store.commit('guardian/edit', this.guardian ); 
      this.$store.commit('ui/loader', false );
      this.show = false; 
    },
    date( date ){
      this.guardian.birthdate = date;
    }
  },
});
</script>

<style scoped>

</style>
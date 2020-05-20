
<template>
    <div>
        <v-card class="mb-4" color="transparent" elevation="0">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text class="pa-0">
                    <v-container fluid>

                        <!-- Datos Personales -->
                        <v-card elevation="2" class="pa-4 mb-4">
                            <v-row no-gutters>
                                <v-col cols="12" class="pb-4"> <h2> Datos generales </h2>  </v-col>
                                <v-col cols="12" sm="6" md="4" class="px-1">
                                    <v-text-field label="Nombre*"
                                        outlined 
                                        required 
                                        v-model="guardian.firstName"
                                        :rules="requiredRule">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4"  class="px-1">
                                    <v-text-field label="Apellido paterno*"
                                        outlined 
                                        required 
                                        v-model="guardian.lastName"
                                        :rules="requiredRule">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4"  class="px-1">
                                    <v-text-field label="Apellido materno*"
                                        outlined 
                                        required 
                                        v-model="guardian.secondLastName"
                                        :rules="requiredRule">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>

                        <div class="py-2"></div>

                         <!-- Datos Personales -->
                        <v-card elevation="2" class="pa-4 mb-4">
                            <v-row no-gutters>
                                <v-col cols="12" class="pb-4"> <h2> Datos personales </h2>  </v-col>
                                <v-col cols="12" sm="6" md="6" class="px-1">
                                     <v-text-field v-model="guardian.birthdate"
                                        outlined
                                        label="Birthdate*"
                                        prepend-inner-icon="mdi-calendar"
                                        readonly
                                        :rules="requiredRule"
                                        @click="modal_datepicker = true"
                                    ></v-text-field>
                                    <ModalDatePicker v-model="modal_datepicker" @date="date"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="6"  class="px-1">
                                    <v-text-field label="Numero de celular*"
                                        prepend-inner-icon="mdi-phone" 
                                        outlined 
                                        required 
                                        :rules="requiredRule"
                                        v-model="guardian.phoneNumber">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4"  class="px-1">
                                    Genero*
                                    <v-radio-group v-model="guardian.gender" 
                                                dense 
                                                class="radio-group" 
                                                required
                                                :rules="radioRule()">
                                    <v-radio v-for="n in genero" :key="n" :label="`${n}`" :value="n"></v-radio>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </v-card>
                    
                    </v-container>
                    <small class="red--text lighten-1 pl-4">*Indica los campos requeridos</small>
                </v-card-text>
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="stepper" :disabled="!valid"> Continue </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Helpers
import { required, genero, email } from '~/helpers/rules_validate';

// Models
import { Guardian } from '~/models/guardian.js';

// Components
import ModalDatePicker from '~/components/ui/datepicker.vue';

export default {
    components: {
      ModalDatePicker,
    },
    data: () => ({
      valid: true,
      guardian: new Guardian(),
      modal_datepicker: false,
      genero: genero(),
      requiredRule: required(),
      emailRule: email(),
    }),
    computed: {
      ...mapGetters("profile", [
        "getProfiles",
      ]),
      profiles(){
        return this.getProfiles
      },
      ...mapGetters("ui", [
        "getCleanStepper",
      ]),
      clean(){
        return this.getCleanStepper
      }  
    },
    watch:{
        clean( value ){
            if ( value > 0 ) {
                this.guardian = new Guardian();
                this.$refs.form.resetValidation();
            }
        }
    },
    methods: {
        itemRule(){
            return [ this.guardian.profileId !== -1 || "At least one should be selected" ];
        },
        radioRule(){
            return [ this.guardian.gender !== "" || "At least one should be selected" ];
        },
        date( date ){
            this.guardian.birthdate = date;
        },
        stepper() {

            if ( !this.$refs.form.validate() ) {
                const snackbar = { color: 'orange', timeout: 3000, state: true , text: 'Porfavor de rellenar todos los campos requeridos', top: true };
                return this.$store.commit('ui/snackbar', snackbar );
            }

            this.$store.commit('register/setDirector', this.guardian );
            this.$store.commit('ui/stepper', 2 );
        }
    },
}
</script>

<style scoped>

</style>
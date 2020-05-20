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
                                <v-col cols="12" sm="12" md="12" class="px-1">
                                    <v-text-field label="Nombre de la institución*"
                                                prepend-inner-icon="mdi-text-short"
                                                outlined 
                                                required 
                                                v-model="escuela.instituteName"
                                                :rules="requiredRule">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" class="px-1">
                                    <v-text-field label="Dirección*"
                                                prepend-inner-icon="mdi-map-marker"
                                                outlined 
                                                required 
                                                v-model="escuela.address"
                                                :rules="requiredRule">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4" class="px-1">
                                    <v-text-field label="Correo*"
                                                prepend-inner-icon="mdi-email"
                                                outlined 
                                                required 
                                                v-model="escuela.email"
                                                :rules="emailRule">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" class="px-1">
                                    <v-text-field label="Numero de telefono*"
                                                prepend-inner-icon="mdi-phone" 
                                                outlined
                                                required 
                                                :rules="requiredRule"
                                                v-model="escuela.phoneNumber">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>

                        <div class="py-2"></div>

                        <!-- Datos de ubicación -->
                        <v-card elevation="2" class="pa-4 my-4">
                            <v-row no-gutters>
                                <v-col cols="12" class="pb-4"> <h2> Datos de ubicación </h2>  </v-col>
                                <v-col cols="12" sm="6" md="6" class="px-1">
                                    <v-select v-model="escuela.stateId"
                                            outlined
                                            prepend-inner-icon="mdi-map-marker" 
                                            item-text="profileName" 
                                            item-value="profileId"
                                            :items="profiles"
                                            label="Estado*"
                                            :rules="itemRule()"
                                            required
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" class="px-1">
                                    <v-select v-model="escuela.profileId"
                                            outlined
                                            prepend-inner-icon="mdi-map-marker" 
                                            item-text="profileName" 
                                            item-value="profileId"
                                            :items="profiles"
                                            label="Municipio*"
                                            :rules="itemRule()"
                                            required
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" class="px-1">
                                    <v-select v-model="escuela.profileId"
                                            outlined 
                                            prepend-inner-icon="mdi-map-marker"
                                            item-text="profileName" 
                                            item-value="profileId"
                                            :items="profiles"
                                            label="Localidad*"
                                            :rules="itemRule()"
                                            required
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-container>
                    <small class="red--text lighten-1 pl-4">*Indica los campos requeridos</small>
                </v-card-text>
            </v-form>
            <v-card-actions>
                <v-btn color="orange" class="white--text" @click="back">Regresar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="stepper( 3 )"> Continue </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Helpers
import { required, email } from '~/helpers/rules_validate';

// Models
import { Institute } from '~/models/institute.js';

export default {
    data: () => ({
      valid: true,
      escuela: new Institute(),
      requiredRule: required(),
      emailRule: email(),
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
                this.escuela = new Institute();
                this.$refs.form.resetValidation();
            }
        }
    },
    methods: {
        itemRule(){
            return [ this.escuela.profileId !== -1 || "At least one should be selected" ];
        },
        back(){
             this.$store.commit('ui/stepper', 1 );
        },
        stepper( int ) {

            if ( !this.$refs.form.validate() ) {
                const snackbar = { color: 'orange', timeout: 3000, state: true , text: 'Porfavor de rellenar todos los campos requeridos', top: true };
                return this.$store.commit('ui/snackbar', snackbar );
            }

            this.$store.commit('register/setEscuela', this.escuela );
            this.$store.commit('ui/stepper', int )
        },
    }
}
</script>

<style scoped>

</style>
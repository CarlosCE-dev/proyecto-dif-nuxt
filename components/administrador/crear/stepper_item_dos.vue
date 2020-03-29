<template>
    <div>
        <v-card class="mb-12">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text class="pa-0">
                    <v-container>
                        <v-row align="center">
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="Dirreción*" 
                                            required 
                                            v-model="escuela.address"
                                            :rules="requiredRule">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Correo*" 
                                            required 
                                            v-model="escuela.email"
                                            :rules="emailRule">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Numero de celular*" 
                                            required 
                                            :rules="requiredRule"
                                            v-model="escuela.phoneNumber">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Estatus de suscripcióm*" 
                                            required 
                                            v-model="escuela.suscriptionStatus"
                                            :rules="requiredRule">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select v-model="escuela.profileId" 
                                        item-text="profileName" 
                                        item-value="profileId"
                                        :items="profiles"
                                        label="Profile*"
                                        :rules="itemRule()"
                                        required
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select v-model="escuela.stateId" 
                                        item-text="profileName" 
                                        item-value="profileId"
                                        :items="profiles"
                                        label="Estado*"
                                        :rules="itemRule()"
                                        required
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select v-model="escuela.profileId" 
                                        item-text="profileName" 
                                        item-value="profileId"
                                        :items="profiles"
                                        label="Municipio*"
                                        :rules="itemRule()"
                                        required
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select v-model="escuela.profileId" 
                                        item-text="profileName" 
                                        item-value="profileId"
                                        :items="profiles"
                                        label="Localidad*"
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
                <v-btn color="orange" class="white--text" @click="stepper( 1 )">Regresar</v-btn>
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
      } 
    },
    methods: {
        itemRule(){
            return [ this.escuela.profileId !== -1 || "At least one should be selected" ];
        },
        stepper( int ) {
            this.$store.commit('ui/stepper', int )
        },
    }
}
</script>

<style scoped>

</style>
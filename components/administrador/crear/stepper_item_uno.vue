
<template>
    <div>
        <v-card class="mb-12">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text class="pa-0">
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
                <v-btn color="primary" @click="stepper"> Continue </v-btn>
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
            return [ this.guardian.profileId !== -1 || "At least one should be selected" ];
        },
        radioRule(){
            return [ this.guardian.gender !== "" || "At least one should be selected" ];
        },
        date( date ){
            this.guardian.birthdate = date;
        },
        stepper() {
            this.$store.commit('ui/stepper', 2 );
        }
    },
}
</script>

<style scoped>

</style>
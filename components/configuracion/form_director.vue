<template>
    <div>

        <div class="d-flex align-center">
            <v-icon color="primary" left>mdi-account</v-icon>
            <h2>Director</h2>
        </div>

        <v-form v-model="valid" lazy-validation>
            <v-container fluid>
                <v-row no-gutters>

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

                     <v-col cols="12" class="pb-4">
                        <v-divider></v-divider>
                    </v-col>

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

                    <v-col cols="12">
                        <div class="d-flex align-center justify-end">
                            <v-btn text @click="guardar">
                                <v-icon color="success" left>mdi-content-save</v-icon>
                                Guardar cambios
                            </v-btn>
                        </div>
                    </v-col>

                </v-row>
            </v-container>
        </v-form>

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
    methods: {
        radioRule(){
            return [ this.guardian.gender !== "" || "At least one should be selected" ];
        },
        date( date ){
            this.guardian.birthdate = date;
        },
        guardar(){
            console.log(true);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
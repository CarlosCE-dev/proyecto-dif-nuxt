<template>
    <div>
        
        <div class="d-flex align-center">
            <v-icon color="primary" left>mdi-school</v-icon>
            <h2>Escuela</h2>
        </div>

        <v-form v-model="valid" lazy-validation>
            <v-container fluid>
                <v-row no-gutters>

                    <!-- Datos generales -->
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

                    <v-col cols="12" class="pb-4">
                        <v-divider></v-divider>
                    </v-col>                    

                    <!-- Datos ubicacion -->
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
        ...mapGetters("profile", [
        "getProfiles",
        ]),
        profiles(){
            return this.getProfiles
        },
    },
    methods: {
        itemRule(){
            return [ this.escuela.profileId !== -1 || "At least one should be selected" ];
        },
        guardar(){
            console.log(true);
        }
    },
}
</script>

<style scoped>

</style>
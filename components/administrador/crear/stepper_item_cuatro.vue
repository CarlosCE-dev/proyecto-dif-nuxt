<template>
    <div>
            <v-card class="mb-12" color="transparent" elevation="0">
           
            <v-card-text>

            <!-- Datos director -->
            <v-card elevation="2" class="pa-4 mb-4">
                <v-row no-gutters>
                    <v-col cols="12" class="pb-4"> <h2> Director </h2>  </v-col>
                        <div class="d-flex flex-column">
                            <span> <strong> Nombre: </strong> {{ director.firstName }} {{ director.lastName }} {{ director.secondLastName }} </span>
                            <span> <strong> Gender: </strong> {{ director.gender }}  </span>
                            <span> <strong> Birthdate: </strong> {{ director.birthdate }}  </span>
                            <span> <strong> Phone number: </strong> {{ director.phoneNumber }} </span>
                        </div>
                    <v-col/>
                </v-row>
            </v-card>

            <!-- Datos escuela-->
            <v-card elevation="2" class="pa-4 mb-4">
                <v-row no-gutters>
                    <v-col cols="12" class="pb-4"> <h2> Escuela </h2>  </v-col>
                        <div class="d-flex flex-column">
                            <span> <strong> Nombre: </strong> {{ escuela.instituteName }} </span>
                            <span> <strong> Address: </strong> {{ escuela.gender }}  </span>
                            <span> <strong> Email: </strong> {{ escuela.birthdate }}  </span>
                            <span> <strong> Estado: </strong> {{ escuela.stateId }} </span>
                            <span> <strong> Municipio: </strong> {{ escuela.municipalityId }} </span>
                            <span> <strong> Localidad: </strong> {{ escuela.localityId  }} </span>
                        </div>
                    <v-col/>
                </v-row>
            </v-card>

            </v-card-text>

            <v-card-actions>
                    <v-btn color="orange" class="white--text" @click="stepper">Regresar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="finalizar"> Continue </v-btn>
                </v-card-actions>
            </v-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("register", [
            "getDirector",
            "getEscuela",
            "getSuscripcion"
        ]),
        director(){
            return this.getDirector;
        },
        escuela(){
            return this.getEscuela;
        },
        suscripcion(){
            return this.getSuscripcion;
        }
    },
    methods: {
        stepper() {
            this.$store.commit('ui/stepper', 3 );
        },
        finalizar(){
            console.log("completado");
        }
    },
    
}
</script>

<style scoped>

</style>
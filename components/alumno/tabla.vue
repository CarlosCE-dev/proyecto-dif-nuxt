<template>
    <div>
            
        <!----- Components ------>
        <ModalAgregar v-model="modal_agregar"/>
        <ModalBorrar v-model="modal_borrar"/>
        
        <v-row class="pa-3">
            <v-col class="px-0 py-1" cols="12" sm="12" md="6">
                    <v-text-field prepend-icon="mdi-magnify" hide-details placeholder="Search..."></v-text-field>
            </v-col>
            <v-col align-self="end" justify-self="end" class="px-0 py-1" cols="12" sm="12" md="6">
                <div class="d-flex justify-end">
                    <v-btn color="success" @click="modal_agregar = true">
                        <v-icon left>mdi-plus</v-icon>
                        Agregar alumno
                    </v-btn>
                </div>
            </v-col>
        </v-row>
     
        <!----- Table ------>
        <div class="custom-table-wrapper py-2">
            
            <!----- Table Header ------>
            <v-card class="custom-card" color="azul">
                <v-system-bar class="azul pa-4 system-bar">
                <v-icon class="white--text mr-4">mdi-table-large</v-icon>
                <span class="white--text">Alumnos</span>
                </v-system-bar>
                <div class="table-headers">
                    <div class="custom-table-header flex-basis-5"></div>
                    <div class="custom-table-header flex-basis-10">
                        <p>Folio</p>
                    </div>
                    <div class="custom-table-header flex-basis-20">
                        <p>Nombre</p>
                    </div>
                    <div class="custom-table-header flex-basis-20">
                        <p>Insituto</p>
                    </div>
                    <div class="custom-table-header flex-basis-10">
                        <p>Genero</p>
                    </div>
                    <div class="custom-table-header flex-basis-20">
                        <p class="tab-header">Opciones</p>
                    </div>
                </div>
            </v-card>
            <!----- Table Header ------>
    
            <!----- Table Body ------>
            <div class="custom-table-body">
                
                <!--Row Starts-->
                <div class="custom-table-row" v-for="( alumno, index ) in alumnos" :key="index">

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-5">
                        <span class="mobile-column-name">
                            
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text"> 
                                <v-avatar size="38"><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
                            </span>
                        </div>
                    </div>
                    <!-- Cell -->

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10">
                        <span class="mobile-column-name">
                            Folio
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">{{ alumno.studentCardFolio }}</span>
                        </div>
                    </div>
                    <!-- Cell -->

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-20">
                        <span class="mobile-column-name">
                            Nombre
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">
                                <v-icon x-small :color="alumno.active ? 'green' : 'red'" class="mr-2">mdi-circle</v-icon>
                                {{ alumno.firstName }} {{ alumno.lastName }} {{ alumno.secondLastName }}
                            </span>
                        </div>
                    </div>
                    <!-- Cell -->

                   <!-- Cell -->
                    <div class="custom-table-cell flex-basis-20">
                        <span class="mobile-column-name">
                            Instituto
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">{{ alumno.instituteId }}</span>
                        </div>
                    </div>
                    <!-- Cell -->
                    
                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10">
                        <span class="mobile-column-name">
                            Genero
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">{{ alumno.gender }}</span>
                        </div>
                    </div>
                    <!-- Cell -->
                    
                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10  action-cell">
                        <div class="center-wrapper pa-1">
                            <v-btn small color="orange" class="white--text" @click="gestionar( alumno )"> 
                                <v-icon left>mdi-pencil-outline</v-icon>
                                Gestionar 
                            </v-btn>
                        </div>
                    </div>
                     <!-- Cell -->

                     <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10  action-cell">
                        <div class="center-wrapper pa-1">
                            <v-btn small color="red" class="white--text" @click="borrar( alumno )"> 
                                <v-icon left>mdi-block-helper</v-icon>
                                Desactivar 
                            </v-btn>
                        </div>
                    </div>
                     <!-- Cell -->

                </div>
                <!--Row Ends-->

            </div>
            <!----- Table Body ------>

        </div>
        <!----- Table ------>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// Components
import ModalAgregar from '~/components/alumno/modal_agregar.vue';
import ModalBorrar from '~/components/alumno/modal_borrar.vue';

export default ({
    components: {
       ModalAgregar,
       ModalBorrar
    },
    data: () => ({
        // Modales
        modal_agregar: false,
        modal_borrar: false
    }) ,
    computed: {
        ...mapGetters("alumno", [
            "getAlumnos",
        ]),
        alumnos(){
            return this.getAlumnos
        }  
    },
    methods: {
        borrar( alumno ) {  
            this.$store.commit('alumno/set', alumno ); 
            this.modal_borrar = true;
        },
        gestionar( alumno ){
            this.$store.commit('alumno/set', alumno );
            this.$router.push({ path: '/alumnos/perfil' })
        }
    }, 
})
</script>

<style scoped>
.text-field{
    width: 200px;
}
</style>
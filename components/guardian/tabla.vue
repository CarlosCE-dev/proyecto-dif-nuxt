<template>
    <div>

        <!-- Componentes -->
        <ModalAgregar v-model="modal_agregar"/>
        <ModalBorrar v-model="modal_borrar"/>

            <v-row class="pa-3">
                <v-col class="px-0 py-1" cols="12" sm="12" md="6">
                        <v-text-field prepend-icon="mdi-magnify" hide-details placeholder="Search..."></v-text-field>
                </v-col>
                <v-col align-self="end" justify-self="end" class="px-0 py-1" cols="12" sm="12" md="6">
                    <div class="d-flex justify-end">
                        <v-btn color="success" @click="modal_agregar = true">
                            Agregar guardian
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
                <span class="white--text">Usuarios</span>
                </v-system-bar>
                <div class="table-headers">
                    <div class="custom-table-header flex-basis-5">
                        <p>ID</p>
                    </div>
                    <div class="custom-table-header flex-basis-20">
                        <p>Name</p>
                    </div>
                    <div class="custom-table-header flex-basis-20">
                        <p>Email</p>
                    </div>
                    <div class="custom-table-header flex-basis-10">
                        <p>Phone</p>
                    </div>
                    <div class="custom-table-header flex-basis-10">
                        <p>Role</p>
                    </div>
                    <div class="custom-table-header flex-basis-20">
                        <p class="tab-header">Options</p>
                    </div>
                </div>
            </v-card>
            <!----- Table Header ------>
    
            <!----- Table Body ------>
            <div class="custom-table-body">
                
                <!--Row Starts-->
                <div class="custom-table-row" v-for="(item, index) in 50" :key="index">

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-5">
                        <span class="mobile-column-name">
                            ID
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">1</span>
                        </div>
                    </div>
                    <!-- Cell -->

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-20">
                        <span class="mobile-column-name">
                            Name
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">Carlos Esteban Corral Esparza</span>
                        </div>
                    </div>
                    <!-- Cell -->

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-20">
                        <span class="mobile-column-name">
                            Email
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">Email</span>
                        </div>
                    </div>
                    <!-- Cell -->

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10">
                        <span class="mobile-column-name">
                            Phone
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">Email</span>
                        </div>
                    </div>
                    <!-- Cell -->

                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10">
                        <span class="mobile-column-name">
                            Role
                        </span>
                        <div class="center-wrapper">
                            <span class="column-text">Email</span>
                        </div>
                    </div>
                    <!-- Cell -->
                    
                    <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10  action-cell">
                        <div class="center-wrapper pa-1">
                            <v-btn small color="orange" class="white--text"> Editar </v-btn>
                        </div>
                    </div>
                     <!-- Cell -->

                     <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10  action-cell">
                        <div class="center-wrapper pa-1">
                            <v-btn small color="red" class="white--text" @click="modal_borrar = true"> Borrar </v-btn>
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
// Components
import ModalAgregar from '~/components/guardian/agregar_modal.vue';
import ModalBorrar from '~/components/guardian/borrar_modal.vue';

export default ({
    components: {
        ModalAgregar,
        ModalBorrar
    },
    data: () => ({
        // Modales
        modal_agregar: false,
        modal_borrar: false,

    })  
})
</script>

<style scoped>
.text-field{
    width: 200px;
}
</style>
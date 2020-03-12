<template>
    <div>

        <!-- Componentes -->
        <ModalAgregar v-model="modal_agregar"/>
        <ModalBorrar v-model="modal_borrar"/>

        <div class="d-flex align-end justify-end">
            <v-btn color="success" @click="modal_agregar = true">
                Agregar guardian
            </v-btn>
        </div>
        
        <!----- Table ------>
        <div class="custom-table-wrapper py-2">
            
            <!----- Table Header ------>
            <v-card class="custom-card" color="azul">
                <v-system-bar class="azul pa-4 system-bar">
                <v-icon class="white--text mr-4">mdi-table-large</v-icon>
                <span class="white--text">Registered Representatives</span>
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
            <div class="custom-table-body scrollbar" id="style">
                
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
                        <span class="mobile-column-name">
                            Options
                        </span>
                        <div class="center-wrapper pa-1">
                            <v-btn small color="orange" class="white--text"> Editar </v-btn>
                        </div>
                    </div>
                     <!-- Cell -->

                     <!-- Cell -->
                    <div class="custom-table-cell flex-basis-10  action-cell">
                        <span class="mobile-column-name">
                            Options
                        </span>
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

</style>
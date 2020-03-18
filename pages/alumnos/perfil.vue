<template>
    <div class="py-2 main-card">

        <!-- Components -->
        <ModalAgregar v-model="modal_agregar"/>
        <ModalBorrar v-model="modal_borrar"/>
        <ModalEditar v-model="modal_editar"/>

        <!-- Header -->
        <Header @agregar="modal_agregar = !modal_agregar"
                @editar="modal_editar = !modal_editar"
                @borrar="modal_borrar = !modal_borrar"
        />

        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="pa-2" v-for="(item, index) in 5" :key="index">
                    <!-- Tutores -->
                   <Card/>
                </v-col>
            </v-row>
        </v-container>  
    </div>
</template>

<script>
// Components
import Header from "~/components/alumno_perfil/header.vue";
import Card from "~/components/alumno_perfil/card.vue";
import ModalAgregar from "~/components/alumno_perfil/agregar_modal.vue";
import ModalEditar from "~/components/alumno_perfil/editar_modal.vue";
import ModalBorrar from "~/components/alumno_perfil/borrar_modal.vue";

export default {
    components: {
        Header,
        Card,
        ModalAgregar,
        ModalEditar,
        ModalBorrar
    },
    data: () => ({
        // Modales
        modal_agregar: false,
        modal_borrar: false,
        modal_editar: false
    }),
}
</script>

<style scoped>
.main-card{
    position: relative;
    overflow: hidden;
}
</style>
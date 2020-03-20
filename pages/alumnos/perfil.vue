<template>
    <div class="py-2 main-card">

        <!-- Components -->
        <ModalAgregar v-model="modal_agregar"/>
        <ModalBorrar v-model="modal_borrar"/>
        <ModalEditar v-model="modal_editar"/>

        <!-- Header -->
        <Header @agregar="modal_agregar = !modal_agregar"
                @editar="editar"
                @borrar="borrar"
        />

        <Tutores/>
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import Header from "~/components/alumno_perfil/header.vue";

import Tutores from "~/components/tutor/tutores.vue";

import ModalAgregar from "~/components/tutor/modal_agregar.vue";
import ModalEditar from "~/components/alumno_perfil/modal_editar.vue";
import ModalBorrar from "~/components/alumno_perfil/modal_borrar.vue";
    
export default {
    components: {
        Header,
        ModalAgregar,
        ModalEditar,
        ModalBorrar,
        Tutores
    },
    data: () => ({
        // Modales
        modal_agregar: false,
        modal_borrar: false,
        modal_editar: false
    }),
    computed: {
        ...mapGetters("alumno", [
            "getAlumno",
        ]),
        alumno(){
            return this.getAlumno
        }  
    },
    created(){
        if ( Object.keys( this.alumno ).length === 0 ){ 
          this.$router.push({ path: '/alumnos/' });
        }
    },
    methods: {
        editar() {
            this.$store.commit('alumno/set', this.alumno );
            this.modal_editar = true;
        },
        borrar(){
            this.$store.commit('alumno/set', this.alumno );
            this.modal_borrar = true;
        },
    },
}
</script>

<style scoped>
.main-card{
    position: relative;
    overflow: hidden;
}
</style>
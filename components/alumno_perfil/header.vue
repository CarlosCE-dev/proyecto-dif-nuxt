<template>
    <div>
        <!-- Fondo -->
        <HeaderFondo/>

        <div class="d-flex align-center justify-end pa-4 buttons">
            <v-btn color="orange" dark @click="openEdit">Editar</v-btn>
            <span class="px-1"></span>
            <v-btn color="red" @click="openDelete" dark>Desactivar</v-btn>
        </div>

        <span class="spacer"></span>

        <div class="d-flex align-center header-index">
            <span class="pl-3">
                <v-avatar size="136" class="avatar">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-avatar>
            </span>
            <span class="w60 d-flex align-start">
                <div class="text">
                    {{ alumno.firstName }} {{ alumno.lastName }} {{ alumno.secondLastName }} 
                    <br> Grupo: 1 - A  {{ alumno.studentId }}
                </div>
            </span>
            <span class="pr-4">
                <v-btn color="success buttons" @click="openAdd" class="block-button">
                    <v-icon left>mdi-plus</v-icon>
                    Agregar tutor
                </v-btn>
                <v-btn fab color="success buttons" @click="openAdd" class="round-button">
                    <v-icon x-large>mdi-plus</v-icon>
                </v-btn>
            </span>
        </div>
        <span class="text-mobile">
            <div class="d-flex pa-3">
                <span>
                    <strong> {{ alumno.firstName }} {{ alumno.lastName }} {{ alumno.secondLastName }} </strong> <br>
                    Grupo: 1 - A  ID: {{ alumno.studentId }}
                </span>
            </div>
        </span>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components 
import HeaderFondo from "~/components/alumno_perfil/header_fondo.vue";

export default {
    components: {
        HeaderFondo
    },
    computed: {
        ...mapGetters("alumno", [
            "getAlumno",
        ]),
        alumno(){
            return this.getAlumno
        }  
    },
    methods: {
        openEdit() {
            this.$emit('editar');    
        },
        openDelete() {
            this.$emit('borrar');    
        },
        openAdd() {
            this.$emit('agregar');    
        }
    },
}
</script>

<style scoped>
.header-index{
    position: relative;
    z-index: 10;
}
.avatar{
    position: relative;
    z-index: 10;
}
.buttons{
    position: relative;
    z-index: 10;
}

.text-mobile{
    font-weight: 900;
    font-size: 18px;
    display: none;
}
.text{
    line-height: 1.5rem;
    padding-left: 10px;
    position: absolute;
    top: 15px;
    font-size: 24px;
    
    color: white;
}
.w60{
    position: relative;
    display: block;
    width: 70%;
    height: 136px;
}
.spacer{
    display: block;
    height: 63px;
}

.round-button{
    display: none;
}
@media screen and (max-width: 700px){
    .text{
        display: none;
    }
    .text-mobile{
        display: block;
    }
}
@media screen and (max-width: 430px){
    .round-button{
        display: block;
    }
    .block-button{
        display: none;
    }
}
</style>
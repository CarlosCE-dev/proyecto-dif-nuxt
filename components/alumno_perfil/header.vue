<template>
    <div>
        <div class="bg-alumno">
            <span class="cuadrado azul">
                <span class="circle"></span>
            </span>
        </div>
        <div class="d-flex align-center justify-end pa-4">
            <v-btn color="orange" dark @click="openEdit">Editar</v-btn>
            <span class="px-1"></span>
            <v-btn color="red" @click="openDelete" dark>Desactivar</v-btn>
        </div>
        <span class="spacer"></span>
        <div class="d-flex align-center">
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
            <span class="pr-3">
                <v-btn fab color="success" @click="openAdd">
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

export default {
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
.bg-alumno{
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 200px;
}
.cuadrado{
    border-radius: 15px;
    top: 0px;
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
}
.circle{
    border-radius: 50%;
    display: block;
    background-color: white;
    height: 136px;
    width: 136px;
    opacity: 0.6;
    position: absolute;
    left: 12px;
    bottom: -40px;
}
@media screen and (max-width: 603px){
    .text{
        display: none;
    }
    .text-mobile{
        display: block;
    }
}
</style>
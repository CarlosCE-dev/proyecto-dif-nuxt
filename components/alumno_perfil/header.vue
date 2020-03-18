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
            <v-btn color="red" @click="openDelete" dark>Borrar</v-btn>
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
                    Carlos Esteban Corral Esparza <br> Grupo: 1 - A  
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
                    <strong> Carlos Esteban Corral Esparza  </strong> <br>
                    Grupo: 1 - A
                </span>
            </div>
        </span>
    </div>
</template>

<script>
    export default {
        methods: {
            openEdit() {
                this.$emit('editar', true );    
            },
            openDelete() {
                this.$emit('borrar', true );    
            },
            openAdd() {
                this.$emit('agregar', true );    
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
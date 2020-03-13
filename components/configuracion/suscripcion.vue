<template>
    <div>
        <v-card class="card-suscripcion">
            <span class="fondo-morado morado"></span>
            <div class="descripcion">
                <div class="d-flex align-center">
                     <v-icon class="icon">mdi-home</v-icon> 
                    <span>Alignment using flexbox</span>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.card-suscripcion{
    height: 242px;
}
.fondo-morado{
    top: 0px;
    left: 0px;
    height: 100%;
    width: 40%;
    position: absolute;
}
.descripcion{
    top: 0px;
    right: 0px;
    height: 100%;
    width: 60%;
    position: absolute;
}
</style>
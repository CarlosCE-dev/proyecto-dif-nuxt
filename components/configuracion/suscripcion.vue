<template>
    <div>
        <h1> Suscripción</h1>
        <v-card class="card-suscripcion">
            <span class="fondo-morado morado d-flex align-center justify-center">
                <span class="circulo-morado"></span>
                <div class="texto-morado white--text text-center">
                   Suscripción
                   <br> <strong class="green--text suscripcion-status"> Activa</strong>
                </div>
            </span>
            <div class="descripcion d-flex flex-column justify-center">
               <div class="pa-4 pa-xs-2">
                    <v-icon color="morado">mdi-home</v-icon>
                    <span class="pl-3"><strong>Home</strong></span>
               </div>
               <div class="pa-4 pa-xs-2">
                    <v-icon color="morado">mdi-calendar</v-icon>
                    <span class="pl-3"><strong>Home</strong></span>
               </div>
               <div class="pa-4 pa-xs-2">
                    <v-icon color="morado">mdi-home</v-icon>
                    <span class="pl-3"><strong>Fecha de vencimiento</strong></span>
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
.suscripcion-status{
    padding: 5px;
    background-color: white;
    border-radius: 15px;
}
.texto-morado{
    font-size:1.4rem;
}
.card-suscripcion{
    height: 242px;
}
.circulo-morado{
    top: 20%;
    z-index: 1;
    opacity: 0.2;
    position: absolute;
    border-radius: 50%;
    height: 350px;
    width: 350px;
    background-color: white;
}
.fondo-morado{
    overflow:hidden;
    border-radius: 0% !important;
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
@media screen and (max-width: 420px){
    .texto-morado{
        font-size:1rem;
    }
}

</style>
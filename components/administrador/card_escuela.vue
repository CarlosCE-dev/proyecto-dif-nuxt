<template>
    <div>
        <v-card class="card-escuela" color="azul" dark>
            <span class="square"></span>
            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="12" md="6" sm="6" xs="12">
                        <div class="d-flex align-center justify-center">
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content class="sm-ctn">
                                    <v-list-item-title class="font-weight-bold title">Escuela</v-list-item-title>
                                    <v-list-item-subtitle>Lugar, Lugar, Lugar</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" xs="12">
                        <div class="d-flex align-center justify-center">
                            <v-list-item>
                                <v-list-item-content class="sm-ctn">
                                    <v-list-item-title class="text-right title"><strong>Director:</strong> {{ escuela.name }} </v-list-item-title>
                                    <v-list-item-subtitle class="text-right"><strong>Email:</strong> director@hotmail.com {{ escuela.id }} </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </div>
                    </v-col>
                </v-row>
                <v-row no-gutters align="center">
                    <v-spacer></v-spacer>
                    <v-col> 
                        <div class="d-flex justify-end">
                            <v-btn color="white" class="morado--text">Gestionar suscripción</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['escuela']
}
</script>

<style scoped>
.card-escuela{
    overflow: hidden;
}
.square{
    transform: translate(-0%, -50%);
    top: 50%;
    position: absolute;
    width: 100%;
    height: 90%;
    background-color: white;
    opacity: 0.2;
}
</style>
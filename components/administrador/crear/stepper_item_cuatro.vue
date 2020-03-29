<template>
    <div>
           <v-card class="mb-12">
            <v-btn>a41412424da</v-btn>
            <v-card-actions>
                    <v-btn color="orange" class="white--text" @click="stepper">Regresar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="finalizar"> Continue </v-btn>
                </v-card-actions>
            </v-card>
    </div>
</template>

<script>

export default {
    methods: {
        stepper() {
            this.$store.commit('ui/stepper', 3 );
        },
        finalizar(){
            console.log("completado");
        }
    },
}
</script>

<style scoped>

</style>
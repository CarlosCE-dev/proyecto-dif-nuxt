<template>
    <div>
           <v-card class="mb-12">
            <v-btn>Hasda sdasdj  asjdajsd </v-btn>
                <v-card-actions>
                    <v-btn color="orange" class="white--text" @click="stepper( 1 )">Regresar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="stepper( 3 )"> Continue </v-btn>
                </v-card-actions>
            </v-card>

           
            
    </div>
</template>

<script>

export default {
    methods: {
        stepper( int ) {
            this.$store.commit('ui/stepper', int )
        },
    }
}
</script>

<style scoped>

</style>
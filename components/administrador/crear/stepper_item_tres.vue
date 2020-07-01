<template>
    <div>
           <v-card class="mb-4" color="transparent" elevation="0">
            <v-card-text class="pa-4">
                    
            <!-- Datos Personales -->
            <v-card elevation="2" class="pa-4 mb-4">
                <v-row no-gutters>
                    <v-col cols="12" class="pb-4"> <h2> Costo </h2>  </v-col>
                    <v-col cols="12" class="px-1">
                        <h1> ${{ precio }} </h1>
                        <v-slider v-model="duracion" :tick-labels="ticksLabels" :max="3" step="1" ticks="always" tick-size="4"
                        ></v-slider>
                    </v-col>
                </v-row>
            </v-card>

            </v-card-text>
            <v-card-actions>
                    <v-btn color="orange" class="white--text" @click="stepper( 2 )">Regresar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="stepper( 4 )"> Continue </v-btn>
                </v-card-actions>
            </v-card>
    </div>
</template>

<script>

export default {
    data: () => ({
        precio: 1,
        duracion: 1,
        ticksLabels: [
          '1 Mes',
          '3 Meses',
          '6 Meses',
          '12 Meses',
        ],
    }),
    methods: {
        stepper( int ) {

            this.$store.commit('register/setSuscripcion', this.precio );
            this.$store.commit('ui/stepper', int );
        },
    },
    watch: {
        duracion( value ){
            value++
            this.precio = 50 * value;
        }
    }
}
</script>

<style scoped>

</style>
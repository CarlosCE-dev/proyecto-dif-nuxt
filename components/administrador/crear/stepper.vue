<template>
    <div class="pa-2">
   
<v-stepper v-model="stepper" class="elevation-0">
    
    <v-stepper-header class="stepper-header">
      
      <v-stepper-step :complete="stepper > 1" step="1">Ingresar director</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="stepper > 2" step="2">Ingresar escuela</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="stepper > 3" step="3">Suscripción</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">Finalizar registro</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items class="fondo">
      
      <v-stepper-content step="1" class="pa-2">
          <h1 class="pl-4"> Información del director</h1>
          <StepperItemUno/>
      </v-stepper-content>
      
      
      <v-stepper-content step="2" class="pa-2 fondo">
        <h1 class="pl-4"> Información de la escuela</h1>
        <StepperItemDos/>
      </v-stepper-content>

      <v-stepper-content step="3" class="pa-2">
        <h1  class="pl-4"> Suscripción </h1>
        <StepperItemTres/>
      </v-stepper-content>

      <v-stepper-content step="4" class="pa-2">
        <h1  class="pl-4"> Resumen del nuevo registro</h1>
        <StepperItemCuatro/>
      </v-stepper-content>
     
    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import StepperItemUno from "~/components/administrador/crear/stepper_item_uno.vue";
import StepperItemDos from "~/components/administrador/crear/stepper_item_dos.vue";
import StepperItemTres from "~/components/administrador/crear/stepper_item_tres.vue";
import StepperItemCuatro from "~/components/administrador/crear/stepper_item_cuatro.vue";

    export default {
        components: {
          StepperItemUno,
          StepperItemDos,
          StepperItemTres,
          StepperItemCuatro
        },
        data: () => ({
        }),
        computed: {
          ...mapGetters("ui", [
            "getStepper",
          ]),
          stepper(){
            return this.getStepper
          }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="pa-2">
  
<v-stepper v-model="stepper" >
    
    <v-stepper-header>
      
      <v-stepper-step :complete="stepper > 1" step="1">Ingresar director</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="stepper > 2" step="2">Ingresar escuela</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Finalizar registro</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      
      <v-stepper-content step="1" class="pa-2">
          <h1> Información del director</h1>
          <StepperItemUno/>
      </v-stepper-content>
      
      
      <v-stepper-content step="2" class="pa-2">
        <h1> Información de la escuela</h1>
        <StepperItemDos/>
      </v-stepper-content>

      <v-stepper-content step="3" class="pa-2">
        <h1> Detalle del registro</h1>
        <StepperItemTres/>
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

    export default {
        components: {
          StepperItemUno,
          StepperItemDos,
          StepperItemTres
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
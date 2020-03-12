<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Atención!</v-card-title>
        <v-card-text class="black--text">Estas seguro que quieres remover a este guardian?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="show = false">Cancelar</v-btn>
          <v-btn color="green darken-1" text @click="show = false">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

  export default ({
    props: ['value'],
    computed: {
          show: {
              get () {
                //@ts-ignore
                return this.value;
              },
              set (value) {
                //@ts-ignore
                this.$emit('input', value)
              }
          }
      },  
  });
</script>

<style scoped>

</style>
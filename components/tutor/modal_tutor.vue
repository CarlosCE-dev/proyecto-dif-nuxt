<template>
    <div>

      <v-row justify="center">
        <v-dialog v-model="show" persistent max-width="600px">
          <v-card>
             <v-card-title class="pa-2 azul">
                <v-icon color="white" class="pr-1">mdi-account</v-icon>
                <span class="headline white--text">{{ tutor.name }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal first name*" required v-model="name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests" multiple></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange darken-1" text @click="show = false">Cerrar</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="borrar">Borrar</v-btn>
              <v-btn color="green darken-1" text>Actualizar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['value'],
  data: () => ({
    id: '', 
    name: ''
  }),
  computed: {
    show: {
      get () {
          return this.value;
      },
      set (value) {
          this.$emit('input', value)
      }
    },
    ...mapGetters("tutor", [
      "getTutor",
    ]),
    tutor(){
      return this.getTutor
    } 
  },
  watch: {
    tutor ( tutor ) {
      this.id = tutor.id;
      this.name = tutor.name;
    },
  },
  methods: {
    borrar() {
      this.$emit('borrar', true );
    }
  },
}
</script>

<style scoped>

</style>
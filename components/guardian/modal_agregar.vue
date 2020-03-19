<template>
    <div>
      <v-row justify="center">
        <v-dialog v-model="show" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Add new guardian</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal first name*" required></v-text-field>
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
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="show = false">Cancelar</v-btn>
              <v-btn color="green darken-1" text @click="agregar">Agregar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
</template>

<script>
export default ({
    props: ['value'],
    computed: {
        show: {
          get () {
           return this.value;
          },
          set (value) {
            this.$emit('input', value)
          }
        }
    },
    methods: {
      agregar() {
        const guardian = { id: Math.random().toString(36).substring(7), name: Math.random().toString(36).substring(7) }
        this.$store.commit('guardian/add', guardian ); 
        this.show = false;
      }
    },  
});
</script>

<style scoped>

</style>
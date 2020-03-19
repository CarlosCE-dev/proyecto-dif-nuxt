<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="pa-2" v-for="(item, index) in tutores" :key="index">
                    <!-- Tutores -->
                   <Card/>
                </v-col>
            </v-row>
        </v-container>  
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import Card from "~/components/tutor/card.vue";

export default {
    components: {
        Card
    },
    computed: {
        ...mapGetters("tutor", [
            "getTutores",
        ]),
        tutores(){
            console.log(this.getTutores);
            
            return this.getTutores
        }  
    },
}
</script>

<style scoped>

</style>
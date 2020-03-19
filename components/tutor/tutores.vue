<template>
    <div>

        <ModalTutor v-model="modal_tutor" @borrar="borrar"/>
        <ModalBorrar v-model="modal_borrar" @borrado="borrado"/>

        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="pa-2" v-for="(tutor, index) in tutores" :key="index">
                    <!-- Tutores -->
                   <Card @abrir="ajustes" :tutor="tutor"/>
                </v-col>
            </v-row>
        </v-container>  
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import ModalTutor from "~/components/tutor/modal_tutor.vue";
import ModalBorrar from "~/components/tutor/modal_borrar.vue";
import Card from "~/components/tutor/card.vue";

export default {
    components: {
        ModalTutor,
        ModalBorrar,
        Card
    },
    data: () => ({
        modal_tutor: false,
        modal_borrar: false,
    }),
    computed: {
        ...mapGetters("tutor", [
            "getTutores",
        ]),
        tutores(){
            return this.getTutores
        }  
    },
    methods: {
        ajustes( tutor ) {
            console.log(tutor);
            this.$store.commit('tutor/set', tutor );
            this.modal_tutor = true;
        },
        borrar( boolean ){
            console.log(boolean);
            
            this.modal_borrar = true;
        },
        borrado( boolean ){
            this.modal_tutor = false;
        }
    },
}
</script>

<style scoped>

</style>
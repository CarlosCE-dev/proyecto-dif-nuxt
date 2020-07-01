<template>
    <div>
        <v-card>
            <v-tabs v-model="tab" background-color="morado" dark>
                <v-tab v-for="item in items" :key="item.tab">
                    <span class="mobile">{{ item.mobile }}</span>
                    <span class="web">{{ item.name }}</span>
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <FormDirector class="pa-2"/>
                </v-tab-item>
                <v-tab-item>
                    <FormEscuela class="pa-2"/>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import FormEscuela from "~/components/configuracion/form_escuela.vue";
import FormDirector from "~/components/configuracion/form_director.vue";

export default {
    components: {
        FormEscuela,
        FormDirector
    },
    data: () => ({
        items: [
            {   
                name: 'Editar director',
                mobile: 'Director'
            }, 
            {
                name: 'Editar escuela',
                mobile: 'Escuela'
            }
        ]
    }),
    computed: {
        ...mapGetters("ui", [
            "getTab",
        ]),
        tab: {
            get () {
                return this.getTab;
            },
            set (value) {
                this.$store.commit('ui/tabs', value );
            }
        },
    },
}
</script>

<style scoped>
.mobile{
    display: none;
}
@media screen and (max-width: 450px){
    .mobile{
        display: block;
    }
    .web{
        display: none;
    }
}
</style>
<template>
    <div>
        <v-card>
            <v-tabs v-model="tab" background-color="morado" dark>
                <v-tab v-for="item in items" :key="item.tab">
                    {{ item }}
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
        items: ['Editar director', 'Editar escuela']
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

<style lang="scss" scoped>

</style>
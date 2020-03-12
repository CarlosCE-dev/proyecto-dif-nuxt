<template>
    <div>
        <v-navigation-drawer color="ligero-2" width="320" right app :fixed="fix" floating persistent v-model='drawer'>
      
        <v-list>
            
            <!-- Avatar -->
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-right font-weight-bold title">Fernado Felix</v-list-item-title>
                <v-list-item-subtitle  class="text-right">Super admin</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-list-item-avatar>
            </v-list-item>

            <!-- Spacer -->
            <div class="spacer d-flex align-top">
                <v-btn class="mx-2 btn-small" fab dark small elevation="0" color="red" @click="drawer = false">
                    <v-icon dark>mdi-close</v-icon>
                </v-btn>
            </div>

            <!-- Titulo -->
            <v-list-item-title class="text-center py-1 morado--text">
            <strong class="headline font-weight-bold">Custo Kids Panel</strong>
            </v-list-item-title>
            
            <!-- Cards -->
            <div class="d-flex align-center justify-center" v-for="(item, index) in items" :key="index">
            <Card :item="item"/>
            </div>

        </v-list>

        <!-- Log out -->
        <template v-slot:append>
            <div class="pa-2">
            <v-btn text block color="morado">
                Logout
                <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
            </div>
        </template>
    
        </v-navigation-drawer>
    </div>
</template>

<script>
// Components
import Card from "~/components/sidebar/card.vue";

export default {
    components: {
        Card,
    },
    props: ['value','fixed','items'],
    data: () => ({
        fix: false,
    }),
    watch: {
        fixed: function( fixed ) {
            console.log(fixed);
            
            this.fix = fixed;
        }
    },
    computed: {
        drawer: {
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

}
</script>

<style scoped>
.btn-small{
    display: none;
}
@media screen and (max-width: 581px){
    .btn-small{
        display: block;
    }
}

</style>
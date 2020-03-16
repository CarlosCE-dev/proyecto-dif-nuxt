<template>
    <div class="py-2 main-card">
        <Header/>
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="pa-2" v-for="(item, index) in 5" :key="index">
                   <Card/>
                </v-col>
            </v-row>
        </v-container>  
        
    </div>
</template>

<script>
import Header from "~/components/alumno_perfil/header.vue";
import Card from "~/components/alumno_perfil/card.vue";
export default {
    components: {
        Header,
        Card
    }
    
}
</script>

<style scoped>

.main-card{
    position: relative;
    overflow: hidden;
}

</style>
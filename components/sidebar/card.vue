<template>
    <div>
        <v-hover v-slot:default="{ hover }">
            <v-card class="mx-2 my-1 card-item" 
                    height="58" width="270" 
                    :color="hover ? '#fafafa' : '#FFF'"
                    :to="item.route" flat>

                <v-list-item class="list-item">
                    <div class="icon-box d-flex align-center justify-center azul">
                        <span class="circle"></span>
                        <v-icon color="white">{{ item.icon }}</v-icon>
                    </div>
                    
                    <div class="pl-2"></div>

                    <v-list-item-content>
                        <v-list-item-title >{{ item.name }}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar>
                        <v-icon color="azul" x-large>mdi-chevron-right</v-icon>
                    </v-list-item-avatar>
                </v-list-item>

            </v-card>
        </v-hover>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        props: ['item']
    })
</script>

<style scoped>
.list-item{
    height: 58px;
}
.card-item{
    cursor:pointer;
    border-radius: 20px !important;
}
.icon-box{
    position: relative;
    overflow: hidden;
    border-radius: 7px;
    height:38px;
    width: 38px;
    
}
.circle{
    opacity: 0.2;
    bottom: -23px;
    left: -15px;
    position: absolute;
    border-radius: 50%;
    height:50px;
    width: 50px;
    background: white;
}
</style>
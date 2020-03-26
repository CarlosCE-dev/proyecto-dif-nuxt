<template>
    <div>
        <v-card :color="tutor.active ? 'verde' : 'rojo'">
           <v-list-item class="sm-box">
                <v-list-item-avatar size="65" class="mobile">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="sm-ctn">
                    <v-list-item-title class=" font-weight-bold text-wrap text-mobile">
                        {{ tutor.firstName }} {{ tutor.lastName }} {{ tutor.secondLastName }}
                    </v-list-item-title>
                    <v-list-item-subtitle> 
                        <strong> {{ tutor.relationship }} </strong>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle  class="black--text text-wrap">
                        {{ tutor.address }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon @click="abrir">
                        <v-icon color="black">mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['tutor'],
    methods: {
        abrir() {
           this.$emit( 'abrir', this.tutor );
        }
    },
}
</script>

<style scoped>
.text-mobile{
       font-size: 18px;
    }
@media screen and (max-width: 402px){
    .text-mobile{
       font-size: 14px;
    }
}
@media screen and (max-width: 321px){
    .text-mobile{
       font-size: 10px;
    }
    .mobile{
        display: none;
    }
    
}
</style>
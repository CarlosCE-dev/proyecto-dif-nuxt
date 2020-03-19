<template>
    <div>
        <v-card color="verde">
           <v-list-item class="sm-box">
                <v-list-item-avatar size="65" class="mobile">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="sm-ctn">
                    <v-list-item-title class=" font-weight-bold text-wrap text-mobile">
                        Carlos Esteban Corral Esparza
                    </v-list-item-title>
                    <v-list-item-subtitle> 
                        <strong> Parentecso </strong>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle  class="black--text text-wrap">
                        Dirección: Calle Independencia #24
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="black">mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-card>
    </div>
</template>

<script>

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
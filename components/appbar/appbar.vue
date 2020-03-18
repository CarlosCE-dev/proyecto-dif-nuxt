<template>
    <div>
        <v-app-bar color="#F7FAFF" height="44" dense elevation="0" fixed app>
            <v-spacer/>
            <v-btn class="mx-2" x-small fab dark color="morado" elevation="0" :icon="!icon" @click="action">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data: () => ({
            icon: false
        }),
        methods: {
            action() {
                this.$emit('action', null )
            }
        },
        created(){
            this.icon = this.$store.state.window.mobil
        }
    }
</script>

<style scoped>

</style>
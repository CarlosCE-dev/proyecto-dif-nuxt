<template>
    <div>
        <v-app-bar absolute color="transparent" dense elevation="0" fixed app>
            <v-spacer/>
            <v-app-bar-nav-icon color="morado" @click="action"/>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        methods: {
            action() {
                this.$emit('action', null )
            }
        },
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <h1>
            Guardian
        </h1>
        <Table/>
    </div>
</template>

<script>
// Components 
import Table from '~/components/guardian/tabla.vue';

export default ({
    components:{
        Table,
    },
    created () {
        console.log( this.$store.state.profile.user );
    },
})
</script>

<style scoped>

</style>
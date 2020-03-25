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
    async created () {
        // await this.$cataloguesApi.getUserProfiles().then( ( resp ) => {
        //     console.log(resp);
        // });

        const prof_1 = { profileId: 1, profileName: 'Perfil 1' };
        const prof_2 = { profileId: 2, profileName: 'Perfil 2' }
        const temp1 = [ prof_1, prof_2 ]
        this.$store.commit('profile/load', temp1 ); 

        const guardian_1 = { firstName: 'asdasd', lastName: 'asdasd', secondLastName: 'wqeqwe' }
        const temp = [ guardian_1, guardian_1 ]
        this.$store.commit('guardian/load', temp ); 
    },
})
</script>

<style scoped>

</style>
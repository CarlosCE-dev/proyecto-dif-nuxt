<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default ({
    data: () => ({
        user: {},
    }),
    created () {
        const user = {}
        // this.$store.commit('profile/asignarRoles', user ); 
    },
})
</script>

<style scoped>

</style>
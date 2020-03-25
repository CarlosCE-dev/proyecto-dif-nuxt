<template>
    <div>
        <h1>Alumnos</h1>
        <Tabla/>
    </div>
</template>

<script>
import Tabla from '~/components/alumno/tabla.vue';

export default {
    components: {
        Tabla
    },
    created(){
        const alumno = { firstName: 'Mario', lastName: 'Angelica', secondLastName: 'Pasd' }
        const temp = [ alumno,alumno ]
        this.$store.commit('alumno/load', temp ); 
    }
}
</script>

<style scoped>

</style>
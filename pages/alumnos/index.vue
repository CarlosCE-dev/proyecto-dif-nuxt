<template>
    <div>
        <h1>Alumnos</h1>
        <Tabla class="tabla"/>
        
    </div>
</template>

<script>
import Tabla from '~/components/alumno/tabla.vue';

export default {
    components: {
        Tabla
    },
    created(){

        const prof_1 = { profileId: 1, profileName: 'Perfil 1' };
        const prof_2 = { profileId: 2, profileName: 'Perfil 2' }
        const temp1 = [ prof_1, prof_2 ]
        this.$store.commit('profile/load', temp1 );
        
        const alumno = { firstName: 'Simona', lastName: 'Angelica', secondLastName: 'Pasd' }
        const temp = [ alumno,alumno ]
        this.$store.commit('alumno/load', temp ); 

        const tutor = { firstName: 'Ttusdasd', lastName: 'Angelica', secondLastName: 'Pasd' }
        const tutor2 = { firstName: 'aaaaaaaaaaaaaaa', lastName: 'Angelica', secondLastName: 'Pasd' }
        const temp2 = [ tutor, tutor2, tutor2, ]
        this.$store.commit('tutor/load', temp2 );
    }
}
</script>

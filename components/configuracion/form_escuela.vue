<template>
    <div>
        <v-form ref="form" v-model="valid" lazy-validation>
            <h1> Datos de la escuela </h1>
            <v-card class="card-escuela">
                <v-form v-model="valid">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="nombre"
                                    :counter="10"
                                    label="Nombre"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="email"
                                    :counter="10"
                                    label="Correo"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="email"
                                    label="E-mail"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card>
        </v-form>
    </div>
</template>

<script>
export default {
    data: () => ({
        nombre: '',
        phone: '',
        email: '',
        valid: true,
        image: [],
    }),
    methods: {
        
    },
}
</script>

<style scoped>

</style>
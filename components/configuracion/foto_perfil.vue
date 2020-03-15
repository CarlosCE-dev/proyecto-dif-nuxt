<template>
    <div>
        <v-form ref="form" v-model="valid" lazy-validation>
            <h1> Configuración</h1>
            <v-card class="card-foto">
                <v-container fluid class="h100">
                    <v-row align="center">
                        <v-col md="2" cols="12" align-self="center">
                            <v-avatar size="62">
                            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col md="10" cols="12">
                            <v-row>
                                <v-col cols="12">
                                    <v-file-input v-model="image" 
                                    color="morado"
                                    counter
                                    label="File input"
                                    multiple
                                    ref="fileImage"
                                    accept="image/png, image/jpeg" 
                                    placeholder="Select your file"
                                    prepend-icon="mdi-image"
                                    outlined
                                    :show-size="1000"
                                    :rules="imageRules"
                                    >
                                        <template v-slot:selection="{ index, text }">
                                        <v-chip color="morado" dark label small>
                                        {{ text }}
                                        </v-chip>
                                        </template>
                                    </v-file-input>
                                </v-col>
                                <v-col class="pa-0 pl-3 caption">
                                     Debe ser un archivo JPEG o PNG de máximo 10 MB.
                                </v-col>
                               
                                <v-col cols="12">

                                    <v-btn color="primary" block>
                                    Upload profile image
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-form>
    </div>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        image: [],
        /* ------------------------------- Validators ------------------------------- */
        imageRules: [
            v => !!v || 'This field is required',
            v => !v || v.size < 2000000 || 'Image size should be less than 2 MB!',
        ],
    }),
    methods: {
        
    },
}
</script>

<style scoped>
.h100{
    height: 100%;
}
.card-foto{
    height: 242px;
}
@media screen and (max-width: 959px){
   .card-foto{
    height: unset;
    }
}
</style>
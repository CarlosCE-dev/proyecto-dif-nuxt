<template>
    <div>
        <ModalSnackbar v-model="modal_snackbar.state" :snackbar="modal_snackbar"/>
        <div class="d-flex">
            <div class="left-view">
                <span class="background-image" :style="{ backgroundImage: `url(${backgroundUrl})` }"></span>
                <span class="text-login d-flex justify-end pa-4">
                    <h1> Login </h1> 
                </span>
                <span class="spacer"></span>
                <span class="text-main d-flex">
                    <h1 class="white--text">Panel Custo Kids</h1>
                </span>
                <span class="text-sub text-wrap d-flex">
                    <h4>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Vel animi quod hic cumque commodi in quas ab ipsu
                    </h4>
                </span>
            </div>
             <div class="right-view pa-4">
                <div class="spacer-login-big"></div>
                <div class="d-flex">
                    <v-img height="200" class="logo" aspect-ratio="1.7"></v-img>
                </div>
                <div class="d-flex align-center justify-center">
                    <h4>Frase o lema</h4>
                </div>
                <div class="spacer-login"></div>
                <v-form v-model="valid" lazy-validation ref="form"> 
                    <div class="d-flex justify-center align-center">
                        <v-container>
                            <v-row align="center" justify="center" class="pa-0">
                                <v-col cols="11" class="pa-0">
                                    <v-text-field :rules="requiredRules"
                                                v-model="user" 
                                                type="text" 
                                                color="morado" 
                                                placeholder="Usuario" 
                                                rounded 
                                                outlined
                                                required 
                                                prepend-inner-icon="mdi-account">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                    <div class="d-flex justify-center">
                        <v-container fluid>
                            <v-row align="center" justify="center" class="pa-0">
                                <v-col cols="11" class="pa-0">
                                    <v-text-field class="input-text" 
                                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                                                :rules="requiredRules"
                                                v-model="password" 
                                                :type="show ? 'text' : 'password'" 
                                                @click:append="show = !show"
                                                placeholder="Password" 
                                                rounded 
                                                outlined 
                                                required
                                                prepend-inner-icon="mdi-lock">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row align="center" justify="center" class="pa-0">
                                <v-col cols="11" class="pa-0">
                                    <v-btn class="white--text" rounded color="morado" block :disabled="!valid" @click="login">
                                        Login
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
import backgroundUrl from '~/assets/images/kids_happy.jpg';
// Helpers
import { orientationType } from '~/helpers/orientation';
// Components
import ModalSnackbar from '~/components/ui/snackbar.vue';

export default({
    components: { ModalSnackbar },
    layout: 'login',
    data: () => ({
        // Image
        backgroundUrl,
        // Device
        mobil: false,
        // Form
        valid: true,
        // Login
        user: '',
        password: '',
        show: false,
        // Rules
        requiredRules: [
            ( v ) => !!v || 'This field is required',
        ],
        // Modals
        modal_snackbar: { color: 'orange', timeout: 3000, state: false , text: 'Porfavor de rellenar todos los campos requeridos', top: true }
    }),
    methods: {
        async login() {
            
            
            // Validar que los campos cumplan las condiciones
            if ( !this.$refs.form.validate() ) {
                return this.modal_snackbar = { 
                    color: 'orange', 
                    timeout: 3000, 
                    state: true, 
                    text: 'Porfavor de rellenar todos los campos requeridos', 
                    top: true 
                }
            }

            const payload = { user: this.user, password: this.password }
            await this.$axios.login().then( ( resp ) => {
                console.log( resp );
            }).catch( (err) => {
                console.log(resp );
                
            });

            localStorage.setItem('token', 'true');
            this.$router.push({ path: '/' });
        }
    },
    beforeMount () {
        this.mobil = orientationType();
        this.$store.commit('window/isMobil', this.mobil); 
    },
})
</script>

<style scoped>
/* ---------------------------------- Sides --------------------------------- */
.left-view{
    overflow: hidden;
    position: relative;
    height: 100vh;
    width: 70%;
}
.right-view{
    position: relative;
    height: 100vh;
    width: 30%;
}
/* ------------------------------ Left content ------------------------------ */
.background-image{
    background-size: cover !important;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
}
.background-image::before{
    background-color: rgba(3, 169, 244, 0.8);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}
.background-text{
    position: absolute;
    height: 100vh;
    width: 70%;
}
.spacer{
    display: block;
    height: 60%;
    width: 100%;
}
.text-login{
    position: absolute;
    right: 5%;
    top: 5%;
     color: white;
}
.text-sub{
    position: absolute;
    left: 10%;
    bottom: 20%;
    width: 70%;
    color: white;
}
.text-main{
    position: absolute;
    left: 10%;
    bottom: 30%;
    color: white;
}

/* ------------------------------ Right content ----------------------------- */
.logo{
    background-image: url("~assets/images/logos/custos_logo.svg");
    background-position: center;
}
.spacer-login-big{
    display: block;
    height: 80px;
    width: 100%;
}
.spacer-login{
    display: block;
    height: 40px;
    width: 100%;
}
.input-width{
    width: 60%;
}
.input-text{
    background-color: white !important;
}
/* ------------------------------- Media query ------------------------------ */


@media screen and (max-width: 1193px){
    .left-view{ width: 57%; }
    .right-view{ width:43%; }
    
}
@media screen and (max-width: 808px){
    .left-view{ width: 55%; }
    .right-view{ width: 45%; }
    .text-main{ bottom: 40%;}
    .text-sub{ bottom:20%;}
}
@media screen and (max-width: 621px){
    .left-view{ width: 50%; }
    .right-view{ width: 50%; }
}
@media screen and (max-width: 581px){
    .left-view{ width: 45%; }
    .right-view{ width: 55%; }
     .text-main{ bottom: 40%;}
    .text-sub{ bottom:10%;}
}
@media screen and (max-width: 426px) {
  .right-view{
    width: 100%;
  }
  .left-view{
      display: none;
  }
}
</style>
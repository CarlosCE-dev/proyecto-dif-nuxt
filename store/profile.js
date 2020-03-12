// import CanProfile from '~/classes/roles';

// const canProfile = new CanProfile ();

export const state = () => ({
    user: {}
});

export const mutations = {
    asignarRoles( state, payload ){
        // const profile = canProfile.asignarRole( payload );
        state.user = payload;
        state.user.profile = profile;
    }
}

export const actions = {

}
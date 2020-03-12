// import CanProfile from '~/classes/roles';

// const canProfile = new CanProfile ();

export const state = () => ({
    mobil: false,
    size: 0,
});

export const mutations = {
    isMobil( state, payload ){
        state.mobil = payload;
    }
}

export const actions = {

}
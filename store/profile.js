import { Profile } from '~/models/profile.js';

export const state = () => ({
    profiles: [],
});

export const mutations = {
    load( state, payload ){
        for (let i = 0; i < payload.length; i++) {
            payload[i] = new Profile( payload[i] );
        }
        state.profiles = payload;
    }
}

export const getters = {
    getProfiles: ( state ) => state.profiles,
}
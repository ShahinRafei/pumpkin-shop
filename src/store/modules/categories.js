import axiosInstance from '@/composables/axios-Instance.js';

const state = {
    categories: [],
}

const getters = {
    getCategoriesList(state) {
        return state.categories;
    }
}

const mutations = {
    setCategoriesList(state, list) {
        state.categories = list;
    }
}

const actions = {
    getCategoriesListFromApi({ commit }) {
        return axiosInstance.get('/products/categories').then(response => { commit('setCategoriesList', response.data) }).catch(error => { console.error(error) });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
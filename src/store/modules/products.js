import axiosInstance from '@/composables/axios-Instance.js';

const state = {
    productsList: [],
}

const getters = {
    getProductsList(state) {
        return state.productsList;
    }
}

const mutations = {
    setProductsList(state, list) {
        state.productsList = list;
    }
}

const actions = {
    getProductsListFromApi({ commit }) {
        return axiosInstance.get('/products').then(response => { commit('setProductsList', response.data) }).catch(error => { console.error(error) });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
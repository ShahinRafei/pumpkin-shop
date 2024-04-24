import axiosInstance from '@/composables/axios-Instance.js';

const state = {
    productsList: [],
    productDetails: []
}

const getters = {
    getProductsList(state) {
        return state.productsList;
    },
    getProductDetails(state) {
        return state.productDetails;
    }
}

const mutations = {
    setProductsList(state, list) {
        state.productsList = list;
    },
    setProductsDetails(state, details) {
        state.productDetails = details;
    }
}

const actions = {
    getProductsListFromApi({ commit }) {
        return axiosInstance.get('/products').then(response => { commit('setProductsList', response.data) }).catch(error => { console.error(error) });
    },

    getProductDetailsFromApi({ commit }, id) {
        return axiosInstance.get(`/products/${id}`).then(response => { commit('setProductsDetails', response.data) }).catch(error => { console.error(error) });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
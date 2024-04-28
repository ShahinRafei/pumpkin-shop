import axiosInstance from '@/composables/axios-Instance.js';

const state = {
    productsList: [],
    productDetails: [],
    categoryProducts: [],
}

const getters = {
    getProductsList(state) {
        return state.productsList;
    },
    getProductDetails(state) {
        return state.productDetails;
    },
    getCategoryProducts(state){
        return state.categoryProducts;
    }
}

const mutations = {
    setProductsList(state, list) {
        state.productsList = list;
    },
    setProductsDetails(state, details) {
        state.productDetails = details;
    },
    setCategoryProducts(state, products){
        state.categoryProducts = products;
    }
}

const actions = {
    getProductsListFromApi({ commit }) {
        return axiosInstance.get('/products').then(response => { commit('setProductsList', response.data) }).catch(error => { console.error(error) });
    },

    getProductDetailsFromApi({ commit }, id) {
        return axiosInstance.get(`/products/${id}`).then(response => { commit('setProductsDetails', response.data) }).catch(error => { console.error(error) });
    },

    getCategoryProductsFromApi({ commit }, category){
        return axiosInstance.get(`/products/category/${category}`).then(response => { commit('setCategoryProducts', response.data) }).catch(error => {console.error(error)});
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const url = `http://localhost:3000`

Vue.use(Vuex)

const state = {
  forSale: [],
  inCart: [],
  inCartId: []
}

const getters = {
  forSale () {
    return state.forSale
  },
  inCart () {
    return state.inCart
  },
  inCartId () {
    return state.inCartId
  }
}

const actions = {
  fetchItem ({commit}) {
    axios.get(`${url}/goods`, {headers: {token: localStorage.getItem('token')}})
      .then(data => {
        console.log('hasil fetch', data.data.data)
        commit('fetchItem', data.data.data)
      })
      .catch(err => {
        console.log('fetch error', err)
      })
  },
  addToCart ({commit}, payload) {
    commit('ADD_TO_CART', payload)
  },
  removeFromCart ({commit}, payload) {
    commit('REMOVE_FROM_CART', payload)
  },
  insertProduct ({commit}, payload) {
    axios.post(`${url}/goods`, payload, {headers: {token: localStorage.getItem('token')}})
      .then(data => {
        alert('insert product success')
        console.log('insert product success')
        commit('INSERT_PRODUCT', payload)
      })
      .catch(err => {
        alert('insert product fail')
        console.log(err)
      })
  },
  deleteProduct ({commit}, payload) {
    console.log(payload)
    axios.delete(`${url}/goods/${payload}`)
      .then(data => {
        alert('delete goods success')
        console.log(data)
      })
  },
  checkout ({commit}, payload) {
    axios.post(`${url}/transactions`)
    .then(data=>{})
  }
}

const mutations = {
  fetchItem (state, payload) {
    this.state.forSale = payload
  },
  ADD_TO_CART (state, payload) {
    this.state.inCart.push(payload)
    this.state.inCartId.push(payload._id)
  },
  REMOVE_FROM_CART (state, payload) {
    this.state.inCart.splice(payload, 1)
  },
  INSERT_PRODUCT (state, payload) {
    this.state.forSale.push(payload)
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    loading: false,
    error: null,
    item:{
      active: true,
        category: "",
        description: "",
        imgUrl: [],
        initialBid: 0,
        name: "",
        bids: []
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async getCurrentUser({ commit }) {
      let user = await firebase.auth().currentUser
      commit('setUser', user)


    },
    signUserUp({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.senha)
        .then(
          user => {
            const newUser = {
              id: user.user,
              registered: [],
            }
            commit('setUser', newUser)
            alert('Sua conta foi cadastrada com sucesso!')
          }).catch(err => {
            alert('Aconteceu algo inesperado. ' + err.message)
          });
    },
    signUserIn({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.senha)
        .then(
          data => {
            let newUser = {
              displayname: data.user.displayname,
              email: data.user.email,
              phoneNumber: data.user.phoneNumber,
              photoUrl: data.user.photoUrl,
              refreshToken: data.user.refreshToken,
              uid: data.user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(err => {
          alert('Aconteceu algo inesperado. ' + err.message)
        })
    },
    // metodos copiados da API
    getCategory() {
      firebase.firestore().collection('item').doc('category').get().then(doc => {
        let category = [];
        category.push(category = doc.data().category);
        return category;
      }).catch(err => {
        alert('Aconteceu algo inesperado. ' + err.message);
      });

    },
    getItemByID(itemID) {
      firebase.firestore().collection('item').doc(itemID).get().then(doc => {
        const item = doc.data();
        return item;
      }).catch(err => {
        alert('Aconteceu algo inesperado. ' + err.message);
      });

    },
    getAllItem() {
      firebase.firestore().collection('item').orderBy('name').get().then(snapshot => {
        let ItemList = [];
        snapshot.forEach(doc =>{
          ItemList.push(doc.data());
        })        
        return ItemList;
      }).catch(err => {
        alert('Aconteceu algo inesperado. ' + err.message);
      });

    },
    createItem(item) {
      const newItem = {
        active: true,
        category: item.category,
        description: item.description,
        imgUrl: item.imgUrl,
        initialBid: item.initialBid,
        name: item.name,
        bids: []
      };

      firebase.firestore().collection('item').add(newItem).then(doc => {
        return doc.id;
      }).catch(err => {
        alert('Aconteceu algo inesperado. ' + err.message);
      });

    },
    updateItem(item) {
      const id = item.id;
      const updateItem = {
        active: item.active,
        category: item.category,
        description: item.description,
        imgUrl: item.imgUrl,
        initialBid: item.initialBid,
        name: item.name
      };

      firebase.firestore().collection('item').doc(id).update(updateItem).then(doc => {
        alert(doc.name + " alterado com sucesso");
      }).catch(err => {
        alert('Aconteceu algo inesperado. ' + err.message);
      });
    },
    deleteItem(itemId) {
      const id = itemId;
      firebase.firestore().collection('item').doc(id).delete().then(() => {
        alert("Deletado com sucesso");
      }).catch(err => {
        alert('Aconteceu algo inesperado. ' + err.message);
      });
    }
    // 

  },
  getters: {
    user(state) {
      console.log(state)
      return state.user
    }
  },
})
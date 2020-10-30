export default{
  state: {
     bids: [],
     bid: {
       items:[],
     },
     myBids:[]
  },
  mutations: {
    setAllBids(state, payload) {
      state.bids = payload
     },
    setBid(state, payload) {
      state.bid = payload;
    },
    setMyBids(state, payload){
      state.myBids = payload
    },
    resetBid(state) {
      state.bid = {};
    }
  }
}
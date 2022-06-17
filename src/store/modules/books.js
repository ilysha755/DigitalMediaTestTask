import axios from 'axios'

export default ({
  state: {
      books:[],
      api__key:'AIzaSyCnMp-5N1t7ByA4MS8-xndbmvUomERfAcQ',
      sortBooks:null,
      searchQuery:''
  },
  getters: {
      allBooks(state){
        return state.books
      },
      sortedBook(state){
        return state.sortBooks
      },
      getRes (state){
        return state.searchResult
        }
  },
  mutations: {
      updateBooks(state, books){
          state.books = books
      },
      sorts(state, book){
        state.sortBooks = book
      },
      getRes (state, updRes){
        state.books = updRes
    },
    setSearch(state,searchQuery){
        state.searchQuery = searchQuery
        
      }
  },
  actions: {
   async fetchBooks({commit, state}){
   await axios
    .get('https://www.googleapis.com/books/v1/volumes?q=javascript&download=epub&key='+ state.api__key +'')
    .then(resp =>{
     const books = resp.data.items.slice(1)
     commit('updateBooks', books)
    }
    )
   },
  sort({commit, state}, payload){
    const book = state.books.find(book => book.id == payload)
    if(book){
           commit('sorts', book)
       }
  },
  getRes({state, commit}){
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+ state.searchQuery +'&download=epub&key='+ state.api__key +'')
    .then(res=>{
        const updRes = res.data.items.slice(1)
        commit('getRes', updRes)
    })

}
  }
})
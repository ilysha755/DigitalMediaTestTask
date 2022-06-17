<template>
    <div    
    class="cards__container" 
    v-if="this.allBooks != null ">
    <div 
     class="book-card"
      v-for="books in allBooks"
        @click="$router.push({name:'about', params:{id: books.id}})"
       :key="books.id"  >
        <div class="card__img">
            <img :src="books.volumeInfo.imageLinks.thumbnail" alt="">
        </div>
        <div class="card__desc">
            <h3>{{books.volumeInfo.authors[0]}}</h3>
            <p>{{books.searchInfo.textSnippet}}</p>
           
        </div>

    </div>
    </div>
    <div v-else>
        <p class="text">Загрузка...</p>
    </div>
</template>
<script>

export default {
    props:{
        allBooks:{
            type: Array,
        }
    },
    mounted(){
  

    this.$store.dispatch('fetchBooks')

 },
 computed(){
   this.allBooks

 }
}
</script>
<style lang="scss" scoped>
    .book-card{
        max-width: 356px;
        width: 100%;
        background-color: #ff9100;
        margin: 15px auto;
        padding:30px;
        border-radius: 15px;
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .card__desc{
        color: #fff;
        margin-top: 20px;
    }
    .cards__container{
        display: flex;
        flex-wrap: wrap;
    }
    .text{
        max-width: 400px;
        width: 100%;
        padding: 30px;
        display: block;
        background-color: #ff9100;
        color: #fff;
    }
    @media screen and (max-width:710px) {
        .book-card{
            max-width: 100%;
            margin-left: 20px;
            margin-right: 20px;
            display: flex;
            flex-direction:column;
            align-items: center;
        }
     
    }
</style>
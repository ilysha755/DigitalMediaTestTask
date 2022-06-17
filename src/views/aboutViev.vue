<template>
    <header-item/>
    <main>
        <div class="container">
                <div class="photo">
                    <img :src="sortedBook.volumeInfo.imageLinks.thumbnail" alt="">
                </div>
                <div class="desc">
                    <h3 class="text">{{sortedBook.volumeInfo.title}}</h3>
                    <div class="desc__items_container">
                        <div class="desc__item" >
                            <p>Авторы:</p>
                            <span
                             v-for="authors in sortedBook.volumeInfo.authors"
                              :key="authors">
                              {{authors}}
                              </span>
                        </div>
                        <div class="desc__item">
                            <p>Год выпуска:</p>
                            <span>{{sortedBook.volumeInfo.publishedDate}}</span>
                        </div>
                        <div class="desc__item">
                            <p>Издатель:</p>
                            <span>{{sortedBook.volumeInfo.publisher}}</span>
                        </div>
                        <div class="desc__item">
                            <p>Дата издания:</p>
                            <span>{{sortedBook.volumeInfo.publishedDate}}</span>
                        </div>
                    </div>
                    <a :href="sortedBook.volumeInfo.infoLink" target="_blank"  class="selflink">Просмотр книги</a>
                </div>
        </div>
    </main>
 
</template>
<script>
import headerItem from '@/components/header'
import {mapGetters} from 'vuex'
export default {
    components:{
        headerItem
    },

 created(){
     this.$store.dispatch('sort', this.$route.params.id)
    
 },
 computed:{
     ...mapGetters(['sortedBook'])
 }

}
</script>
<style lang="scss" scoped>
main{
    width: 100%;
}
.container{
    max-width: 1200px;
    margin: 50px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.photo{
    max-width: 220px;
    width: 100%;
    img{
        width: 100%;
    }
}
.text{
    max-width: 490px;
    color: #fff;
}

.desc {
    display: flex;
    flex-direction: column;
    h3{
        margin-bottom: 15px;
        text-align: center;
    }
}
.text {
}
.desc__items_container {
}
.desc__item{
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 2px solid #ededed;
    p,span{
        display: block;
    }
}
.selflink {
    margin-top: 20px;
    align-self: center;
    text-decoration: none;
    background-color: #fff;
    padding: 10px;
    border-radius: 12px;
    color: #000;

}
@media screen and (max-width:707px) {
    .desc{
        margin-top: 20px;
    }
}
</style>
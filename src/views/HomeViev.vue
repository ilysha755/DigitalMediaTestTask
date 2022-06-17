<template>
    <header-item/> 
    <div class="cards">
        
       <book-card v-if="getRes == null" :allBooks="allBooks" />
          <book-card v-else :allBooks="getRes" />
    </div>
</template>
<script>
import headerItem from '@/components/header'
import bookCard from '@/components/bookCard'
    import {mapGetters} from 'vuex'
import 'swiper/css';
export default {
    components:{
        headerItem,
        bookCard,
    },   
    mounted(){
        this.getRes
    },
 computed: mapGetters(['allBooks', 'getRes']),
}

</script>
<style lang="scss" scoped>
.cards{
    max-width: 1400px;
    margin: 0 auto;
}

</style>
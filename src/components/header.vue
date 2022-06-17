<template>
        <header>
        <div class="header__container">
        <div class="logo" @click="$router.push('/')">
            <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                <g transform="translate(0 -1028.4)">
                 <path d="m3 1035.4v2 1 3 1 5 1c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-1-5-4-3h-18z" fill="#16a085"/>
                 <path d="m3 1034.4v2 1 3 1 5 1c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-1-5-4-3h-18z" fill="#ecf0f1"/>
                 <path d="m3 1033.4v2 1 3 1 5 1c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-1-5-4-3h-18z" fill="#bdc3c7"/>
                 <path d="m3 1032.4v2 1 3 1 5 1c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-1-5-4-3h-18z" fill="#ecf0f1"/>
                 <path d="m5 1028.4c-1.1046 0-2 0.9-2 2v1 4 2 1 3 1 5 1c0 1.1 0.8954 2 2 2h2v-1h-1.5c-0.8284 0-1.5-0.7-1.5-1.5 0-0.9 0.6716-1.5 1.5-1.5h12.5 1c1.105 0 2-0.9 2-2v-1-5-4-3-1c0-1.1-0.895-2-2-2h-4-10z" fill="#16a085"/>
                 <path d="m8 1028.4v18h1 9 1c1.105 0 2-0.9 2-2v-1-5-4-3-1c0-1.1-0.895-2-2-2h-4-6-1z" fill="#1abc9c"/>
                 <path d="m7 1048.4v2 2l2.5-2 2.5 2v-2-2h-5z" fill="#e74c3c"/>
                 <rect height="1" width="5" y="1047.4" x="7" fill="#c0392b"/>
                </g>
               </svg>
            <h2>Books App</h2>
        </div>
        <form action="" class="search__form" @submit.prevent>
        <input type="text" :value="searchQuery" @input="inputQuery"  @keyup.enter="getQuery" placeholder="Давайте найдём!" >
        <button @click="getQuery">Найти</button>
    </form>
</div>
    </header>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
        ...mapActions([
            'getRes'
        ]),
       ...mapMutations([
    'setSearch'
    ]),
    methods:{
        inputQuery(e){
  this.$store.commit('setSearch', e.target.value)
},
    getQuery(e){
        this.$store.dispatch('getRes')
        this.$store.commit('setSearch', e.target.value = '')
    }
    }
   
}
</script>
<style lang="scss">
header{
    width: 100%;
    
}
.header__container{
    max-width: 1280px;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.search__form{
   max-width: 650px;
   width: 100%;
   justify-content: flex-end;
   display: flex;
   
    input{
        max-width: 150px;
        width: 100%;
        transition: all 1s ease;
        padding-left: 20px;
         border-radius: 0px 0px 0px 15px;
         border: none;
         height: 45px;
    }
    input:focus{
        max-width: 400px;
        width: 100%;
        transition: all 1s ease;
        padding-left: 30px;
        border-radius: 20px 0px 0px 20px;
        border: none;
    }
    button{
        width: 135px;
        height: 45px;
        border: none;
        background-color: #fefefe;
        border-radius: 0px 15px 0px 0px;
        cursor: pointer;
    }
}
.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    h2{
        margin-left: 10px;
        color: #fff;
    }
}
@media screen and (max-width:730px) {
    .header__container{
        align-items: center;
        flex-direction: column;
    }
    .logo{
        margin-bottom: 20px;
    }
}
</style>
<template>
    <div class="mean">
        <div class="avatar">
            <img src="../assets/logo.png" alt="">
        </div>
        <div v-for="(menu,index) of menuLs" :key="index" class="lists">
            <div class="list"><router-link :to="menu.path">{{menu.name}}</router-link></div>
        </div>
    </div>
</template>
<style scoped>
a{
    color: aliceblue;
    text-decoration: none;
}
.lists{
    position: flex;
    justify-content: center;
    flex-direction: column;
}
.list{
    height: 1rem;
    color: aliceblue;
}
.avatar{
    position: relative;

}
.mean{
    position: absolute;
    z-index: 120;
    height: 100%;
    width: 70%;
    right: 0;
    border:1px solid black;
    color: aliceblue;
    background-color: black;
}
    
</style>
<script>
export default {
    data(){
        return {
            menuLs:[
                {
                    name:'首页',
                    path:'/',
                },
                {
                    name:'假期倒计时',
                    path:'/timeClick',

                },
                {
                    name:'笔记',
                    path:'/note',
                }
            ]
        }
    }
}
</script>
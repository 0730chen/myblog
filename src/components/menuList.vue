<template>
    <div class="mean">
        <div class="avatar">
            <img src='../assets/pikaqiu.png' alt="">
        </div>
        <div v-for="(menu,index) of menuLs" :key="index" class="lists">
            <div class="list"><router-link :to="menu.path">{{menu.name}}</router-link></div>
        </div>
    </div>
</template>
<style scoped>
a{
    color: black;
    text-decoration: none;
}
.lists{
    position: flex;
    justify-content: center;
    flex-direction: column;
}
.list{
    height: 0.65rem;
    color: black;
}
.avatar{
    position: relative;
    max-width: 100%;

}
img{
    max-width: 100%;
}
.mean{
    position: absolute;
    z-index: 120;
    max-height: 100%;
    max-width: 70%;
    right: 0;
    border:1px solid black;
    background: rgb(235, 225, 200)
   
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
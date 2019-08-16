<template>
    <div class="menu">
        <!-- <button @click="putValue"></button> -->
        <div class="menu-item" v-for="(menu,index) in menuList" :key="index">
            <li>
                <routerLink :to="menu.path" style="color:white">
                    <span>{{menu.name}}</span>
                </routerLink>
            </li>
        </div>
    </div>
</template>
<style scope>
.context{
    width: 100%;
    height: 100%;
}
.menu-item{
    transform: translateY(1.5rem)
}
.myMenu{
    width: 35px;
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    background: url('../assets/menu.png') 100% 100% no-repeat;
    background-size: 50%;
    margin: 0 auto;
    z-index: 100;
}
.menuCover{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3b41;
    opacity: 0.5;
}

.title{
    
    height: 1rem;
    width: 100%;
    transform: translateY(25%)
}
.menu{
    position: fixed;
    bottom: 0;
    height: 100%;
    width: 40%;
    background-color: black;
    color: whitesmoke;
    z-index:100;
    left: 0;
}
.menu li{
    list-style: none;
    height: 0.8rem;
}
</style>
<script>
export default {
    data(){
        return {
            message:"子组件的值",
            flag:false,
            menuList:[
                {
                    name:'文章集中站',
                    path:'/register',
                },
                {
                    name:'添加文章',
                    path:'/addArticle'
                },
                {
                    name:'留言',
                    path:'/Message'
                },
                {
                    name:'放假',
                    path:'/holiday'
                },
                {
                    name:'回到首页',
                    path:'/manage'
                }
            ]
        }
    },
    props:{
        'value':String,
        'parentV':String,
    },
    methods: {
        getValue(){
            this.$emit()
        },
       
        change(){
            this.flag = !this.flag
        },
        change2(){
            this.flag = !this.flag
        },
        putValue(){
            console.log(this.message)
            this.$emit('childrenFn',this.message)
        }
    },
    
}
</script>
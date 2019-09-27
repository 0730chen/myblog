<template>
    <div class="context">
        <div class="button" @click="change">
        </div>
        <transition name="show">
        <div class="cover" v-show="flag"><listMenu></listMenu></div>
        </transition>
        <transition name="show">
        <div class="mycover" v-show="flag" @click="change"></div>
        </transition>
        <div class="header"></div>
        <div class="container">
            <div class="title" v-for="(item,index) in title" :key="index" :data="item._id" @click="getWrap($event)">
                {{item.Author}}
            </div></div>
    </div>
</template>
<style scoped>
.title{
    display:flex;
    width: 3rem;
    height: 0.5rem;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    
}
.show-enter-active{
    transition: all 0.5s ease;
}
.show-leave-active{
    transition: all 0.5s ease;
}
.show-enter{
     transform: translateX(1rem);
    opacity: 0;
}
.show-leave-to{
     transform: translateX(4rem);
}
.mycover{
    width: 100%;
    height: 100%;
    position:fixed;
    background-color: rgba(0,0,0,.7);
    top: 0;
    left: 0;
    z-index: 99;
    opacity: 0.5;
}
.cover{
    width: 100%;
    height: 100%;
    position: absolute;
}
.button{
    background:url('../assets/menu.png') no-repeat 100% 100%;
    background-size: 75%;
    position: absolute;
    height: 6%;
    width: 10%;
    top: 0;
    right: 0.12rem;
    z-index: 100;
}
.container{
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header{
    width:100%;
    height: 20%;
    background:url('../assets/bg.jpeg') no-repeat 100% 100%;
    background-size: 100%;
    }
    .context{
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100%;
        width: 100%;
        left: 0;
        font-size: 0.16rem;
    }
</style>
<script>
import listMeun from '../components/menuList'
import axios from 'axios'
export default {
    data(){
        return{
            flag:false,
            title:[]
        }
    },
    methods: {
        getTitle(){
            axios.get('api/addArticle').then(res=>{
                console.log(res.data)
                this.title = res.data
            })
        
             
        },
        change(){
            // console.log('点击')
            this.flag =! this.flag
            console.log(this.flag)
    },
        getWrap(e){
            // console.log(e)
            let id = e.target.getAttribute('data')
            console.log(id)
            this.$router.push({path:'/wrap',query:{"_id":id}})
            //请求接口
            // axios.get('/api/note',{
            //     params:{
            //         "_id":id
            //     }
            // }).then(res=>{
            //     console.log(res.data)
                
            // })
            // axios.get()
        }
    },
    mounted() {
        this.getTitle()
    },
    components:{
        'listMenu':listMeun
    }
}
</script>
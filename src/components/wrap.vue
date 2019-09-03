<template>
    <div class="context">
         <div class="button" @click="change"></div>
        <transition name="show">
        <div class="cover" v-show="flag"><menu-list></menu-list></div>
        </transition>
        <transition name="show">
        <div class="mycover" v-show="flag" @click="change"></div>
        </transition>
        <div>文章</div>
        <div v-html="wrap" class="wrap">{{wrap}}</div>
    </div>

</template>
<style scoped>
.wrap{
    position: absolute;
    width: 100%;
    height: 2rem;

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
    width: 3.75rem;
    height: 6.67rem;
    position: fixed;
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
    .context{
        position: relative;
        height: 100%;
        width: 100%;
        left: 0;
        font-size: 0.16rem
    }
</style>
<script>
import menuList from '../components/menuList'
import axios from 'axios'
export default {
    data(){
        return {
            wrap:'',
            flag:false
        }
    },
    components:{
        'menu-list':menuList
    },
    methods: {
        change(){
            this.flag =! this.flag
        },
        getJsonId(){
            let json = this.$route.query._id//router传参 route接受参数
            console.log(json)
            axios.get('/note',{
                params:{
                   "_id":json
               }
            }).then(res=>{
                 console.log(res.data[0]['article'])
                this.wrap = res.data[0]['article']

                
            })
        }
    },
    mounted() {
        this.getJsonId()
    },

}
</script>
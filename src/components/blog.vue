<template>
    <div class="context">
       
        <!-- <canvas class="canvas" id="canvas"></canvas> -->
        <backgr></backgr>
        <!-- <backgr2></backgr2> -->
        <div class="button" @click="change">
        </div>
        <el-container>
            <el-header>
                <el-button type="primary" icon="el-icon-edit" @click="manger">管理</el-button>
            </el-header>
            <transition name="show">
            <div  class="cover" v-show="flag"><menuList></menuList></div>
            </transition>
        </el-container>
        <transition name="show">
        <div class="mycover" v-show="flag" @click="change"></div></transition>
        <div class="footer">
            <div v-for="(item,index) of footer" :key="index" class="item">
                <img :src="item.img" alt="">
               <div class="item-path"><router-link :to="{path:item.path}">{{item.name}}</router-link></div>
                </div>	
        </div>
    </div>
</template>
<style scoped>
.canvas{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
}
.item-path{
    position: absolute;
    top:0.5rem;
    left: 0.3rem;
}
img{
    position: absolute;
    height: 0.5rem;
    width: 0.5rem;
    top: 0;
    left:0.25rem;
}
a{
    text-decoration:none;
    color: black;
}

.item{
    position: relative;
    width: 15%;
    height: 100%;
    flex: 1;
}
.footer{
    position: fixed;
    bottom: 0;
    height: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
}
/* .show-enter, .show-leaver-to{
    transition: all 1s ease;
    transform: translateX(100px)
}
.show-enter-active, .show-leaver-active{
    transition: opacity 5s ease-out;
    transition: all 0.5s ease;
} */
.show-enter-active{
    transition: all 0.5s ease;
}
.show-leave-active{
   transition: all 0.5s ease;
}
.show-enter{
    transform: translateX(100px);
    opacity: 0;
}
.show-leave-to{
    transform: translateX(400px);
}
.button{
    background:url('../assets/menu.png') no-repeat 100% 100%;
    background-size: 75%;
    position: absolute;
    height: 7%;
    width: 10%;
    top: 0;
    right: 0.12rem;
    z-index: 100;
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
.el-header{
    position: relative;
}
.el-button--primary{
    position: absolute;
    background-color: #4f5458;
    left:0;
    top:0.1rem;
}
.el-menu{
    width: 100%;
}
.el-menu-item{
    font-size: 0.12rem;
}
.el-main{
    background-color:#FFF;
    border:0.06rem;
    padding: 0;
    font-size: 0.12rem;
    width: 100px;
}
.el-popper{
    margin-top: -0.2rem;
}
.el-dropdown{
    position: relative;
    width: 70%;
    height: 100%;
}
.el-dropdown-link {
    cursor: pointer;
    color:#54595f;
    position: absolute;
    right: 0.2rem;
    font-size: 0.2rem;
    top:20%;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.article{
    height: 1rem;
    text-align: center;

}
.context{
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    background-color: #f5f7f9
}
.el-container{
    height: 100%;
}

.el-aside{
    color:#333;
    height: 100%;
}
.el-breadcrumb{
    font-size: 0.12rem;
    height: 0.5rem;
    width: 2rem;
    position: absolute;
    font-size: 0.2rem;
    transform: translateY(0.05rem)
}



</style>
<script>
import menu from '../components/menuList'
import axios from 'axios'
import Element from 'element-ui'
import backgr from '../components/backgr'
import backgr2 from '../components/backgr2'
const book = require('../assets/book.png')
const memory = require('../assets/pen.png')
const penceil = require('../assets/penceil.png')
const star = require('../assets/star.png')
// console.log(backgr)
// var canvas = document.getElementById('canvas')
// console.log(canvas)


// console.log(book)
// console.log(memory)
// console.log(penceil)
// console.log(star)
// console.log(Element)
export default {
    data(){
        return {
            article:[],
            flag:false,
            footer:[
                {
                    name:'学习',
                    path:'/learn',
                    img:book,
                },
                {
                    name:'记忆',
                    path:'/memory',
                    img:memory,
                },
                {
                    name:'笔记',
                    path:'/note',
                    img:penceil,
                },
                {
                    name:'倒计时',
                    path:'/timeClick',
                    img:star,
                }
            ]
            
        }
    },
    components:{
        'menuList':menu,
        'backgr':backgr,
        'backgr2':backgr2
    },
    methods:{
        manger(){
            this.$router.push({'path':'/loging'})
        },
        getSon(){
            axios.get('/api/addArticle').then(res => {
                console.log(res.data)
                this.article = res.data
            })
        },    
        change(){
            // console.log('点击')
            this.flag =! this.flag
            console.log(this.flag)
        },

        // mystart(){
        //     var canvas = document.getElementById('canvas')
        //     ctx = canvas.getContext('2d'),
        //     w = canvas.width = window.innerWidth
        //     h = canvas.height = window.innerHeight
        //     let hue = 217
        //     let stars = []
        //     let count = 0 
        //     maxStart = 1200
        //     var canvas2 = document.createElement('canvas')
        //     ctx2 = canvas2.getContext('2d')
        //     canvas2.width=100
        //     canvas2.height=100
        //     var half = canvas2.width/2
        //     gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        //     gradient2.addColorStop(0.025, '#fff');
        //     gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        //     gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        //     gradient2.addColorStop(1, 'transparent');

        //     ctx2.fillStyle = gradient2;
        //     ctx2.beginPath();
        //     ctx2.arc(half, half, half, 0, Math.PI * 2);
        //     ctx2.fill();

        // },
        

    },
    created(){
        
    }

}
</script>


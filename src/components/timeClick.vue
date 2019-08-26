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
        
        <canvas id="canvas"></canvas>
    </div>
</template>
<style scoped>
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
    .context{
        font-size: 0.15rem;
        color: aliceblue;
        position: absolute;
        
        height:100%;
        width: 100%;
    }
    #canvas{
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0;
    }
</style>
<script>
class TimeClick{
    constructor(r,ctx){
        this.r = r,
        this.ctx = ctx
    }
    drawBackground(ctx){
        this.ctx = ctx
        // console.log(ctx)
        this.ctx.save();
        // console.log(this.r)
        this.ctx.translate(this.r,this.r)
        this.ctx.beginPath()
        // this.ctx.lineWidth = 10*2;
        this.ctx.arc(0,0,this.r-this.ctx.lineWidth/2,0,2*Math.PI,false)
        this.ctx.stroke()
        var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
        this.ctx.font = 18*2+'px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        //12个数字
        // hourNumber.forEach((number,i) =>{
        //     var rad = 2*Math.PI/12*i
        //     var x = Math.cos(rad) * (this.r-30*2)
        //     var y = Math.sin(rad) * (this.r-30*2)
        //     ctx.fillText(number,x,y)
        // })
        // for(var i = 0; i<60;i++){
        //     var rad = 2*Math.PI/60*i
        //     var x = Math.cos(rad) * (this.r-18*2)
        //     var y = Math.sin(rad) * (this.r-18*2)
        //     this.ctx.beginPath();
        //     if(i % 5 ===0){
        //         this.ctx.fillStyle = '#000'
        //         this.ctx.arc(x,y,2*2,0,2,2*Math.PI,false)
        //     }else{
        //         this.ctx.fillStyle = '#ccc'
        //         this.ctx.arc(x,y,2*2,0,2,2*Math.PI,false)
        //     }
        //     this.ctx.fill()
        // }

    }
}


import listMeun from '../components/menuList'
export default {
    data(){
        return{
            flag:false,
        }
    },
    methods: {
        change(){
            // console.log('点击')
            this.flag =! this.flag
            console.log(this.flag)
        },
        //画圆圈
    },
    components:{
        'listMenu':listMeun
    },
    mounted(){
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        var width = ctx.canvas.width
        var height = ctx.canvas.height
        ctx.clearRect(0,0,width,height)
        var now = new Date()
        var hour = now.getHours()
        var minutes = now.getMinutes()
        var seconds = now.getSeconds()
        var r = width/4
        var time = new TimeClick(r,ctx)
        time.drawBackground(ctx)
        // let time = new TimeClick()
        // time.drawBackground()
       //画圆圈与数字
    }
}
</script>
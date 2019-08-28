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
        
        <canvas id="canvas" height="200" width="200"></canvas>
        <div class="day">
            {{dayName}}
            <span>{{dayMessage}}</span>
        </div>
    </div>
</template>
<style scoped>
span{
    display: block;
}
.day{
    position: absolute;
    width: 100%;
    height: 1rem;
    left: 0;
    top: 50%;
    color: black
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
    .context{
        font-size: 0.15rem;
        color: aliceblue;
        position: absolute;
        
        height:100%;
        width: 100%;
    }
    #canvas{
        position: absolute;
        left: 0;
    }
</style>
<script>
class TimeClick{
    constructor(r,rem,hour,minute,seconds){
        this.r = r
        this.ctx={}//传入画布的值
        this.rem = rem
        this.hour = hour
        this.minute = minute
        this.seconds = seconds
        // console.log(hour)
    }
    drawBackground(ctx){
        // ctx.save()
        // console.log(ctx)
        // console.log(this.rem)
        this.ctx = ctx
        this.ctx.save();
        ctx.translate(this.r,this.r)
        // console.log(this.r)
        // this.ctx.translate(this.r,this.r)//作用是将原点从左上方移动到圆心位置。不移动圆心的页面只能显示一个圆弧
        this.ctx.beginPath()
        this.ctx.lineWidth = 10*this.rem
        this.ctx.arc(0,0,this.r-this.ctx.lineWidth/2,0,2*Math.PI,false)//以0.0为原点r为半径顺时针画园,false是顺时针
        this.ctx.stroke()

        var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]//水平是从3开始的
        // this.ctx.font = 18*rem+'px Arial'//数字字体大小和样式
        this.ctx.font=18*this.rem+"px Arial"
        this.ctx.textAlign = 'center'//数字位置摆正
        this.ctx.textBaseline = 'middle'
        //12个数字
        hourNumber.forEach((number,i) =>{
            var rad = 2*Math.PI/12*i
            var x = Math.cos(rad) * (this.r-30*this.rem)//计算刻度坐标的弧度值，让数字分布在圆上
            var y = Math.sin(rad) * (this.r-30*this.rem)
            ctx.fillText(number,x,y)
        })
        for(var i = 0; i<60;i++){
            var rad = 2*Math.PI/60*i
            var x = Math.cos(rad) * (this.r-18*this.rem)
            var y = Math.sin(rad) * (this.r-18*this.rem)
            this.ctx.beginPath();
            if(i % 5 ===0){
                this.ctx.fillStyle = '#000'//黑色
                this.ctx.arc(x,y,2*this.rem,0,2,2*Math.PI,false)//画圆，每5个间隔就是一个刻度值
            }else{
                this.ctx.fillStyle = '#ccc'//灰色
                this.ctx.arc(x,y,2*this.rem,0,2,2*Math.PI,false)
            }
            this.ctx.fill()
        }

    }
    //绘制时针
    drawHour(hour,minute,seconds){
        this.ctx.save()
        // this.hour = hour
        // this.minute = minute
        this.ctx.beginPath()
        // console.log(hour)
        // console.log(minute)
        if(hour<4){
            var rad = (hour*30+270+minute/2)*Math.PI/180
        }else{
            var rad = (hour*30-90+minute/2)*Math.PI/180
        }
        // var rad = (hour*30-90+minute/2)*Math.PI/180//需要旋转的弧度值
        // var mrad = 2*Math.PI/60*minute
        // console.log(rad)
        this.ctx.rotate(rad)
        // this.ctx.rotate(2*Math.PI/12*(hour-3)+2*Math.PI/12/60*minute);
        this.ctx.lineWidth = 6
        this.ctx.lineCap = 'round'
        // this.ctx.arc(0,0,this.r/10,0,Math.PI,false)
        this.ctx.moveTo(0,0)
        this.ctx.lineTo(this.r/4,0)
        this.ctx.stroke()
        this.ctx.restore();
        
    }
    drawMinute(minute){
        this.ctx.save()
        // console.log(minute)
        this.ctx.beginPath()
        //加一个判断
        if(minute<15){
            var rad = (minute*6+270)*Math.PI/180
        }else{
            var rad = (minute*6-90)*Math.PI/180
        }
        // console.log(rad)
        this.ctx.rotate(rad)
        // this.ctx.rotate(rad)
        // this.ctx.rotate(rad)
        this.ctx.lineWidth = 3*this.rem
        this.ctx.lineCap = 'round'
        this.ctx.moveTo(0,0)
        this.ctx.lineTo(this.r/3,0)
        this.ctx.stroke()
        this.ctx.restore()
        
    }
    drawSecond(seconds){
        this.ctx.save()
        // console.log(seconds)
        this.ctx.beginPath()
        if(seconds<15){
            var rad = (seconds*6+270)*Math.PI/180
        }else{
            var rad = (seconds*6-90)*Math.PI/180
        }
        // var rad =  2 * Math.PI / 60 * seconds; 
        this.ctx.rotate(rad)
        // this.ctx.rotate(rad)
        this.ctx.lineWidth = 1*this.rem
        this.ctx.lineCap = 'round'
        this.ctx.moveTo(0,0)
        this.ctx.lineTo(this.r/2,0)
        this.ctx.stroke()
        this.ctx.restore()        
    }
}


import listMeun from '../components/menuList'
import { METHODS } from 'http';
import { setInterval } from 'timers';
export default {
    data(){
        return{
            flag:false,
            dayName:'',
            dayMessage:'',
        }
    },
    methods: {
        change(){
            // console.log('点击')
            this.flag =! this.flag
            console.log(this.flag)
        },
        getDays(){
            let days = new Date()
            // console.log(days.getDay())//获取日期数字
            switch (days.getDay()) {
                case 0:
                    this.dayName = '星期天'
                    this.dayMessage= '今天放假啦出去浪~~'
                    break
                case 1:
                    this.dayName = '星期一'
                    this.dayMessage= '今天要好好加油'
                    break
                case 2:
                    this.dayName = '星期二'
                    this.dayMessage= '今天要好好加油'
                    break
                case 3:
                // console.log(3)
                    this.dayName ='星期三'
                    this.dayMessage= '今天要好好加油'
                    break
                case 4:
                    this.dayName ='星期四'
                    this.dayMessage= '今天要好好加油'
                    break
                case 5:
                    this.dayName = '星期五'
                    this.dayMessage= '今天要好好加油'
                    break
                case 6:
                    this.dayName = '星期六'
                    this.dayMessage= '今天放假啦出去浪~~'
                    break;
            }
            // let dayTime = days.getDay()
            // console.log(dayTime)
        }
        //画时钟
        // drawTime(){
        // var canvas = document.getElementById('canvas')
        // var ctx = canvas.getContext('2d')
        // var width = ctx.canvas.width
        // var height = ctx.canvas.height
        // var rem = width/300
        // var r = width/2-8*rem
        // ctx.clearRect(0,0,width,height)
        // var now = new Date()
        // var hour = now.getHours() %12
        // var minute = now.getMinutes()
        // var seconds = now.getSeconds()
        // var time = new TimeClick(r,rem,hour,minute,seconds)
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        // // console.log(ctx)
        // time.drawBackground(ctx)
        // time.drawHour(hour,minute)
        // time.drawMinute(minute,seconds)
        // time.drawSecond(seconds)
        // // time.drawMinute(minute)
        // // window.requestAnimationFrame(this.drawTime)
        // }
    },
    created() {
        this.getDays()
    },
    components:{
        'listMenu':listMeun
    },
    mounted(){
//          window.requestAnimFrame = (function(){
//   return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           window.mozRequestAnimationFrame    ||
//           function( callback ){
//             window.setTimeout(callback, 1000 / 60);
//             };
//             })();
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        var width = ctx.canvas.width
        var height = ctx.canvas.height
        var rem = width/300
        var r = width/2-8*rem
        // ctx.translate(this.r,this.r)
        function drawClick(){
            ctx.clearRect(0,0,width,height)
            var now = new Date()
            var hour = now.getHours() %12
            var minute = now.getMinutes()
            var seconds = now.getSeconds()
            // console.log(day)
            var time = new TimeClick(r,rem,hour,minute,seconds)
            time.drawBackground(ctx)
            time.drawHour(hour,minute)
            time.drawMinute(minute,seconds)
            time.drawSecond(seconds)
            ctx.restore()
        // time.drawMinute(minute)
        window.requestAnimationFrame(drawClick)

        }
        window.requestAnimationFrame(drawClick)
        // drawClick()
        // drawClick()
        // window.requestAnimationFrame(drawClick)
        // setInterval(this.drawTime,1000)
        // window.requestAnimationFrame(this.drawTime)
        // var canvas = document.getElementById('canvas')
        // var ctx = canvas.getContext('2d')
        // var width = ctx.canvas.width
        // var height = ctx.canvas.height
        // ctx.clearRect(0,0,width,height)
        // var now = new Date()
        // var hour = now.getHours()
        // var minutes = now.getMinutes()
        // var seconds = now.getSeconds()
        // var r = width/4
        // var time = new TimeClick(r,ctx)
        // time.drawBackground(ctx)
        // let time = new TimeClick()
        // time.drawBackground()
       //画圆圈与数字
    }
}
</script>
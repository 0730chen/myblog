<template>
    <div>
        <canvas id="canvas2" width="1500" height="600"></canvas>
    </div>
</template>
<style scoped>
</style>
<script>
var time = 2;
var num = 20;
var dots = [];
class dot{
    constructor(x,y,vx,vy){
        this.x = x;
        this.y = y;
        this.vx = vx
        this.vy = vy;
        //随机粒子大小
        this.size = Math.ceil(Math.random()*3+2)
        this.ctx2={}

    }
    render(ctx2){
        ctx2.save()
        this.ctx2 = ctx2
        this.ctx2.beginPath()
        this.ctx2.fillStyle = '#7088a0'
        this.ctx2.arc(this.x-this.size/2,this.y-this.size/2,this.size,0,Math.PI*2)
        this.ctx2.closePath()
        this.ctx2.fill()
        ctx2.restore()
    }
    //对粒子做逻辑运算
    update(){
        // this.ctx2.clearRect(0,0,canvas.width,canvas.height);

        this.x = this.x+this.vx*time
        this.y = this.y+this.vy*time
        this.vx = (this.x < this.ctx2.canvas.width && this.x > 0) ? this.vx:(-this.vx)
        this.vy = (this.y < this.ctx2.canvas.height && this.y >0) ? this.vy:(-this.vy)
        this.render(this.ctx2)
    }

}

export default {
    data(){
        return{

        }
    },
    mounted() {
            window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
            };
            })();

            var canvas = document.getElementById('canvas2');
            var ctx2 = canvas.getContext('2d');
            // let w = canvas.width = canvas.offsetWidth;
            // let h = canvas.height = canvas.offsetHeight;
            for(let i = 0; i<num;i++){
                var x=Math.ceil(Math.random()*canvas.width);
                var y=Math.ceil(Math.random()*canvas.height);
                var vx=Math.ceil(Math.random()*2);
                var vy=Math.ceil(Math.random()*2);
                var d=new dot(x,y,vx,vy,canvas);
                // console.log(d)
                // console.log(ctx2)
                // console.log(d)
                d.render(ctx2);
                dots.push(d);
            }
            // console.log(dots)
            // console.log(dots)
         window.requestAnimationFrame(anim)
            function anim(){
                ctx2.clearRect(0,0,canvas.width,canvas.height);
                for(let i= 0; i<dots.length;i++){
                    // console.log(dots[i])
                    dots[i].update(canvas)
                }
                window.requestAnimationFrame(anim)
            }

    },
}
</script>
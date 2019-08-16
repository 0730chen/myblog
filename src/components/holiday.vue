<template>
    <div class="context">
        <div class="menuCover" v-if="flag" @click="change"></div>
        <blogTitle @titleV="getF" :flag="flag"></blogTitle>
        <mymenu v-if="flag"></mymenU>
        <div class="Message">{{dayMessage}}</div> 
        <div class="Name">{{dayName}}</div>
    </div>
</template>
<style scoped>
.Name{
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .Message{
    position: relative;
    width: 100%;
    height: 1rem;
    left:0;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .context{
        font-size: 0.16rem;
    }
</style>
<script>
import blogTitle from '../components/title'
import mymenu from '../components/menu'
export default {
    data(){
        return {
             flag:false,
            CoverF:false,
            dayName:'',
            dayMessage:'',
        }
    },
     components:{
        'mymenu':mymenu,
        'blogTitle':blogTitle,


    },
    methods: {
        getF(e){
            if(e){
            console.log(e)
            this.flag = e
            this.CoverF = e
            }else{
                this.flag =!e
                this.CoverF =!e
            }
            // console.log(e)
            // this.flag = e
            // this.CoverF = e
        },
        change(){
            this.flag = false
        },
        NowData(){
            let data = new Date()
            // console.log(data.getDay())
            // console.log(data)
            //获取当前的时间
            // if(data.getDay() == 3){
            //     this.dayName = '星期三'
            // }
            switch (data.getDay()) {
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
        },
    },
    mounted() {
        this.NowData()
    },
}
</script>
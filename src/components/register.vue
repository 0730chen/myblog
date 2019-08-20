<template>
    <div class="context">
        <div class="menuCover" v-if="flag" @click="change"></div>
        <blogTitle @titleV="getF" :flag="flag"></blogTitle>
        <mymenu v-if="flag"></mymenu>
    </div>
</template>
<style scoped>
    .context{
        font-size: 0.16rem;
    }
</style>
<script>
import blogTitle from '../components/title'
import mymenu from '../components/menu'
import axios from 'axios'

export default {
    data(){
        return {
            flag:false,
            CoverF:false,
            article:[],
        }
    },
    components:{
        'blogTitle':blogTitle,
        'mymenu' :mymenu
    },
    methods: {
        getF(e){
            if(e){
            // console.log(e)
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
        //获取文章内容
        getAritcle(){
            axios.get('/api/addArticle').then(res=>{
                console.log(res.data)
               this.article= res.data
                // Data.forEach(e => {
                //     if(e.Authoe == 'undefined'){
                //         console.log('无效数据'+e)
                //     }else{
                //         this.article = e
                //         console.log(this.article)
                //     }
                // });
            }).catch(err=>{
                console.log(err)
            })
        }

        // change(){
        //     this.CoverF =! this.CoverF
        //     console.log(this.CoverF)
        //     this.flag =! this.flag

            // console.log(this.flag)
            // this.flag = !this.CoverF
            // this.CoverF =! this.CoverF
        
    },
    created(){
        this.getAritcle()
    }
}
</script>
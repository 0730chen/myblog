<template>
    <div class="context">
        <div class="menuCover" v-if="flag" @click="change"></div>
        <blogTitle @titleV="getF" :flag="flag"></blogTitle>
        <mymenu v-if="flag"></mymenU>
    </div>
</template>
<style scoped>
    .context{
        font-size: 0.16rem;
    }
</style>>
    
<script>
import blogTitle from '../components/title'
import mymenu from '../components/menu'
export default {
    data(){
        return {
             flag:false,
            CoverF:false
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
        }
    },
}
</script>
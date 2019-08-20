<template>
    <div class="context">
        <div class="menuCover" v-if="flag" @click="change"></div>
        <blogTitle @titleV="getF" :flag="flag"></blogTitle>
        <mymenu v-if="flag"></mymenU>
        <el-input v-model="title" placeholder="请输文章标题"></el-input>
        <quillEditor v-model="wraper"></quillEditor>
        <el-button type="primary" @click="getData">发表文章</el-button>
    </div>
</template>
<style scoped>
.el-input{
    transform: translateY(0.5rem)
}
.el-button--primary{
    position: absolute;
    right: 5%;
    bottom: 20%;
}
.quill-editor{
    position: relative;
    transform: translateY(1rem)
}
.context{
    font-size: 0.16rem;
}
</style>
<script>
import axios from 'axios'
import blogTitle from '../components/title'
import mymenu from '../components/menu'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
export default {
    data(){
        return {
             flag:false,
            CoverF:false,
            wraper:'',
            title:''
        }
    },
    components:{
        'mymenu':mymenu,
        'blogTitle':blogTitle,
        'quillEditor':quillEditor
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
        //将页面上的文章和标题存在数据库中
        getData(){
            axios.post('/api/addArticle',{
                title:this.title,
                wraper:this.wraper,
            }).then(res =>{
                alert('添加'+res.data)
                this.$router.push({path:'/register'})
                // console.log(res.data)
            })
        }
    },
    mounted() {
        if(this.title ||this.wraper == ''){
            alert('标题内容不能为空')
        }else{
            this.getData()
        }
    },
}
</script>
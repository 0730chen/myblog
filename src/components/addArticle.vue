<template>
    <div class="context">
                <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <a href="#/addArticle"><el-menu-item index="1-1">添加文章</el-menu-item></a>
          <a href="#/Message"><el-menu-item index="1-2">添加留言</el-menu-item></a>
        </el-menu-item-group>
        <el-menu-item-group>
          <a href="#/holiday"><el-menu-item index="1-3">假期</el-menu-item></a>
        </el-menu-item-group>
      </el-submenu>
      
     
    </el-menu>
  </el-col>
</el-row>
        <div class="editor">
            <div>添加文章</div>
        <!-- <div class="menuCover" v-if="flag" @click="change"></div> -->
        <!-- <blogTitle @titleV="getF" :flag="flag"></blogTitle> -->
        <!-- <mymenu v-if="flag"></mymenU> -->
        <el-input v-model="title" placeholder="请输文章标题"></el-input>
        <quillEditor v-model="wraper"></quillEditor>
        <el-button type="primary" @click="getData">发表文章</el-button>
        </div>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
.el-table{
    margin-top: 50px;
}
.el-menu-item{
    min-width: 188px;
}
.el-menu{
    height: 100%;
}
.el-col{
    height: 100%;
}
.el-row{
    height: 100%;
    width: 20%;
}
.editor{
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: 50%;
    max-height: 97%;
    border: 1px solid black;
    left: 150px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.el-input{
    top: 10%;
}
.el-button--primary{
    width:8%;
    height:5%; 
    position: absolute;
    right: 20px;
    bottom: 0;
}
.quill-editor{
    position: relative;
    top: 30%;
    height: 50%;
}
.context{
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start
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
            if(this.title || this.wraper === ''){
                alert('标题或者内容不能为空')
            }else{
            axios.post('/api/addArticle',{
                title:this.title,
                wraper:this.wraper,
            }).then(res =>{
                alert('添加'+res.data)
                this.$router.push({path:'/register'})
                // console.log(res.data)
            })
            }
        }
    },
    mounted() {

        // if(this.title ||this.wraper == ''){
        //     alert('标题内容不能为空')
        // }else{
        //     this.getData()
        // }
    },
}
</script>
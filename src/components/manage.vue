<template>
    <div class="context">
         <!-- <div class="menuCover" v-if="flag" @click="change"></div> -->
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
          <a href="#/"><el-menu-item index="1-2">文章目录</el-menu-item></a>
        </el-menu-item-group>
        <el-menu-item-group>
          <a href="#/holiday"><el-menu-item index="1-3">假期</el-menu-item></a>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
        <!-- <blogTitle @titleV="getF" :flag="flag"></blogTitle> -->
        <!-- <mymenu  v-if="flag"></mymenu> -->
            <!-- 在子组件上定义属性可以是父组件传值给子组件, 子组件上定义事件是子组件通过事件传值给父组件 -->
            <!-- <mymenu v-if="flag" :value="menuList" :parentV="childrenV" @childrenFn='getValue'></mymenu> -->
        <!-- <div style="height:0.2rem"></div> -->
        <el-table
      :data="User"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="passWord"
        label="密码">
      </el-table-column>
    </el-table>
        </div>
</template>
<script>

import axios from 'axios'
import menu from '../components/menu'
import blogTitle from '../components/title'

// console.log(mymenu)
export default {
    data(){
        return{
            tabPosition: 'left',
            menuList:'我是一个助手',
            flag:false,
            childrenV:'传给子组件',
            menuV:'',
            User:[],
            CoverF:false,
            menuList:[
                {
                    name:'文章集中站',
                    path:'/register',
                },
                {
                    name:'添加文章',
                    path:'/addArticle'
                },
                {
                    name:'留言',
                    path:'/Message'
                },
                {
                    name:'放假',
                    path:'/holiday'
                },
                {
                    name:'回到首页',
                    path:'/'
                }
            ]
        }
    },
    components:{
        'mymenu':menu,
        'blogTitle':blogTitle

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
        },
        change(){
            this.flag =! this.flag
        },
        getValue(e){
            console.log(e)

        },
        register(){
            axios.get('/api/re').then(res=>{
                console.log(res.data)
                this.User = res.data
                // console.log(typeof(res.data.data))
                // let arr = JSON.parse(res)
                // // console.log(arr)
                // this.User = arr
                // console.log(this.User)
                // arr.forEach(element => {
                //     console.log(element.user.userName)

                // });





            }).catch(err=>{
                console.log(err)
            })
        }

    },
    created() {
        this.register()
    },

}
</script>

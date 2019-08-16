<template>
    <div class="context">
         <div class="menuCover" v-if="flag" @click="change"></div>
        <blogTitle @titleV="getF" :flag="flag"></blogTitle>
        <mymenu  v-if="flag"></mymenu>
            <!-- 在子组件上定义属性可以是父组件传值给子组件, 子组件上定义事件是子组件通过事件传值给父组件 -->
            <!-- <mymenu v-if="flag" :value="menuList" :parentV="childrenV" @childrenFn='getValue'></mymenu> -->
        <div style="height:0.2rem"></div>
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
<style scoped>
.menuCover{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3b41;
    opacity: 0.5;
    z-index: 99;
}
#myMenu{
    width: 60px;
    height: 30px;
    position: absolute;
    top: 0.04rem;
    left: 0;
    background: url('../assets/menu.png') 100% 100% no-repeat;
    background-size: 50%;
    margin: 0 auto;
    z-index:100;
}
.el-header{
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    border: 1px solid black;
    font-size: 0.16rem;
    color: white;
    background-color:rgb(185, 185, 219)
  
}

.context{
    width: 100%;
    height:100%;
    font-size: 0.16rem;
}
.el-container{
    height: 100%;
    border:1px solid black;
}
</style>
<script>

import axios from 'axios'
import Element from 'element-ui'
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
            CoverF:false
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

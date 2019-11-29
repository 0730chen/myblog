<template>
  <div class="page">
    <img src="../assets/loging.jpg" alt="">
    <title>My Blog</title>
    <div class="container">
      <div><strong>后台博客管理系统</strong></div>
      <input type="text" placeholder="姓名" name="username" id="name" v-model="username" autocomplete="off">
      <input type="password" placeholder="密码" name="password" id="password" v-model="password" autocomplete="off">
      <!-- <input type="submit" value="注册" id="register" @click="sendCount" autocomplete="false"> -->
      <input type="submit" value="登陆" id="add" @click="loging">
    </div>

  </div>
</template>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .page {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    font-size: 14px;
  }

  .page > img {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
  }

  .title {
    font-size: 0.16px;
  }

  .container {
    position: absolute;
    width: 800px;
    height: 400px;
    padding: 0;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    box-shadow: 1px 5px 10px black;
  }

  .container > div {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    /* border:1px solid black; */
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #name {
    position: absolute;
    width: 200px;
    height: 40px;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    background-color: whitesmoke;
    padding: 0;
    border: 0;
    border-radius: 4px;
    border: 1px solid black;
  }

  #password {
    position: absolute;
    width: 200px;
    height: 40px;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    background-color: whitesmoke;
    padding: 0;
    border: 0;
    border-radius: 4px;
    border: 1px solid black;
  }

  #register {
    position: absolute;
    width: 0.2rem;
    height: 0.08rem;
    border: 1px solid black;
    bottom: 0rem;
    right: 0;
    border-radius: 0.04rem;
    color: aliceblue;
    background-color: #6188f5;
  }

  #add {
    color: aliceblue;
    position: absolute;
    width: 80px;
    height: 40px;
    background-color: #6188f5;
    bottom: 0.1rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.04rem;
  }

  @media (max-width: 500px) {
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
<script lang="ts">
  import axios from 'axios'
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";


  @Component
  export default class LoginForm extends Vue {
    //初始数据

    message: string = 'hello'
    helloMsg = 'hello'

    // username:String
    // password:String
        password:string
        username:string
        private data(){
      return{
        password:'',
        username:''
        }
        }
    sendCount(e) {
      axios.post('/api/add', {
        'data': 'register',
        user: {
          'userName': '',
          'passWord': '',
        },
      }).then(res => {
        console.log(res.data)
        if (res.data == '账号已经注册过了') {
          alert('账号已经被注册')
        } else {
          alert('注册成功')
          this.$router.push({'path': 'manage'})
        }

      }).catch(
        error => {
          console.log(error)
        }
      )
    }

    loging(e) {
      console.log(this.password,this.username)
      axios.post('/api/loging',
        {
          'username': 'sss',
          'passWord': 'sss'
        },
      ).then(res => {

        if (res.data == '验证通过') {
          alert('登陆成功')
          this.$router.push({'path': 'manage'})

        } else {
          alert('登陆失败--请检查账号密码')
        }
      })
    }

    some() {
      // this.testProps
      console.log(this);
    }

    mounted(): void {
      this.some()
    }
  }
</script>

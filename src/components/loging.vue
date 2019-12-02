<template>
  <div id="login">
    <el-form class="login-form">
      <h3>博客登陆界面</h3>
      <el-form-item label="用户名" prop="pass">
        <el-input type="password" autocomplete="off" v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" autocomplete="off" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginButton">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
  import axios from 'axios'
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";
  import {login,Regist} from '../api/axios'
  interface User{
    username:string|number
    password:string|number
  }
  import {Form} from "element-ui";
  //@Component修饰符注明了此类为一个Vue组件
  @Component
  export default class LoginForm extends Vue {
    message: string = 'hello'
    password: string | number
    username: string | number
    private validatePass: any;
    private validatePass2: any;
    data() {
      return {
        password: '',
        username: '',
        pass: '',
        checkPass: '',
        age: '',
        radio: '1',
        input: '',
        checked: true,
        //检验规则
        rules:{
          pass:[{
            validator:this.validatePass,tirgger:'blur'
          }],
          checkPass:[
            {validator:this.validatePass2,trigger:'blur'}
          ]
        }
      }
    }
    //注册按钮目前用不到
    private sendCount(e:void) {
      let use = {"username":this.username,"password":this.password}
      Regist('/api/add',use)

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

    private loginButton(e){
      let use = {"username":this.username,"password":this.password}
      console.log(use);
      login('/api/loging',use)
    }

    //登陆
    // private loging(e: void) {
    //   console.log(this.password, this.username)
    //   axios.post('/api/loging',
    //     {
    //       'username': '',
    //       'passWord': ''
    //     },
    //   ).then(res => {
    //
    //     if (res.data == '验证通过') {
    //       alert('登陆成功')
    //       this.$router.push({'path': 'manage'})
    //
    //     } else {
    //       alert('登陆失败--请检查账号密码')
    //     }
    //   })
    // }

    private some(e: void): void {
    }

    mounted(url: string): void {
    }
  }
</script>

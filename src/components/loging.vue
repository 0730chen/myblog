<template>
  <div class="page">
    <title>My Blog</title>
    博客后台管理
    <div class="container">
        
            <input type="text" placeholder="姓名" name="username" id="name" v-model="username">
            <input type="password" placeholder="密码" name="password" id="password" v-model="password">
            <input type="submit" value="注册" id="register" @click="sendCount" >
            <input type="submit" value="登陆" id="add" @click="loging">
    </div>
    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <!-- <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#add').click(function() {
                var user = $("#name").val()
                var pws = $("#password").val()
                console.log(user, pws)
                if (user == '' || pws == '') {
                    alert('用户名和密码不能为空')
                } else {
                    $.ajax({
                        method: 'POST',
                        url: '/signin',
                        data: {
                            name: user,
                            pws: pws
                        },
                        dataType: 'json',
                        success: function(response) {
                            alert('登陆成功')
                                // window.location.href = response.url
                            setTimeout(function() {
                                window.location.href = response.url
                            }, 3000)
                            console.log(response.url)
                        }

                    })
                }

                // $.ajax({
                //     method: 'POST',
                //     url: '/signin',
                //     data: {
                //         name: user,
                //         pws: pws
                //     },
                //     dataType: 'json',
                //     success: function(response) {
                //         alert('注册成功')
                //             // window.location.href = response.url
                //         setTimeout(function() {
                //             window.location.href = response.url
                //         }, 3000)
                //         console.log(response.url)
                //     }

                // })
            })
        })
    </script>
    </script> -->
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
  </div>
</template>

<style scoped>
.page{
    width: 100%;
    height: 100%;
    background-color:cadetblue;
    font-size: 0.16rem;
    }

    .title{
      font-size: 0.16px;
    }
    .container {
        position: relative;
        width: 3.5rem;
        margin: 0 auto;
        height: 3.5rem;
        padding: 0;
        border: 1px solid black;
        background-color:skyblue;
         transform: translateY(1rem)
    }
   
    
    #name {
        position: absolute;
        width: 2rem;
        height: 0.3rem;
        top: 1.2rem;
        left: 0.75rem;
        background-color: whitesmoke;
        padding: 0;
        border: 0;
        
        border-radius: 4px;
    }
    
    #password {
        position: absolute;
        width: 2rem;
        height: 0.3rem;
        top: 1.8rem;
        left: 0.75rem;
        background-color: whitesmoke;
        padding: 0;
        border: 0;
       
        border-radius: 4px;
    }
    #register{
       position: absolute;
        width: 0.5rem;
        height: 0.25rem;
        background-color:#84a0f1;
        bottom: 0rem;
        left: 0.05rem;
       
        border-radius: 0.04rem;
    }
    
    #add {
        position: absolute;
        width: 0.5rem;
        height: 0.25rem;
        background-color: #84a0f1;
        bottom: 0rem;
        right: 0.05rem;
       
        border-radius: 0.04rem;
    }
</style>
<script>
import axios from 'axios'
// console.log(axios)
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    sendCount(e){
      // console.log(this.username)
      // console.log(this.password)
      // axios.get('/api/').then(res =>{
      //   console.log('请求成功')
      //   // console.log(res.data)
      // })
      axios.post('/add',{
        'data':'register',
        user:{
          'userName':this.username,
        'passWord':this.password
        },
        // 'userName':this.username,
        // 'passWord':this.password
      }).then(res =>{
        console.log(res.data)
        if(res.data=='账号已经注册过了'){
          alert('账号已经被注册')
        }else{
          alert('注册成功')
          this.$router.push({'path':'manage'})
        }
        // alert('注册'+res.data)

        // this.$router.push({'path':'manage'})
        
      }).catch(
        error => {
          console.log(error)
        }
      )
        // console.log(e)
      // axios.get('http://localhost:8081/sign').then(res =>{
      //   console.log('成功')
      // }
      // )
    },
    loging(e){
      // console.log(this.username)
      // console.log(this.password)
      axios.post('/loging',
        {
          'username':this.username,
        'passWord':this.password
        },
      ).then(res=>{
        
        if(res.data =='验证通过'){
          alert('登陆成功')
          this.$router.push({'path':'manage'})

        }else{
          alert('登陆失败--请检查账号密码')
        }
      })
    }
  }
}
</script>

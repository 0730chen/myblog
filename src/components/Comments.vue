<template>
  <div>
    <div class="nav-img" @click="img" ><img src="https://i.loli.net/2019/12/13/DygXuMWBlzPqYUe.jpg" /></div>
  <div class="Comments">
<!--    <img src="https://i.loli.net/2019/12/13/hdcmxJ8s2vOrDEH.jpg" />-->
    <div class="intro">
      <div class="title">
        <div class="header">留言板</div>
        <div class="description">有什么话要对我说吗？这里是你畅所欲言的地方,友好的交流</div>
      </div>
      <div class="Comment">
        <ul class="Comment-container">
          <li class="item">
            <div class="comment-author">头像
              <div class="username">用户名</div>
            </div>
            <div class="user-comment">评论内容</div>
            <div class="time">评论时间</div>
          </li>
          <li class="item">第二条</li>
          <li class="item">第三条</li>
          <li class="item">第四条</li>
        </ul>
      </div>
      <div class="addComments">
        <input type="text"  v-model="Comments" @click="touch">
        <input type="text"  v-model="userName">
        <input type="text"  v-model="mailaddress">
        <input type="text"  v-model="url">
      </div>

    </div>
  </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from "vue-class-component";
  console.log('留言板')
  @Component({})
  export default class Comments extends Vue{
    Comments:any
    userName:any
    mailaddress:any
    url:any
    private data(){
      return {
        Comments:'你想说的话',
        userName:'你的用户名',
        mailaddress:'邮箱地址',
        url:'你的网址或者博客',
        createData:Date.now()
      }
    }
    addComments(){

    }
    img(){
      console.log('图像')
    }
    touch(){
      console.log('输入框')
    }
  }
</script>
<style lang="scss" scoped>
  .nav-img{
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.5;
  }
  .Comments{
    position: relative;
    padding-top: 80px;
    width: 60%;
    margin: 0 auto;
    z-index: 100;
    .intro{
      .title{
        height: 400px;
        border: 1px solid black;
        display: flex;
        flex-direction:column;
        align-items: center;
        .header{
         color: #444444;
          font-size: 25px;
          font-weight: 700;
        }
        .description{
          margin-top: 200px;
        }
      }
      .Comment{
        height: 300px;
        margin-top: 100px;
        border: 1px solid black;
        .Comment-container{
          .item{
            .comment-author{
              display: flex;
              flex-direction: row;
            }
          }
        }
      ;
      }
      .addComments{
        z-index:100
      }
    }

  }
</style>

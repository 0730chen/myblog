<template>
  <div>
    <div class="nav-img" @click="img"><img src="https://i.loli.net/2019/12/13/DygXuMWBlzPqYUe.jpg"/></div>
    <div class="Comments">
      <!--    <img src="https://i.loli.net/2019/12/13/hdcmxJ8s2vOrDEH.jpg" />-->
      <div class="intro">
        <div class="title">
          <div class="header">留言板</div>
          <div class="description">有什么话要对我说吗？这里是你畅所欲言的地方,友好的交流</div>
        </div>
        <div class="Comment">
          <ul class="Comment-container">
            <li class="item" v-for="item in comment">
              <div class="comment-author">
                <div class="username">{{item.userName}}</div>
              </div>
              <div class="user-comment">{{item.Comments}}</div>
              <div class="time">{{item.Data}}</div>
            </li>
          </ul>
        </div>
        <div class="addComments">
          <div>添加新评论</div>
          <input type="text" id="comment" placeholder="评论" @click="touch" v-model="Comments">
          <input type="text" id="username"placeholder="用户名" v-model="userName">
          <input type="text" id="mailaddress" placeholder="邮箱地址" v-model="mailaddress">
          <input type="text" id="url" placeholder="网站或者博客地址" v-model="url">
          <input type='button' id="button" value="发表" @click="createComments">
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
  export default class Comments extends Vue {
    Comments: any
    userName: any
    mailaddress: any
    url: any
    createData: Date
    comment: any

    private data() {
      return {
        Comments: '',
        userName: '',
        mailaddress: '',
        url: '',
        createData: new Date(),
        comment: []
      }
    }

    createComments() {
      let data = this.TimeLoad(this.createData)
      let Comments =
        {
          Comments: this.Comments,
          userName: this.userName,
          mailaddress: this.mailaddress,
          url: this.url,
          Data: data,
        }
      this.comment.push(Comments)
      localStorage.setItem('Comments', JSON.stringify(this.comment))
    }


    TimeLoad(Date): string {
      let Year = Date.getFullYear()
      let Month = Date.getMonth() + 1
      let Day = Date.getDay()//星期
      let Hour = Date.getHours()
      let minuts = Date.getMinutes()
      let sec = Date.getSeconds()
      return `${Year}-${Month}-${Hour}:${minuts}:${sec}`
    }

    created() {
      let Comments = JSON.parse(localStorage.getItem('Comments'))
      let data = this.TimeLoad(this.createData)
      if (Comments === null) {
        this.comment.push(
          {
            Comments: this.Comments,
            userName: this.userName,
            mailaddress: this.mailaddress,
            url: this.url,
            Data: data
          }
        )
      } else {
        console.log(Comments);
        this.comment = Comments
      }
    }
    img() {
      console.log('图像')
    }

    touch() {
      console.log('输入框')
    }
  }
</script>
<style lang="scss" scoped>
  .nav-img {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .Comments {
    position: relative;
    padding-top: 80px;
    width: 60%;
    margin: 0 auto;
    z-index: 100;

    .intro {
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;

        .header {
          color: #444444;
          font-size: 25px;
          font-weight: 700;
        }

        .description {
        }
      }

      .Comment {
        margin-top: 100px;
        .Comment-container {
          .item {
            .comment-author {
              display: flex;
              flex-direction: row;
            }
          }
        }
      ;
      }

      .addComments {
        z-index: 100;
        display: flex;
        flex-direction: column;
       align-items: center;
        #comment{
          width: 100%;
          height: 200px;
        }

      }
    }

  }
</style>

<template>
  <div class="nav">
    <img :src="this.Url" alt="">
    <div class="message">
      <img :src=this.Avatar alt="头像">
      <div class="article-name">Atom</div>
      <div class="Text">{{this.Text}}</div>
      <ul class="nav-list">
        <router-link to="/"><li>首页</li></router-link>
        <a href="http://www.chentian.ltd/"><li>博客</li></a>
        <a href="https://github.com/0730chen"><li>Github</li></a>
        <a href="http://www.chentian.ltd/dist1/"><li>网站导航</li></a>
        <router-link to="/Comments"><li>留言板</li></router-link>
      </ul>
    </div>
    <div class="cover"></div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from "vue-class-component"
  import axios from 'axios'

  @Component({})
  export default class Home extends Vue {
    //https://bing.ioliu.cn/v1/?type=json
    Url: string = 'https://bing.ioliu.cn/v1/rand'
    Avatar:string =''
    Text:string = ''
    index:number = Math.floor(Math.random()*10)

    GetUrl(): void {
      axios.get(`/bing/?resolution=1920&format=json&index=${this.index}`).then(res => {
        if(this.Url ===res.data.url){
          this.GetUrl()
        }else{
        this.Url = res.data.url
        }
      })
    }
    GetAvatar():void{
      axios.get(`https://api.uomg.com/api/rand.avatar?sort=动漫男&format=json`).then(res=>{
        this.Avatar = res.data["imgurl"]
      })
    }
    GetOne():void{
      axios.get('https://v1.hitokoto.cn/?c=b').then(res=>{
        this.Text = res.data["hitokoto"]
      })
    }

    mounted() {
      this.GetUrl()
      this.GetAvatar()
      this.GetOne()
    }

  }
</script>
<style lang="scss" scoped>
.nav{
  img{
    max-width: 100%;
  }
  .cover{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: #000000;
    opacity: 0.55;
  }
  .message{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 999;
    .article-name{
      font-size: 30px;
    }
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .Text{
      color: white;
    }
    .nav-list{
      display: flex;
      flex-direction: row;
      a{
        border:1px solid white;
        border-radius: 10px;
        margin: 10px;
        padding: 5px;
        li{
          color: white;
        }
      }
    }
  }
}

</style>

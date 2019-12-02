<template>
  <div class="context clearfix">
    <nav>
      <div class="nav">
        <span>
          <strong>前端笔记</strong>
        </span>
        <div class="linkList">
          <a href="#">
            <li class="link-item">Home</li>
          </a>
          <li class="link-item">博客</li>
          <li class="link-item">感想</li>
        </div>
      </div>
    </nav>
    <div class="container">
      <aside class="sidebar">
        <ul v-for="(item,index) in menu" class="menu-tree">
          <div @click="ShowMenu" :data=index>{{item.title}}</div>
          <li v-for="e in item.menu2">
            <div v-if="item.show">{{e}}</div>
          </li>
        </ul>

      </aside>
    </div>
    <!--      <div class="main">-->
    <!--        <main-->
    <!--          class="theme-item"-->
    <!--          v-for="(item,index) in article[0]"-->
    <!--          :key="index"-->
    <!--          @click="getWrap($event)"-->
    <!--        >-->
    <!--          <li class="wrap-item" :data="item._id">{{item.Author}}</li>-->
    <!--        </main>-->
    <!--      </div>-->
    <footer>
      <div>我是页脚的部分:请添加内容</div>
    </footer>
  </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";
  import index from "../router";
  @Component
  export default class Blog extends Vue {
    flag: boolean
    private menu: any;
    private data() {
      return {
        flag: false,
        titkle: 'haha',
        menu: [
          {
            title: 'JS基础', menu2: [
              'JS历史', 'Js基本数据类型',
              'Js基本语法'
            ],
            show:0,
          },
          {
            title: '  HTML相关', menu2: [
              'html标签', '常用的基本元素', 'Html总结'
            ],
            show:0,
          },
          {title: ' Js三座大山', menu2: ['原型链', 'this', 'ajax'], show:0,},
          {title: 'Vue', menu2: ['Vue基本语法', 'Vue常用命令', 'Vue路由'],show:0},
          {title: 'React', menu2: ['React基本语法', 'React基本命令', 'React路由'], show:0},
          {title: 'Weapack', menu2: ['webpack基本配置', 'webpack转换配置'], show:0},
        ]
      }
    }

    private ShowMenu(e) {
      e.preventDefault()
      let id = e.currentTarget.attributes[0]["value"]
      // console.log(id);
      // console.log(this);
      this.menu.forEach((e,index)=>{
        // console.log(e,index)
        if(index===parseInt(id)){
          e.show?e.show=0:e.show=1
          // if(e.show){
          //   e.show =0
          // }else{
          //   console.log(e)
          //   e.show =1
          // }
        }
      })
      // let hashMap = {
      //   "0": true,
      //   "1": true,
      //   "2": true,
      //   "3": true,
      //   "4": true,
      //   "5": true,
      // }
    }

  }


  // data() {
  //   return {
  //     flag: false,
  //     flag2: false,
  //     flag3: false,
  //     flag4: false,
  //     flag5: false,
  //     active: false,
  //     article: [],
  //     flag: false,
  //     wrap: "",
  //     footer: [
  //       {
  //         name: "学习",
  //         path: "/learn",
  //         img: book
  //       },
  //       {
  //         name: "记忆",
  //         path: "/memory",
  //         img: memory
  //       },
  //       {
  //         name: "笔记",
  //         path: "/note",
  //         img: penceil
  //       },
  //       {
  //         name: "倒计时",
  //         path: "/timeClick",
  //         img: star
  //       }
  //     ]
  //   };
  // },

  // getSon() {
  //   axios.get("/addArticle").then(res => {
  //     console.log(res.data);
  //     this.article = res.data;
  //   });
  // },
  // change() {
  //   // console.log('点击')
  //   this.flag = !this.flag;
  //   console.log(this.flag);
  // }


  // showItem(e) {
  //   let id = e.target.dataset.id;
  //   switch (id) {
  //     case "1":
  //       this.flag = !this.flag;
  //       break;
  //     case "2":
  //       this.active = !this.active;
  //       break;
  //     case "3":
  //       this.flag2 = !this.flag2;
  //       break;
  //     case "4":
  //       console.log(4);
  //       //   this.flag3 = !this.flag3;
  //       break;
  //     case "5":
  //       console.log(5);
  //       this.flag3 = !this.flag3;
  //       break;
  //     case "6":
  //       console.log(6);
  //       this.flag4 = !this.flag4;
  //       break;
  //   }
  // }


  //   getTitle() {
  //     // axios.get("api/addArticle").then(res => {
  //     //   this.title = res.data;
  //     //   this.article.push(this.title);
  //     // });
  //   }
  //
  // ,

  // getWrap(e) {
  //   console.log(e);
  //   let id = e.target.getAttribute("data");
  //   console.log(id);
  //   this.$router.push({path: "/wrap", query: {_id: id}});
  //   axios
  //     .get("/api/note", {
  //       params: {
  //         _id: id
  //       }
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //       this.wrap = res.data[0].article;
  //     });
  //   // axios.get()
  // }

  // mystart(){
  //     var canvas = document.getElementById('canvas')
  //     ctx = canvas.getContext('2d'),
  //     w = canvas.width = window.innerWidth
  //     h = canvas.height = window.innerHeight
  //     let hue = 217
  //     let stars = []
  //     let count = 0
  //     maxStart = 1200
  //     var canvas2 = document.createElement('canvas')
  //     ctx2 = canvas2.getContext('2d')
  //     canvas2.width=100
  //     canvas2.height=100
  //     var half = canvas2.width/2
  //     gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  //     gradient2.addColorStop(0.025, '#fff');
  //     gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
  //     gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  //     gradient2.addColorStop(1, 'transparent');

  //     ctx2.fillStyle = gradient2;
  //     ctx2.beginPath();
  //     ctx2.arc(half, half, half, 0, Math.PI * 2);
  //     ctx2.fill();

  // },

</script>


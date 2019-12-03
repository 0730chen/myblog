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
          <li class="link-item">收集文章</li>
          <li class="link-item">面试</li>
        </div>
      </div>
    </nav>
    <div class="container">
      <aside class="sidebar">
        <ul v-for="(item,index) in menu" class="menu-tree">
          <strong>
            <div @click="ShowMenu" :data=index>{{item.title}}
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiangyoujiantou"></use>
              </svg>
            </div>
          </strong>
          <li v-for="e in item.menu2" class="title">
            <div v-if="item.show">{{e}}</div>
          </li>
        </ul>
      </aside>
      <div class="main">
        <div><h3 id="学习时光轴"><a href="#学习时光轴" class="header-anchor">#</a>
          学习时光轴</h3> <h4 id="这里是使用的emoji表情"><a href="#这里是使用的emoji表情" class="header-anchor">#</a> 这里是使用的Emoji表情 🔍</h4>
          <ul>
            <li>🚀 像火箭一样学习</li>
            <li>⚡️ 灵光乍现</li>
            <li>🐛 加班源泉</li>
            <li>🔥 学习热情像火苗一样</li>
            <li>🎉 小tips</li>
          </ul>
          <hr>
          <h4 id="每天至少保持两个小时的有效学习时间"><a href="#每天至少保持两个小时的有效学习时间" class="header-anchor">#</a> 每天至少保持两个小时的有效学习时间</h4>
          <h3 id="_2019-9-13-21"><a href="#_2019-9-13-21" class="header-anchor">#</a> 2019-9-13 -&gt; 21 🔥</h3>
          <ul>
            <li>🎉 开始学习前端</li>
            <li>🎉 学习Html基础知识，总结一篇Html笔记</li>
            <li>🎉 Html常用标签及其常用属性，完成一个静态页面，类似于维基百科介绍页</li>
          </ul>
          <hr>
          <h3 id="_2019-9-22-30"><a href="#_2019-9-22-30" class="header-anchor">#</a> 2019-9-22 -&gt; 30 🔥</h3>
          <ul>
            <li>🎉 开始学习Css</li>
            <li>🎉 Css基础知识，总结一篇笔记</li>
            <li>🎉 学习常见的Css布局</li>
            <li>🎉 通关Flex布局和grid布局的小游戏</li>
            <li>🎉 学习Css动画</li>
            <li>🎉 完成一个页面，包含Css布局和动画</li>
          </ul>
          <h3 id="_2019-10-7-9"><a href="#_2019-10-7-9" class="header-anchor">#</a> 2019-10-7 -&gt; 9</h3>
          <ul>
            <li>🎉 开始学习git命令</li>
            <li>🎉 使用git连接github</li>
            <li>🎉 学习linux相关指令,总结一篇笔记</li>
          </ul>
          <h3 id="_2019-10-10"><a href="#_2019-10-10" class="header-anchor">#</a> 2019-10-10 -&gt; 🚀</h3>
          <ul>
            <li>🎉 学习JS基础知识(数据类型，变量)，完成一篇笔记</li>
            <li>🎉 学习JS语句(for if else while),完成一篇笔记</li>
            <li>🎉 let var const 定义变量的区别</li>
            <li>🎉 对象,函数，数组</li>
            <li>🎉 原型，原型链，JS世界的构建</li>
            <li>🎉 学习使用canvas画图</li>
            <li>🎉 数据结构</li>
            <li>🎉 常用的排序算法算法</li>
            <li>🎉 JS的DOM编程</li>
            <li>🎉 操作网页上的元素</li>
          </ul>
          <h3 id="_2019-10-20"><a href="#_2019-10-20" class="header-anchor">#</a> 2019-10-20 -&gt; 🚀</h3>
          <ul>
            <li>🎉 Jquery库的学习</li>
            <li>🎉 parcel工具使用</li>
            <li>🎉 实现一个静态服务器</li>
            <li>🎉 Ajax，请求网络资源</li>
            <li>🎉 跨域问题，如何解决</li>
            <li>🎉 配置微信JS-sdk应用</li>
          </ul>
          <h3 id="_2019-11-01"><a href="#_2019-11-01" class="header-anchor">#</a> 2019-11-01 -&gt; 🚀</h3>
          <ul>
            <li>🎉 学习Vue框架</li>
            <li>🎉 Vue和网易云音乐API搭建一个简单的网易云应用</li>
            <li>🎉 Node.js简单学习</li>
            <li>🎉 学习express框架</li>
            <li>🎉 学习mongodb数据库知识</li>
            <li>🎉 搭建简单的博客登陆/注册应用，对mongodb的增删查改</li>
            <li>🎉 学习koa框架</li>
            <li>🎉 学习React框架</li>
            <li>🎉 使用superagent和cheerio库搭建热榜数据接口</li>
            <li>🎉 使用React搭建一个每日热榜，天气查询(使用高德API)</li>
            <li>🎉 学习MVC结构 设计模式</li>
          </ul>
        </div>
      </div>
    </div>
    <footer>我是页脚</footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

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
            show: 0,
          },
          {
            title: '  HTML相关', menu2: [
              'html标签', '常用的基本元素', 'Html总结'
            ],
            show: 0,
          },
          {title: ' Js三座大山', menu2: ['原型链', 'this', 'ajax'], show: 0,},
          {title: 'Vue', menu2: ['Vue基本语法', 'Vue常用命令', 'Vue路由'], show: 0},
          {title: 'React', menu2: ['React基本语法', 'React基本命令', 'React路由'], show: 0},
          {title: 'Weapack', menu2: ['webpack基本配置', 'webpack转换配置'], show: 0},
        ]
      }
    }

    private ShowMenu(e) {
      e.preventDefault()
      let id = e.currentTarget.attributes[0]["value"]
      // console.log(id);
      // console.log(this);
      this.menu.forEach((e, index) => {
        // console.log(e,index)
        if (index === parseInt(id)) {
          e.show ? e.show = 0 : e.show = 1
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


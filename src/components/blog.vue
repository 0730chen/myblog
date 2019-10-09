<template>
  <div class="context clearfix">
    <img src="../assets/bg.jpg" alt />
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
        <ul @click="showItem($event)">
          <li class="sidebar-item" data-id="1" @click="getTitle">
            JS基础
            <ul v-if="flag">
              <li>JS历史</li>
              <li>Js基本数据类型</li>
              <li>Js基本语法</li>
            </ul>
          </li>
          <li class="sidebar-item" data-id="2" @click="getTitle">
            HTML相关
            <ul v-if="active">
              <li>JS历史</li>
              <li>Js基本数据类型</li>
              <li>Js基本语法</li>
            </ul>
          </li>
          <li class="sidebar-item" data-id="3" @click="getTitle">
            Js三座大山
            <ul v-if="flag2">
              <li>原型链</li>
              <li>this</li>
              <li>ajax</li>
            </ul>
          </li>
          <li class="sidebar-item" data-id="4"  @click="getTitle">代码demo</li>
          <li class="sidebar-item" data-id="5"  @click="getTitle">Vue
              <ul v-if="flag3">
                  <li>Vue基本语法</li>
                  <li>Vue采坑</li>
                  <li>Vue理解</li>	
              </ul>
          </li>
          <li class="sidebar-item" data-id="6" @click="getTitle">React
              <ul v-if="flag4">
                  <li>React基本语法</li>
                  <li>React采坑</li>
                  <li>React理解</li>	
              </ul>
          </li>
        </ul>
      </aside>
    <div class="main">
      <main
        class="theme-item"
        v-for="(item,index) in article[0]"
        :key="index"
        @click="getWrap($event)"
      >
        <li class="wrap-item" :data="item._id">{{item.Author}}</li>
      </main>
      </div>
       <footer>
        <div>我是页脚的部分:请添加内容</div>
      </footer>
    </div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.itemmenu {
  display: block;
}
.itemMenu {
  display: none;
}
a {
  text-decoration: none;
  color: black;
}
footer {
  left: 0;
  bottom: 0;
  height: 150px;
  width: 80%;
  margin-left: 330px;
  margin-top: 50px;
}
.main{
  border: 1px solid red;
  height: 800px;
  max-height: 100%;
  width: 600px;
  position: relative;
  margin-top: 100px;
  left: 60%;
  transform: translateX(-50%)
}
.container {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
  height: 1000px;
  max-width: 100%;
  border: 1px solid black;
}
/* .clearfix::after {
  display: block;
  clear: both;
  content: "";
} */

main {
  width: 50%;
  top: 50px;
  margin-left: 150px;
  margin-top: 50px;
  background: #e3e3e3;
}
.sidebar > ul {
  padding: 20px;
  overflow-y: auto;
}
.wrap-item {
  border: 1px solid black;
  margin-top: 50px;
  height: 40px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

.sidebar-item {
  border: 1px solid black;
  display: block;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 700;
}
.sidebar {
  font-size: 18px;
  width: 300px;
  left: 0;
  position: fixed;
  bottom: 0;
  top: 55px;
  overflow-y: auto;
  display: inline-block;
  background: #e3e3e3;
}
.context > img {
  max-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.context {
  font-size: 0.14px;
  width: 100%;
  height: 100%;
}
nav {
  position: fixed;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  top: 0;
  background: #e3e3e3;
}
.nav {
  position: relative;
  max-width: 100%;
  height: 50px;
  border: 1px solid black;
}
.nav > span {
  position: absolute;
  left: 0;
  font-size: 20px;
  margin: 10px 0 0 10px;
}
.linkList {
  position: absolute;
  width: 40%;
  max-width: 1669px;
  height: 50px;
  right: 0;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  font-size: 18px;
}
.linkList > li:first-child {
  margin-left: 0;
}
.link-item {
  width: 100px;
  border: 1px solid black;
  margin-left: 50px;
  padding: 12px;
}
li {
  list-style: none;
}
@media (max-width:500px) {
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

  .sidebar{
    width: 150px;
  }
  .main{
    top: 0;
    width: 64%;
    height: 500px;
    top: 10px;
    z-index: 101;
    right: 60%;
    transform: translateX(-37%);
    position: relative;
  }
  .link-item{
    margin-left: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container{
    height: 700px;
    width: 100%;
  }
.linkList>a{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .linkList{
    right: 50px;
    width: 50%;
  }
  footer{
    margin: 0;
    height: 20px;
  }
  .wrap-item{
    font-size: 15px;
  }
  main{
    margin-left: 60px;
  }
  
}
</style>>
<script>
import menu from "../components/menuList";
import axios from "axios";
import Element from "element-ui";
import backgr from "../components/backgr";
import backgr2 from "../components/backgr2";
const book = require("../assets/book.png");
const memory = require("../assets/pen.png");
const penceil = require("../assets/penceil.png");
const star = require("../assets/star.png");
export default {
  data() {
    return {
      flag: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      active: false,
      article: [],
      flag: false,
      wrap: "",
      footer: [
        {
          name: "学习",
          path: "/learn",
          img: book
        },
        {
          name: "记忆",
          path: "/memory",
          img: memory
        },
        {
          name: "笔记",
          path: "/note",
          img: penceil
        },
        {
          name: "倒计时",
          path: "/timeClick",
          img: star
        }
      ]
    };
  },
  components: {
    menuList: menu,
    backgr: backgr,
    backgr2: backgr2
  },
  methods: {
    manger() {
      this.$router.push({ path: "/loging" });
    },
    getSon() {
      axios.get("/addArticle").then(res => {
        console.log(res.data);
        this.article = res.data;
      });
    },
    change() {
      // console.log('点击')
      this.flag = !this.flag;
      console.log(this.flag);
    },
    showItem(e) {
      let id = e.target.dataset.id;
      switch (id) {
        case "1":
          this.flag = !this.flag;
          break;
        case "2":
          this.active = !this.active;
          break;
        case "3":
          this.flag2 = !this.flag2;
          break;
        case "4":
          console.log(4);
        //   this.flag3 = !this.flag3;
          break;
        case "5":
          console.log(5);
          this.flag3= !this.flag3;
          break;
        case "6":
          console.log(6);
          this.flag4 = !this.flag4;
          break;
      }
    },
    getTitle() {
      axios.get("api/addArticle").then(res => {
        this.title = res.data;
        this.article.push(this.title);
      });
    },
    getWrap(e) {
      console.log(e);
      let id = e.target.getAttribute("data");
      console.log(id);
      this.$router.push({ path: "/wrap", query: { _id: id } });
      axios
        .get("/api/note", {
          params: {
            _id: id
          }
        })
        .then(res => {
          console.log(res.data);
          this.wrap = res.data[0].article;
        });
      // axios.get()
    }

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
  },
  created() {},
  mounted() {}
};
</script>


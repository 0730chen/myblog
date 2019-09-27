<template>
  <div class="context clearfix">
    <nav>
      <div class="nav">
        <span>
          <strong>前端笔记</strong>
        </span>
        <div class="linkList">
          <a href="#/manage">
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
          <li class="sidebar-item" data-id="1">
            JS基础
            <ul v-if="flag">
              <li>JS历史</li>
              <li>Js基本数据类型</li>
              <li>Js基本语法</li>
            </ul>
          </li>
          <li class="sidebar-item" data-id="2">
            HTML相关
            <ul v-if="active">
              <li>JS历史</li>
              <li>Js基本数据类型</li>
              <li>Js基本语法</li>
            </ul>
          </li>
          <li class="sidebar-item" data-id="3">
            Js三座大山
            <ul v-if="flag2">
              <li>原型链</li>
              <li>this</li>
              <li>ajax</li>
            </ul>
          </li>
          <li class="sidebar-item" data-id="4">代码demo</li>
          <li class="sidebar-item" data-id="5">一些想法</li>
          <li class="sidebar-item" data-id="6">一些想法</li>
        </ul>
      </aside>
      <main class="theme-item">
        <li class="sidebar-item">JS基础</li>
        <li class="sidebar-item">HTML相关</li>
        <li class="sidebar-item">Js三座大山</li>
        <li class="sidebar-item">代码demo</li>
        <li class="sidebar-item">一些想法</li>
        <li class="sidebar-item">一些想法</li>
        <li class="sidebar-item">
          Js三座大山
          <ul>
            <li>原型链</li>
            <li>this</li>
            <li>ajax</li>
          </ul>
        </li>
        <li class="sidebar-item">代码demo</li>
        <li class="sidebar-item">一些想法</li>
        <li class="sidebar-item">一些想法</li>
      </main>
      <footer>
        <div>这是我的页脚</div>
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
  height: 100px;
  width: 80%;
  border: 1px solid red;
  margin-left: 330px;
  margin-top: 50px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
/* .clearfix::after {
  display: block;
  clear: both;
  content: "";
} */
main {
  width: 80%;
  top: 120px;
  margin-left: 330px;
  margin-top: 50px;
}
.sidebar > ul {
  padding: 20px;
  overflow-y: auto;
}
.sidebar-item {
  border: 1px solid black;
  margin-top: 50px;
  height: 100px;
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
  background: #fff;
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
  background: #fff;
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
</style>>
    
<script>
import blogTitle from "../components/title";
import mymenu from "../components/menu";
import axios from 'axios'
export default {
  data() {
    return {
      flag: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      active: false
    };
  },
  components: {
    mymenu: mymenu,
    blogTitle: blogTitle
  },
  methods: {
    getF(e) {
      if (e) {
        console.log(e);
        this.flag = e;
        this.CoverF = e;
      } else {
        this.flag = !e;
        this.CoverF = !e;
      }
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
          break;
        case "5":
          console.log(5);
          break;
        case "6":
          console.log(6);
          break;
      }
    },
    getTitle(){
            axios.get('api/addArticle').then(res=>{
                console.log(res.data)
                this.title = res.data
            })
        
             
        },
  },
  mounted() {
    getTitle.call(window)
  }
};
</script>
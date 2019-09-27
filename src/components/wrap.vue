<template>
  <div class="context">
    <nav>
      <div class="nav">
        <span>
          <strong>前端笔记</strong>
        </span>
        <div class="linkList">
          <a href="/">
            <li class="link-item">Home</li>
          </a>
          <li class="link-item">博客</li>
          <li class="link-item">感想</li>
        </div>
      </div>
    </nav>
    <backgr2></backgr2>
    <div class="title">{{title}}</div>
    <div v-html="wrap" class="wrap">{{wrap}}</div>
  </div>
</template>
<style scoped>
.title {
  top: 0;
  position: absolute;
  width: 50%;
  height: 50px;
  border: 1px solid black;
  margin-top: 80px;
  text-align: center;
}
.wrap {
  position: absolute;
  top: 0;
  width: 50%;
  height: 2rem;
  margin-top: 160px;
  border: 1px solid black;
  background: rgb(0, 0, 0, 0.5);
  color: aliceblue;
}
.show-enter-active {
  transition: all 0.5s ease;
}
.show-leave-active {
  transition: all 0.5s ease;
}
.show-enter {
  transform: translateX(1rem);
  opacity: 0;
}
.show-leave-to {
  transform: translateX(4rem);
}
.context {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  position: absolute;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  background: #e3e3e3;
  top: 0;
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
</style>
<script>
import menuList from "../components/menuList";
import axios from "axios";
import backgr2 from "./backgr2";
export default {
  data() {
    return {
      wrap: "",
      flag: false,
      title: ""
    };
  },
  components: {
    "menu-list": menuList,
    backgr2: backgr2
  },
  methods: {
    change() {
      this.flag = !this.flag;
    },
    getJsonId() {
      let json = this.$route.query._id; //router传参 route接受参数
      console.log(json);
      axios
        .get("/api/note", {
          params: {
            _id: json
          }
        })
        .then(res => {
          console.log(res);
          console.log(res.data[0]["article"]);
          this.wrap = res.data[0]["article"];
          this.title = res.data[0].Author;
        });
    }
  },
  mounted() {
    this.getJsonId();
  }
};
</script>
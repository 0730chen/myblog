<template>
  <div class="nav-container">
    <aside class="nav-left">
      <div class="nav-title">导航列表</div>
      <div class="item-menus">
        <ul v-for="item in allWeb">
          <a href="">
            <li class="menu-title">{{item.title}}</li>
          </a>
        </ul>
      </div>
      <a href="#/Comments" class="addComments">留言</a>
    </aside>
    <div class="nav-main">
      <div class="nav-fe" v-for="item in allWeb">
        <div>{{item.title}}</div>
        <div class=" nav-block">
            <div class="nav-items" v-for="e in item.menu">
              <a :href="e.url"><ul class="nav-item">
                <li class="item-logo">{{e.title}}</li>
                <li>{{e.intr}}</li>
              </ul>
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from "vue-class-component";

  @Component({})
  export default class Navigation extends Vue {
    allMenu: string[]
    allWeb: String[]

    private data() {
      return {

        allWeb: [
          {
            title: '前端组织',
            menu: [
              {
                title: '腾讯AlloyTeam团队',
                url: 'http://www.alloyteam.com/',
                intr: '腾讯web前端团队，代表作品WebQQ',
                logo: ''
              }, {
                title: '淘宝前端团队(FED)',
                url: 'https://fed.taobao.org/',
                intr: '用技术为体验提供无限可能'
              }
            ]
          },
          {
            title: '社区组织',
            menu: [
              {
                title: '掘金',
                url: 'https://juejin.im/timeline',
                intr: '前端分享社区'
              },
              {
                title: 'Stack Overflow',
                url: 'https://stackoverflow.com/',
                intr: '编程相关的技术问答平台'
              },
              {
                title: 'V2EX',
                url: 'https://www.v2ex.com/',
                intr: '分享和探索的交流平台'
              },
              {
                title: 'CNode',
                url: 'https://cnodejs.org/',
                intr: '专业的Node.js社区'
              }
            ]
          },
          {
            title: '框架和库',
            menu: [
              {
                title: 'Vue.js',
                url: 'https://cn.vuejs.org/',
                intr: '数据驱动的渐进式框架'
              },
              {
                title: 'Jquery',
                url: 'https://www.jquery123.com/',
                intr: '经久不衰的前端库'
              },
              {
                title: 'React.js',
                url: 'https://reactjs.org/',
                intr: '构建界面的框架'
              },
              {
                title: 'React Native',
                url: 'https://reactnative.cn/',
                intr: '使用React构建原生app的框架'
              }
            ],
          },
          {
            title: 'Css',
            menu: [
              {
                title: 'Css动画库',
                url: 'https://daneden.github.io/animate.css/',
                intr: '可以直接使用Css实现动画'
              },
              {
                title: 'Scss和Sass',
                url: "http://sass.bootcss.com/docs/sass-reference/",
                intr: '强大的Css扩展语言'
              },
            ],
          },
          {
            title: '影视',
            menu: [
              {
                title: '腾讯视频',
                url: '',
                intr: '腾讯视频播放器'
              },
              {
                title: '芒果TV',
                url: '',
                intr: '海量资源的播放器'
              },
              {
                title: '优酷视频',
                url: '',
                intr: '优酷播放器'
              }
            ],
          },
          {
            title: '音乐',
            menu: [
              {
                title: '网易云音乐',
                url: '',
                intr: '网易出品的云村'
              },
              {
                title: 'QQ音乐',
                url: '',
                intr: '腾讯出品的音乐播放软件'
              },
              {
                title: '咪咕音乐',
                url: '',
                intr: '最为推荐的音乐播放器'
              }
            ]
          },
          {
            title: '游戏',
            menu: [
              {
                title: 'PhaserJS',
                url: '',
                intr: 'PC端和移动端HTML5游戏框架'
              },
              {
                title: 'Cocos2d-x',
                url: '',
                intr: '以内容创作为核心的一体化游戏开发工具'
              },
              {
                title: '白鹭引擎',
                url: '',
                intr: '为移动灵越提供完整高效的游戏及应用解决方案'
              }
            ]

          }

        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .item-menus {
    ul {
      padding-top: 20px;
      padding-left: 5px;
    }
  }

  .menu-title {
    padding-right: 15px;
    font-size: 15px;
    color: #6b7386;
  }

  .menu-title:hover {
    color: white;
  }

  .nav-container {
    display: flex;
    flex-direction: row;

    .nav-left {
      position: fixed;
      padding: 0 24px;
      z-index: 10000;
      width: 248px;
      z-index: 100;
      height: 100vh;
      display: flex;
      background: #30333c;
      box-sizing: border-box;
      flex-direction: column;
      color: #6b7386;

      .nav-title {
        color: #fff;
        font-size: 18px;
        height: 50px;
        line-height: 50px;
      }

    }

    .nav-main {
      margin: 0 auto;
      width: 100%;
      padding-left: 500px;
      background: #f3f6f8;
    }

    .active {
      color: white;
    }

    .nav-fe {
      overflow: hidden;
      background: #fff;
      margin: 20px 30px;
      padding-bottom: 20px;
      padding-left: 50px;
    }

    .nav-block {
      display: flex;
      flex-direction: row;
      font-size: 12px;
      padding-top: 10px;
      .nav-items {
        width: 20%;
        border-radius: 6px;
        background: #fff;
        padding: 10px;
        min-width: 200px;
        margin: 22px 0 0 2.1%;
        border: 1px solid #e4ecf3;
        box-shadow: 1px 2px 3px #f2f6f8;
      }
    }

    .item-logo {
      height: 40px;
      position: relative;
      font-size: 14px;
      font-weight: 700;
      color: #3273dc;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 .1rem;
    }

    .addComments {
      position: fixed;
      z-index: 100;
      bottom: 50px;
      width: 200px;
      background: #30333c;
      color: white;
      padding-top: 20px;
      padding-left: 5px;
    }
    .nav-item{
      color: gray;
    }


  }
</style>

<template>
    <div class="context">
        <el-container>
            <el-header>
                <el-button type="primary" icon="el-icon-edit" @click="manger">管理</el-button>
                <el-dropdown>
                <span class="el-dropdown-link">
                 标签<i class="el-icon-arrow-down el-icon--right"></i>
                 </span>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>JS</el-dropdown-item>
                <el-dropdown-item>Css</el-dropdown-item>
                <el-dropdown-item>后端</el-dropdown-item>
                <el-dropdown-item>HTTP</el-dropdown-item>
                <el-dropdown-item>随手记</el-dropdown-item>
               
                 </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-main>
                    <el-menu>
                        <el-menu-item idnex="1">首页
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">笔记</template>
                        </el-submenu>
                        <el-menu-item index="3" >每日学习    </el-menu-item>
                        <el-menu-item index="4">算法</el-menu-item>
                    </el-menu>
                </el-main>
                <el-aside>
                    <div class="article" v-for="(item,index) of article" :key="index">
                    {{item.title}}
                    <el-divider></el-divider>
                </div> 
                </el-aside>
            </el-container>
            
        </el-container>
    </div>
</template>
<style scoped>
.el-button--primary{
    background-color: #4f5458;
    transform: translateY(-0.25rem)
}
.el-menu{
    width: 100%;
}
.el-menu-item{
    font-size: 0.12rem;
}
.el-main{
    background-color:#FFF;
    border:0.06rem;
    padding: 0;
    font-size: 0.12rem;
    width: 100px;
}
.el-popper{
    margin-top: -0.2rem;
}
.el-dropdown{
    position: relative;
    width: 70%;
    height: 100%;
}
.el-dropdown-link {
    cursor: pointer;
    color:#54595f;
    position: absolute;
    right: 0.2rem;
    font-size: 0.2rem;
    top:20%;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.article{
    height: 1rem;
    text-align: center;

}
.context{
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    background-color: #f5f7f9
}
.el-container{
    height: 100%;
    border:1px solid black;
}

.el-aside{
    color:#333;
    height: 100%;
}
.el-breadcrumb{
    font-size: 0.12rem;
    height: 0.5rem;
    width: 2rem;
    position: absolute;
    font-size: 0.2rem;
    transform: translateY(0.05rem)
}



</style>
<script>
import axios from 'axios'
import Element from 'element-ui'
// console.log(Element)
export default {
    data(){
        return {
            article:[
                {
                    title:'JavaScript',
                    context:'ssss',
                },
                {
                    title:'这是文章',
                    context:'内容'
                }

            ]
        }
    },
    component:{
    
    },
    methods:{
        manger(){
            this.$router.push({'path':'/loging'})
        },
        getSon(){
            axios.get('http://chentian.ltd/')
        }

    }

}
</script>


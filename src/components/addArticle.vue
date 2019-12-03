<template>
  <div class="Addarticle">
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="文章标题">
        <el-input v-model="formLabelAlign.title"></el-input>
      </el-form-item>
    </el-form>
    <div class="editor">
      <quillEditor v-model="wraper"></quillEditor>
    </div>
    <el-button type="primary" id="addWrap" @click="add">发表文章</el-button>
  </div>
</template>
<script lang="ts">
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {quillEditor} from 'vue-quill-editor'
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  @Component({
    components: {
      quillEditor: quillEditor
    }
  })
  export default class AddAriticle extends Vue {
    input: string
    private formLabelAlign: any;
    private wraper: string;

    private data() {
      return {
        flag: false,
        CoverF: false,
        wraper: '',
        input: '',
        labelPosition: 'right',
        formLabelAlign: {
          title: '',
        }
      }
    }
    private add(e){
      let Article = {title:this.formLabelAlign.title,content:this.wraper}
      //发送请求将数据储存到数据库中
    }
  }
  //获取文章和标题组合起来储存到数据库中
  // export default {
  //     data(){
  //         return {
  //              flag:false,
  //             CoverF:false,
  //             wraper:'',
  //             title:''
  //         }
  //     },
  //     components:{
  //         'mymenu':mymenu,
  //         'blogTitle':blogTitle,
  //         'quillEditor':quillEditor
  //     },
  //     methods: {
  //         getF(e){
  //             if(e){
  //             // console.log(e)
  //             this.flag = e
  //             this.CoverF = e
  //             }else{
  //                 this.flag =!e
  //                 this.CoverF =!e
  //             }
  //             // console.log(e)
  //             // this.flag = e
  //             // this.CoverF = e
  //         },
  //         change(){
  //             this.flag = false
  //         },
  //         //将页面上的文章和标题存在数据库中
  //         getData(){
  //             if(this.title || this.wraper === ''){
  //                 alert('标题或者内容不能为空')
  //             }else{
  //             axios.post('/api/addArticle',{
  //                 title:this.title,
  //                 wraper:this.wraper,
  //             }).then(res =>{
  //                 alert('添加'+res.data)
  //                 this.$router.push({path:'/register'})
  //                 // console.log(res.data)
  //             })
  //             }
  //         }
  //     },
  //     mounted() {
  //
  //         // if(this.title ||this.wraper == ''){
  //         //     alert('标题内容不能为空')
  //         // }else{
  //         //     this.getData()
  //         // }
  //     },
  // }
</script>

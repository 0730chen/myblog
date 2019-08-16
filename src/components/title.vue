<template>
    <div class="title">
        <div class="myMenu" @click="change"></div>
        <span id="title">管理博客</span>
    </div>
</template>
<style scoped>
#title{
    position: absolute;
    width:1rem;
    height:1rem;
    transform: translateY(0.1rem)
}
.title{
    position: relative;
    width: 99%;
    height: 0.4rem;
    border: 1px solid black;
    text-align: center;
}
.myMenu{
    width: 60px;
    height: 30px;
    position: absolute;
    top: 0.04rem;
    left: 0;
    background: url('../assets/menu.png') 100% 100% no-repeat;
    background-size: 40%;
    margin: 0 auto
}
    
</style>
<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    methods: {
        change(){
            this.flag = !this.flag
            this.$emit('titleV',this.flag)
        }
    },
}
</script>
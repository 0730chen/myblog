<template>
    <div class="context">
        <div>文章</div>
        <div v-html="wrap">{{wrap}}</div>
    </div>
</template>
<style scoped>
    .context{
        font-size: 0.16rem
    }
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            wrap:''
        }
    },
    methods: {
        getJsonId(){
            let json = this.$route.query._id//router传参 route接受参数
            console.log(json)
            axios.get('/api/note',{
                params:{
                   "_id":json
               }
            }).then(res=>{
                 console.log(res.data[0]['article'])
                this.wrap = res.data[0]['article']

                
            })
        }
    },
    mounted() {
        this.getJsonId()
    },

}
</script>
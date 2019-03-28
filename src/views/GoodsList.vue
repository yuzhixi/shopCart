<template>
    <div class="goodsList">
        <ul>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
        </ul>
        <button @click="getGoodsList">加载更多</button>
        <ul class='scrollBox'>
            <li v-bind:key="x.productId" v-for="x in goodsList">
                商品ID：{{x.productId}}
                商品名：{{x.productName}}
                商品价格：{{x.productPrice}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'GoodsList',
    data(){
        return {
            goodsList:null,
            pageSize:8,
            pageNum:1,
            loadMoreFlag:false
        }
    },
    mounted(){
        this.getGoodsList();
        // 注册scroll事件并监听
        // let ul = document.getElementsByClassName('scrollBox')[0];
        window.addEventListener('scroll',function(){
            // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
            // console.log(document.body.scrollTop); // 滚动高度
            // console.log(document.body.offsetHeight); // 文档高度
            // 判断是否滚动到底部
            // console.log('ul',ul)
            if(window.scrollTop + window.innerHeight >= window.offsetHeight) {
                // console.log(sw);
                // 如果开关打开则加载数据
                if(this.loadMoreFlag==true){
                    // 将开关关闭
                    this.loadMoreFlag = false;

                    this.getGoodsList()   
                }
            }
        });

    },
    methods:{
        getGoodsList(){
            this.$axios.get('/goods',{
                params:{
                    pageSize:this.pageSize,
                    pageNum:this.pageNum,
                }
            }).then((response)=>{
                let res = response.data;
                console.log('response',res)
                if(res.status == '0'){
                    this.pageNum++;
                    this.goodsList = res.result.list
                }else{
                    console.log(0)
                }
            })
        }
    }
}
</script>
<style>
    /* ul{
        height: 400px;
        overflow: scroll;
    } */
    ul>li{
        line-height: 90px;
        height: 90px;
    }
</style>




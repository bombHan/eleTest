<template>
    <div id="foot" >
        <div v-if="isBuy">
        您已经挑选了{{buy.length}}件商品为：<span v-for="(item,index) in buy"> {{goods[item].name}}×{{buyNum[index]}} </span>
            <router-link to="/pay"><el-button round>点击去付款</el-button></router-link>
        </div>
        <div v-else>
            您还没有在购物车中加入任何商品！
        </div>
    </div>
</template>
<script>
export default {
	data(){
		return{

		}
	},
	methods:{

	},
	computed:{
		isBuy(){
			return this.$store.state.buy.length > 0
		},
		buy(){
			let buyed=this.$store.state.buy
			buyed=buyed.filter(function (ele,index,arr) {
				return index==arr.indexOf(ele)
			})
			return buyed
		},
		goods(){
			return this.$store.state.goods

		},
		buyNum(){
			let buyNum=[]
			buyNum.length=this.buy.length
			const _this=this
			for(let j=0;j<this.buy.length;j++){
				let index=0
				this.$store.state.buy.forEach(function(ele){
					if(_this.buy[j]==ele){
						index++
					}
				})
				buyNum[j]=index
			}
			return buyNum
		}

	}
}
</script>
<style lang='less'>
    #foot{
        position: fixed;
        bottom: 0;
        left: 0;
        background: #409eff;
        width: 100%;
        height: 60px;
        color: #fff;
        text-align: center;
        line-height: 60px;
        .el-button{
            padding: 6px;


        }
    }
</style>

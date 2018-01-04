<template>
    <div id="pay">
        <h3>支付页面</h3>
        <p class="title">以下为收货信息请核对：</p>
        <p>收货人姓名：{{this.$store.state.account[this.$store.state.logined].name}}</p>
        <p>收货人地址：{{this.$store.state.account[this.$store.state.logined].adr}}</p>
        <p>收货人电话：{{this.$store.state.account[this.$store.state.logined].phone}}</p>
        <p>您点的美味餐食：<span v-for="(item,index) in buy"> {{goods[item].name}}×{{buyNum[index]}} </span></p>
        <p>合计金额：{{sum}} 元</p>
        <el-button type="primary" round @click="pay">点击付款</el-button>
    </div>
</template>
<script>
export default {
	methods:{
		pay(){
			if(this.$store.state.buy.length==0){
				this.$alert("请先选择商品再付款谢谢！")
				this.$router.push("/search")
			}else {
				this.$alert("您已经成功付款,货正在来的路上！","成功",{
					callback: () =>{
						this.$store.state.buy=[]
						this.$store.state.goods.forEach(function(ele){
							ele.num=0
						})
						this.$router.push("/search")
					}
				})
			}
		}
	},
	computed:{
		goods(){
			return this.$store.state.goods

		},
		sum(){
			let sum=0
			for(let i=0;i<this.$store.state.buy.length;i++){
				sum+=this.$store.state.goods[this.$store.state.buy[i]].value
			}
			return sum
		},
		buy(){
			let buyed=this.$store.state.buy
			buyed=buyed.filter(function (ele,index,arr) {
				return index==arr.indexOf(ele)
			})
			return buyed
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
    #pay{
        padding-left:20px ;
        h3{
            color: #409eff;
        }
        p{
            font-size: 16px;
            color: #666;
            line-height: 30px;
        }
        .title{
            font-size: 18px;
        }

    }
</style>
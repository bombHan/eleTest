<template>
    <div id="goodsSearch">
		<div class="search">
            <el-input ref="test" v-model="food" placeholder="请输入要搜索的食物" @keyup.native="show($event)"></el-input>
            <el-button @click="search" >搜索</el-button>
			<el-button @click="reset">重置</el-button>
		</div>
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.src" alt="我是菜肴图片">
				<div class="nav">
					<p class="title">{{index}}.{{item.name}}</p>
					<p class="content">{{item.content}}</p>
					<p class="value">￥{{item.value}}</p>
				</div>
				<el-button type="primary" round class="plus" @click="plus(item.id)" icon="el-icon-plus"></el-button>
                    <span class="num" v-if="item.num>0">{{item.num}}</span>
                <el-button v-if="item.num>0" type="primary" round class="remove" icon="el-icon-remove" @click="remove(item.id)"></el-button>
            </li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			goodsNum:[0,0,0,0,0,0,0,0,0,0],
			food:"",
			searchList:[]
		}
	},
	methods:{
		show(ev){
			if(ev.keyCode == 13){
				this.search()
			}
		},
		plus(index){
			if(this.$store.state.logined>=0){
				this.$store.state.buy.push(index)
				this.$store.state.goods[index].num++
			}else{
				alert("请先登录再购物,谢谢！")
				this.$router.push("/login")
			}
		},
		remove(index){
			if(this.$store.state.logined>=0){
				if(this.$store.state.buy.indexOf(index)>=0){
					this.$store.state.buy.splice(this.$store.state.buy.indexOf(index),1)
					this.$store.state.goods[index].num--
				}
			}else{
				alert("请先登录再购物,谢谢！")
				this.$router.push("/login")
			}
		},
		search(){
			// console.log(this.food);
			if(this.food==""){
			    this.$alert("请输入您要查询的食物！","提示")
				this.searchList=[]
			}else {
				this.searchList=[]
				let food=this.food.split("")
				// console.log(food)
				for(let i=0;i<food.length;i++){
					for(let j=0;j<this.$store.state.goods.length;j++){
						if(this.$store.state.goods[j].name.split("").indexOf(food[i])>=0){
							if(this.searchList.indexOf(this.$store.state.goods[j])<0){
								this.searchList.push(this.$store.state.goods[j])
							}
						}
					}
				}
				if(this.searchList.length==0){
					this.$alert("无此食物请重新搜索!","提示")
				}
			}
			//console.log(this.searchList);
		},
		reset(){
		    this.searchList=[]
		    this.food=""
		}
	},
	computed:{
		buy(){
			let buyed=this.$store.state.buy
			buyed=buyed.filter(function (ele,index,arr) {
				return index==arr.indexOf(ele)
			})
			return buyed
		},
		list(){
		    return this.searchList.length==0 ? this.$store.state.goods : this.searchList
		}
	},
	mounted(){

	}
}
</script>
<style lang='less'>
#goodsSearch{
	.search{
		 width: 100%;
		 height: 26px;
        margin:4px 0;
        .el-input{
            width: 75%;
            float: left;
			margin-left:2%;
        }
        .el-button{
            width: 10%;
            float: left;
			margin-left: 1%;
        }
	}
	ul{
		list-style-type: none;
		padding: 0;
		margin: 0;
		li{
			width: 100%;
			height: 80px;
			margin: 20px 0 ;
			overflow: hidden;
			background: #f3f5f7;
			img{
				width: 80px;
				float: left;
			}
			.nav{
				height: 100px;
				width: 200px;
				float: left;
				.title{
					padding-left: 12px;
					color: #000;
				}
				.content{
					padding:10px 12px;
					font-size: 12px;
					color: #999;
				}
				.value{
					color: red;
					padding-left: 12px;
					font-size: 16px;
				}
			}
			.plus{
				float: right;
				padding: 2px;
				margin: 12px;
				margin-top: 40px;
			}
			.num{
				float: right;
				line-height: 100px;
			}
			.remove{
				border: none;
				float: right;
				padding: 0px;
				font-size: 22px;
				margin: 12px;
				margin-top: 40px;
				color: #409eff;
				background: #fff;
			}
		}
	}
}
</style>
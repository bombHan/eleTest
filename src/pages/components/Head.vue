<template>
    <div id="head">
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#409eff"
        text-color="#fff"
        active-text-color="#ccc">
        <router-link to="/login"><el-menu-item index="1">登录</el-menu-item></router-link>
        <router-link to="/search"><el-menu-item index="2"><i class="el-icon-search"></i>商品选择</el-menu-item></router-link>
        <el-menu-item index="3" @click="toPay"><i class="el-icon-tickets"></i>支付</el-menu-item>
        </el-menu>
        <p class="hello">你好！{{this.$store.state.logined<0 ?'未登录用户': this.$store.state.account[this.$store.state.logined].account+' 用户'}}<span @click="logout" class="logout">退出</span></p>

    </div>
</template>
<script>
export default {
	data(){
		return{
			activeIndex: "1",
			activeIndex2: "1"
		}   
	},
	methods:{
		toPay(){
			this.$router.push("/pay")
           
		},
		logout(){
			this.$store.state.logined = -1
			this.$router.push("/login")
			this.$store.state.goods.forEach(function(ele){
				ele.num=0
			})
		}
	}
}
</script>
<style lang='less'>
#head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .el-menu-item {
        i{
            color: #fff;
        }
    }
    @media(min-width: 500px){
        .hello{
            position: absolute;
            color: #fff;
            top: 0;
            right: 20px;
            width: 200px;
            height: 60px;
            line-height: 60px;
            font-size: 12px;
            .logout{
                color: #fff;
                margin-left: 10px;
                cursor: pointer;
                text-decoration: underline;
                &:hover{
                    color: red;
                }
            }
        }
    }
    @media(max-width: 500px){
        .hello{
            display: none;
        }
    }
}
</style>

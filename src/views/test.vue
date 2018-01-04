<template>
    <div id="login">
        <div v-if="isLogin" class="loginBox">
            <p>你好啊,{{this.$store.state.account[this.$store.state.logined].account}}用户！</p>
            <p>您已登录可以进行购物和付款了！并请您核对以下信息!</p>
            <p>姓名：{{this.$store.state.account[this.$store.state.logined].name}}</p>
            <p>地址：{{this.$store.state.account[this.$store.state.logined].adr}}</p>
            <p>电话：{{this.$store.state.account[this.$store.state.logined].phone}}</p>
            <el-button type="danger" round class="logout" @click="logout">退出登录</el-button>
        </div>
        <div v-else>
            <p>你好啊,请登录！</p>
            账号：<el-input  placeholder="账号" id="login_login" clearable></el-input><br>
            密码：<el-input  placeholder="密码" id="login_pass" clearable></el-input>
            <br>
            <el-button @click="login">登录</el-button>
            <router-link to="/register"><el-button >去注册</el-button></router-link>            
        </div>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	methods:{
		login(){
			const oLogin=document.getElementById("login_login")
			const oPass=document.getElementById("login_pass")
			let index=-1
			for(let i=0;i<this.$store.state.account.length;i++){
				if(oLogin.value===this.$store.state.account[i].account&&oPass.value===this.$store.state.account[i].pass){
					index=i
// console.log(index);
				}
			}
			this.$store.state.logined=index
			if(this.$store.state.logined>=0){ //登录成功
				this.$store.state.buy=[]
				this.$store.state.goods.forEach(function(ele){
					ele.num=0
				})
				this.$router.push("/search")
			}else{
				alert("您的账号或者密码有误或者是未注册！")
			}
			oLogin.value=oPass.value=""
		},
		logout(){
			this.$store.state.logined = -1
			this.$store.state.goods.forEach(function(ele){
				ele.num=0
			})
		}
	},
	computed:{
		isLogin(){
			return this.$store.state.logined >= 0
		}
	},    
	mounted(){

	}
}


</script>
<style lang='less'>
    #login{
		width: 400px;
		height: 400px;
        margin: 60px auto 0;
		input{
			margin: 10px;
        }
        .loginBox{
            line-height: 30px;
            
            .logout{
                margin: 40px  0 0 300px;
                padding: 6px;
                font-size: 12px;
            }
        }
        @media(max-width: 800px){
            width: 350px;
            .el-input{
                width: 280px;
            }
        }
	}
	
</style>
<template>
    <div id="register">
        <p>hello,这是注册页面！</p>
        &nbsp&nbsp&nbsp账号：<el-input  placeholder="账号"  clearable id="add_login"></el-input><br>
        &nbsp&nbsp&nbsp密码：<el-input  placeholder="密码"  clearable id="add_pass"></el-input><br>
        &nbsp&nbsp&nbsp姓名：<el-input  placeholder="姓名"  clearable id="add_name"></el-input><br>
        &nbsp&nbsp&nbsp收货地址：<el-input  placeholder="收货地址"  clearable id="add_adr"></el-input><br>
        &nbsp&nbsp&nbsp联系号码：<el-input  placeholder="手机号码"  clearable id="add_phone" ></el-input><br>
        &nbsp&nbsp&nbsp<el-button @click="add">注册</el-button><el-button @click="back">去登陆</el-button>
    </div>
</template>
<script>
export default{
	data(){
		return{
		}
	},
	methods:{
		back(){
			this.$router.push("/login")
		},
		add(){
			const oLogin=document.getElementById("add_login")
			const oPass=document.getElementById("add_pass")
			const oName=document.getElementById("add_name")
			const oAdr=document.getElementById("add_adr")
			const oPhone=document.getElementById("add_phone")
			const phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/
			let apply=false
			let phoneTrue=false
//验证该账号是否已经被注册
			for(let i=0;i<this.$store.state.account.length;i++){
				if(oLogin.value==this.$store.state.account[i].account){
					apply=true
				}
			}
//验证手机号是否正确
			phoneTrue=phone.test(oPhone.value)
//验证该手机号是否被注册过
			for(let i=0;i<this.$store.state.account.length;i++){
				if(oPhone.value===this.$store.state.account[i].phone){
					phoneTrue=false
				}
			}
			if(oLogin.value=="" || oPass.value=="" || oName.value=="" || oAdr.value==""){
				alert("请填写完整您的注册信息!")
			}else if(apply){
				alert("抱歉，该账号已经被申请！")
			}else if(!phoneTrue){
				alert("您填写的手机号有误或者是已经被注册！")
			}else{
				let obj={}
				obj.account=oLogin.value
				obj.pass=oPass.value
				obj.name=oName.value
				obj.adr=oAdr.value
				obj.phone=oPhone.value
				this.$store.state.account.push(obj)
				oLogin.value=oPass.value=oName.value=oAdr.value=""
				alert("恭喜你注册成功!")
				this.$router.push("/login")
			}            
// console.log(this.$store.state.account);

		}
	},
	mounted(){
		const oPhone=document.getElementById("add_phone")
		const _this=this
		oPhone.addEventListener("keydown",function(ev){

			if(ev.keyCode===13){
				_this.add()
			}
		})
	}
}


</script>
<style lang='less'>
#register{
    width: 450px;
    height: 600px;
    margin: 60px auto 0;

    input{
			margin: 10px;
		}
    .el-input{
        width: 350px;
    }
    @media(max-width: 800px){
        width: 350px;
        .el-input{
            width: 280px;
        }
    }
}
</style>
import Vue from "vue"
import VueX from "vuex"
import VueRouter from "vue-router"
import storeConfig from "../store"
import routerConfig from "../router"
import HasRouteVue from "./index.vue"

const routerr=new VueRouter({
	routes: routerConfig
})
const storee=new VueX.Store(storeConfig)
new Vue({
	el: "#app",
	store: storee,
	router:routerr ,
	render: h => h(HasRouteVue)
})

routerr.beforeEach(function(to,from,next){
	let logined=storee.state.logined
	//console.log(logined)
	if(logined<0 && to.path==="/pay"){
		next("/login")
		alert("请先登录谢谢！")
	}else{
	   next()
	}
})
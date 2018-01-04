/**
 * Created by fuzl on 2017-11-9.
 * 路由配置，可以建多个路由配置文件，在不同页面中引用
 */
import Login from "../views/test.vue"
import Pay from "../views/pay.vue"
import Search from "../views/async.vue"
import Register from "../views/register.vue"

export default [
	{path:"/",redirect:"login"},
	{
		path: "/login",
		component: Login,
		name: "login"
	},
	{
		path: "/search",
		component: Search,
		name: "search"
	},
	{
		path: "/pay",
		component: Pay,
		name: "pay"
	},
	{
		path:"/register",
		component:Register,
		name:"register"
	}
]
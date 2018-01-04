/**
 * Created by fuzl on 2017-10-30.
 */

// 配合vuex，剔除第一个store参数

export default {
	state: {
		account:[{
			account:"123",
			pass:"123",
			name:"han",
			adr:"滨江高新软件园税友大厦",
			phone:"110"
		}],
		logined:-1,
		goods:[
			{name:"皮蛋瘦肉粥",src: require("../pic/1.jpg"),id:0,value:10,content:"月售188份 好评率100%",num:0},
			{name:"扁豆焖面",src:require("../pic/2.jpg"),id:1,value:15,content:"月售321份 好评率100%",num:0},
			{name:"葱油饼",src:require("../pic/3.jpg"),id:2,value:10,content:"月售148份 好评率100%",num:0},
			{name:"牛肉饼",src:require("../pic/4.jpg"),id:3,value:14,content:"月售43份 好评率85%",num:0},
			{name:"肉卷饼",src:require("../pic/5.jpg"),id:4,value:14,content:"月售473份 好评率100%",num:0},
			{name:"VC-橙汁",src:require("../pic/6.jpg"),id:5,value:8,content:"月售98份 好评率100%",num:0},
			{name:"上汤娃娃菜",src:require("../pic/7.jpg"),id:6,value:16,content:"月售197份 好评率88%",num:0},
			{name:"手撕包心菜",src:require("../pic/8.jpg"),id:7,value:16,content:"月售18份 好评率100%",num:0},
			{name:"炸鱼饼",src:require("../pic/9.jpg"),id:8,value:18,content:"月售90份 好评率85%",num:0},
			{name:"加多宝",src:require("../pic/10.jpg"),id:9,value:6,content:"月售96份 好评率100%",num:0}
		],
		buy:[]
	},
	actions:{

	},
	mutations: {

	},
	getters: {

	}
}